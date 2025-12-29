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
      <p>Dear <strong>SAAJ Member</strong>,</p>

        <h3>${subject}</h3>
        <p>${message}</p>

        <p>Thank you. <strong>SAAJ NAIROBI</strong></p>
      `,
        });
    }
}
//# sourceMappingURL=mailService.js.map