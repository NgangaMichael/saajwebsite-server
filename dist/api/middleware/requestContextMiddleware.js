export function requestContextMiddleware(req, res, next) {
    asyncLocalStorage.run(new Map(), () => {
        next();
    });
}
//# sourceMappingURL=requestContextMiddleware.js.map