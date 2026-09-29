import { MeetingRepository } from "../repositories/meetingRepository.js";
import { MailService } from "./mailService.js";
export declare class MeetingService {
    repo: MeetingRepository;
    mail: MailService;
    createMeeting(data: any): Promise<import("../models/meeting.js").Meeting>;
    listMeetings(): Promise<import("../models/meeting.js").Meeting[]>;
    listMeetingsByCreator(creatorId: number): Promise<import("../models/meeting.js").Meeting[]>;
    updateMeeting(id: number, data: any): Promise<import("../models/meeting.js").Meeting | null>;
    deleteMeeting(id: number): Promise<import("../models/meeting.js").Meeting | null>;
}
//# sourceMappingURL=meetingService.d.ts.map