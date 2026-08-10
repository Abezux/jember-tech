import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message, company, service, budget } = data;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatIds = process.env.TELEGRAM_CHAT_ID?.split(',').map(id => id.trim()) || [];

    if (!botToken || chatIds.length === 0) {
      console.error("Missing Telegram bot token or chat IDs");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Format the message
    let text = `🔔 *New Contact/Inquiry*\n\n`;
    text += `*Name:* ${name || "N/A"}\n`;
    text += `*Email:* ${email || "N/A"}\n`;
    
    if (company) {
      text += `*Company:* ${company}\n`;
    }
    
    if (service) {
      text += `*Package/Service:* ${service}\n`;
    }
    
    if (budget) {
      text += `*Budget:* ${budget}\n`;
    }
    
    text += `\n*Message:*\n${message || "N/A"}`;

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const sendPromises = chatIds.map((id) =>
      fetch(telegramApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: id,
          text: text,
          parse_mode: "Markdown",
        }),
      })
    );

    const responses = await Promise.all(sendPromises);
    const hasError = responses.some((res) => !res.ok);

    if (hasError) {
      console.error("Telegram API error: One or more messages failed to send");
      return NextResponse.json(
        { error: "Failed to send message to one or more Telegram chats" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
