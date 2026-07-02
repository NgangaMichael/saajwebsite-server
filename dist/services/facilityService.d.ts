import { FacilityRepository } from '../repositories/facilityRepository.js';
export declare class FacilityService {
    repo: FacilityRepository;
    createFacility(data: any): Promise<import("../models/facility.js").Facility>;
    listFacilities(): Promise<import("../models/facility.js").Facility[]>;
    getFacilityById(id: number): Promise<import("../models/facility.js").Facility | null>;
    updateFacility(id: number, data: any): Promise<import("../models/facility.js").Facility | null>;
    deleteFacility(id: number, username: string): Promise<import("../models/facility.js").Facility | null>;
}
//# sourceMappingURL=facilityService.d.ts.map