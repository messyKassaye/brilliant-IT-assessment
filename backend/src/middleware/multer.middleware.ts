import multer from "multer";

//instead of uploading on both AI and backend sides.
//I prefer to use memory storage on backend side and upload it to AI server
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

export default upload;
