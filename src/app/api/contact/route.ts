import { NextResponse } from "next/server";

interface ContactRequestBody {
  name?: string;
  contact?: string;
  scope?: string;
  brief?: string;
}

// Simple in-memory rate limiter per IP (max 5 requests per 10 minutes)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }
  entry.count += 1;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "local";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Juda ko'p so'rov yuborildi. Iltimos, birozdan so'ng qayta urinib ko'ring yoki Telegram orqali bog'laning.",
        },
        { status: 429 }
      );
    }

    const body = (await request.json()) as ContactRequestBody;
    const name = (body.name || "").trim().slice(0, 120);
    const contact = (body.contact || "").trim().slice(0, 150);
    const scope = (body.scope || "Loyiha so'rovi").trim().slice(0, 120);
    const brief = (body.brief || "").trim().slice(0, 1500);

    if (!name || !contact || !brief) {
      return NextResponse.json(
        { ok: false, error: "Barcha majburiy maydonlarni to'ldiring." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId || botToken.includes("YOUR_BOT_TOKEN")) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Telegram Bot sozlanmagan (.env.local faylga TELEGRAM_BOT_TOKEN va TELEGRAM_CHAT_ID kiriting).",
        },
        { status: 500 }
      );
    }

    const timestamp = new Intl.DateTimeFormat("uz-UZ", {
      timeZone: "Asia/Tashkent",
      dateStyle: "short",
      timeStyle: "medium",
    }).format(new Date());

    const messageText = [
      `🚀 <b>Yangi Portfolio Buyurtma (eval42.uz)</b>`,
      ``,
      `👤 <b>Ism / Kompaniya:</b> ${escapeHtml(name)}`,
      `📞 <b>Aloqa (TG / Tel / Email):</b> ${escapeHtml(contact)}`,
      `🧭 <b>Yo'nalish:</b> ${escapeHtml(scope)}`,
      `🕒 <b>Vaqt (Toshkent):</b> ${escapeHtml(timestamp)}`,
      ``,
      `📝 <b>Loyiha haqida:</b>`,
      `${escapeHtml(brief)}`,
    ].join("\n");

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
          parse_mode: "HTML",
        }),
      }
    );

    if (!telegramRes.ok) {
      const errData = await telegramRes.text();
      console.error("Telegram API error:", errData);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Telegram botga yuborishda xatolik yuz berdi. Token va Chat ID ni tekshiring.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { ok: false, error: "Server xatosi yuz berdi." },
      { status: 500 }
    );
  }
}
