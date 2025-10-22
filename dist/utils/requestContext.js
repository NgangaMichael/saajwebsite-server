import { AsyncLocalStorage } from "async_hooks";
const asyncLocalStorage = new AsyncLocalStorage();
export function setRequestContext(key, value) {
    const store = asyncLocalStorage.getStore();
    if (store) {
        store.set(key, value);
        console.log(`✅ Context set: ${key} = ${value}`);
    }
    else {
        console.error("❌ No async context available! Make sure requestContextMiddleware runs first.");
    }
}
export function getRequestContext(key) {
    const store = asyncLocalStorage.getStore();
    const value = store ? store.get(key) : undefined;
    console.log(`🔍 Context get: ${key} = ${value}`);
    return value;
}
export default asyncLocalStorage;
//# sourceMappingURL=requestContext.js.map