'use client';
import React, { useState } from "react";
import axios from "axios";

const UploadComponent = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://localhost:4000/post/uploader", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.data.success) {
                setMessage("Upload successful!");
                setImageUrl(response.data.imageUrl);
            } else {
                setMessage("Upload failed: " + response.data.message);
            }
        } catch (error) {
            setMessage("Error uploading file.");
            console.error(error);
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Upload Image to Cloudinary</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
            {imageUrl && <img src={imageUrl} alt="ImageUploading" />}
        </div>
    );
};

export default UploadComponent;
