import { ServiceRepository } from '../repositories/serviceRepository.js';
export declare class ServiceService {
    repo: ServiceRepository;
    createService(data: any): Promise<import("../models/service.js").Service>;
    listServices(): Promise<import("../models/service.js").Service[]>;
    getServiceById(id: number): Promise<import("../models/service.js").Service | null>;
    updateService(id: number, data: any): Promise<import("../models/service.js").Service | null>;
    deleteService(id: number, username: string): Promise<import("../models/service.js").Service | null>;
}
//# sourceMappingURL=serviceService.d.ts.map