import { CommunicationRepository } from '../repositories/communicationRepository.js';
export declare class CommunicationService {
    repo: CommunicationRepository;
    createCommunication(data: any): Promise<import("../models/communication.js").Communication>;
    listCommunications(): Promise<import("../models/communication.js").Communication[]>;
    getCommunicationById(id: number): Promise<import("../models/communication.js").Communication | null>;
    updateCommunication(id: number, data: any): Promise<import("../models/communication.js").Communication | null>;
    deleteCommunication(id: number, username: string): Promise<import("../models/communication.js").Communication | null>;
}
//# sourceMappingURL=communicationService.d.ts.map