// src/services/mailService.ts
import nodemailer from 'nodemailer';
export class MailService {
    transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    async send(to, subject, message) {
        await this.transporter.sendMail({
            from: `"SAAJ NAIROBI" <${process.env.SMTP_FROM}>`,
            to,
            subject,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <p>Dear <strong>SAAJ Member</strong>,</p>

          <h3>${subject}</h3>
          <p>${message}</p>

          <p>Regards,<br><strong>SAAJ NAIROBI</strong></p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 30px;" />
          
          <p style="font-size: 12px; color: #777; font-style: italic;">
            <strong>Please Note:</strong> This is an automated notification. Replies sent to this email address are not monitored. If you need to respond or require assistance, please log in to your account and submit your query directly through the system dashboard.
          </p>
        </div>
      `,
        });
    }
}
//# sourceMappingURL=mailService.js.map