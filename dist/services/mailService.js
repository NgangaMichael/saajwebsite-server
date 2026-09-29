import nodemailer from "nodemailer";
// Required env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
// Optional: SMTP_SECURE ("true" for port 465), MAIL_FROM
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
export class MailService {
    async sendMeetingInvite(meeting, recipients) {
        if (recipients.length === 0)
            return;
        const when = new Date(meeting.dateTime).toLocaleString("en-KE", {
            dateStyle: "full",
            timeStyle: "short",
            timeZone: "Africa/Nairobi",
        });
        const subject = `Meeting invitation: ${meeting.title}`;
        const text = `You have been invited to a meeting.\n\n` +
            `Title: ${meeting.title}\n` +
            `When: ${when}\n` +
            `Platform: ${meeting.platform}\n` +
            `Link: ${meeting.link}\n\n` +
            `Agenda:\n${meeting.description}\n`;
        const html = `
      <p>You have been invited to a meeting.</p>
      <p>
        <strong>Title:</strong> ${escapeHtml(meeting.title)}<br/>
        <strong>When:</strong> ${escapeHtml(when)}<br/>
        <strong>Platform:</strong> ${escapeHtml(meeting.platform)}<br/>
        <strong>Link:</strong> <a href="${escapeHtml(meeting.link)}">${escapeHtml(meeting.link)}</a>
      </p>
      <p><strong>Agenda:</strong><br/>${escapeHtml(meeting.description).replace(/\n/g, "<br/>")}</p>
    `;
        // One email per recipient so addresses aren't exposed to each other.
        const results = await Promise.allSettled(recipients.map((to) => transporter.sendMail({
            from: process.env.MAIL_FROM || process.env.SMTP_USER,
            to,
            subject,
            text,
            html,
        })));
        results.forEach((r, i) => {
            if (r.status === "rejected") {
                console.error(`Failed to send meeting invite to ${recipients[i]}:`, r.reason);
            }
        });
    }
}
//# sourceMappingURL=mailService.js.map