export const errorHandler = (err, _req, res, _next) => {
    let status = err.status || 500;
    let message = err.message || 'Internal Server Error';
    // 1. Handle Sequelize Unique Constraint (e.g., Duplicate Email)
    if (err.name === 'SequelizeUniqueConstraintError') {
        status = 400;
        // This grabs "Duplicate entry 'kajala@gmail.com' for key 'email'"
        message = err.original?.sqlMessage || err.errors?.[0]?.message || 'Duplicate entry found';
    }
    // 2. Handle other Sequelize Validation errors (e.g., allow empty, length checks)
    else if (err.name === 'SequelizeValidationError') {
        status = 400;
        message = err.errors?.[0]?.message || 'Validation failed';
    }
    // Log the full error in development so you can still see it in the terminal
    if (process.env.NODE_ENV !== 'production') {
        console.error('--- Global Error Handler ---');
        console.error(err);
        console.error('---------------------------');
    }
    // Send the specific message back to the frontend
    res.status(status).json({ error: message });
};
//# sourceMappingURL=errors.js.map