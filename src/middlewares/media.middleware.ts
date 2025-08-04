import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ 
    storage,
});

export default {
    single(fieldName: string) {
        return upload.single(fieldName);
    },

    multiple(fileName: string) {
        return upload.array(fileName);
    },
};