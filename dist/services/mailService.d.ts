export declare class MailService {
    sendMeetingInvite(meeting: {
        title: string;
        description: string;
        platform: string;
        link: string;
        dateTime: Date | string;
    }, recipients: string[]): Promise<void>;
}
//# sourceMappingURL=mailService.d.ts.map