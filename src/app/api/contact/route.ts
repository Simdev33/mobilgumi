import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "simdev22@gmail.com";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Minden mező kitöltése kötelező." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "MobilGumis Weboldal <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Új üzenet a weboldalról - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a0505; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ff2d2d; margin: 0; font-size: 20px;">SOS MobilGumis</h1>
            <p style="color: #999; margin: 4px 0 0; font-size: 14px;">Új üzenet érkezett a weboldalról</p>
          </div>
          <div style="background: #111; padding: 24px; border: 1px solid #333; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #999; font-size: 14px; width: 80px; vertical-align: top;">Név:</td>
                <td style="padding: 8px 0; color: #fff; font-size: 14px; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #999; font-size: 14px; vertical-align: top;">Email:</td>
                <td style="padding: 8px 0; color: #ff2d2d; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #ff2d2d;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #999; font-size: 14px; vertical-align: top;">Üzenet:</td>
                <td style="padding: 8px 0; color: #ddd; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Hiba történt az üzenet küldésekor." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Szerverhiba történt." },
      { status: 500 }
    );
  }
}
