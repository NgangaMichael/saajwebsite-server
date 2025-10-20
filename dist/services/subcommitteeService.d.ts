import { SubCommitteeRepository } from '../repositories/subcommitteeRepositiry.js';
export declare class SubCommitteeService {
    repo: SubCommitteeRepository;
    createsubCommittee(data: any): Promise<import("../models/subcommittee.js").SubCommittee>;
    listsubCommittees(): Promise<import("../models/subcommittee.js").SubCommittee[]>;
    getsubCommitteeById(id: number): Promise<import("../models/subcommittee.js").SubCommittee | null>;
    updatesubCommittee(id: number, data: any): Promise<import("../models/subcommittee.js").SubCommittee | null>;
    deletesubCommittee(id: number, username: string): Promise<import("../models/subcommittee.js").SubCommittee | null>;
}
//# sourceMappingURL=subcommitteeService.d.ts.map