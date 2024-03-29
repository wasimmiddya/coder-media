import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { Collection } from "mongoose";

const uploadOnCloudinary = async (localPath: string) => {
    try {
        if (!localPath) return null;

        // upload file on cloudinary and response the object to the user
        const response = await cloudinary.uploader
            .upload(localPath)
            .then((res) => res);

        fs.unlinkSync(localPath);
        return response;
    } catch (err) {
        console.log(err);
        fs.unlinkSync(localPath);
        return null;
    }
};

const deleteOnCloudinary = async (url: string) => {
    try {
        const publicKey = url.slice(
            url.lastIndexOf("/") + 1,
            url.lastIndexOf(".")
        );
        console.log(publicKey);
        await cloudinary.uploader.destroy(publicKey);
    } catch (error) {
        console.log(error);
    }
};

export { uploadOnCloudinary, deleteOnCloudinary };
