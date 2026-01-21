
import express from "express";
import multer from "multer";
import path from "path";
const router = express.Router();
import { addUser } from "../controllers/userController.js";

// Multer Storage
const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("file :", file);
        cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

// file filter
const FileFilters = (req, file, cb) => {
    const AllowedTypes = /png|jpg|jpeg|svg/
    const extension = path.extname(file.originalname).toLowerCase()
    if (AllowedTypes.test(extension)) {
        cb(null, true)
    }
    else {
        cb(new Error("Not Valid Formate"))
    }
}

// upload middleware
const Upload = multer({
    storage: Storage,
    fileFilter: FileFilters,
    limits: {
        fileSize: 1024 * 1024 * 2
    }
});

// routes
router.post("/add-user", Upload.single("userimage"), addUser);

export default router;
