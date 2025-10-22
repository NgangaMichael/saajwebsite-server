import { AsyncLocalStorage } from "async_hooks";
declare const asyncLocalStorage: AsyncLocalStorage<Map<string, any>>;
export declare function setRequestContext(key: string, value: any): void;
export declare function getRequestContext(key: string): any;
export default asyncLocalStorage;
//# sourceMappingURL=requestContext.d.ts.map