// src/middleware/upload.ts
import multer from 'multer';
import fs from 'fs';
import path from 'path';
// Ensure the uploads folder exists
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}
const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, uploadDir); // save in uploads/
    },
    filename: function (_req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
export const upload = multer({ storage });
//# sourceMappingURL=upload.js.map