import { CommitteeRepository } from '../repositories/committeeRepository.js';
export declare class CommitteeService {
    repo: CommitteeRepository;
    createCommittee(data: any): Promise<import("../models/committee.js").Committee>;
    listCommittees(): Promise<import("../models/committee.js").Committee[]>;
    getCommitteeById(id: number): Promise<import("../models/committee.js").Committee | null>;
    updateCommittee(id: number, data: any): Promise<import("../models/committee.js").Committee | null>;
    deleteCommittee(id: number): Promise<import("../models/committee.js").Committee | null>;
}
//# sourceMappingURL=committeeService.d.ts.map