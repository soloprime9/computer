"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

const UploadPost = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Token is not available");
      return (window.location.href = "/login");
    }

    try {
      const decoded = jwt.decode(token);
      console.log("Decoded token data:", decoded);
    } catch (err) {
      console.log("Invalid Token:", err);
      return (window.location.href = "/login");
    }
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (event) => setPreview(event.target.result);
    reader.readAsDataURL(selectedFile);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !title) {
      setMessage("Please provide both file and title.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("User ID not found");
        return;
      }

      const response = await axios.post("https://backend-k.vercel.app/post/upload", formData, {
        headers: {
          "x-auth-token": token,
        },
      });

      setMessage("Post uploaded successfully!");
      console.log("Successfully Uploaded Post:", response.data);
    } catch (error) {
      setMessage("Internal Server Error");
      console.log(error);
    }
  };

  return (
    <div className="mt-40">
      <div className="lg:m-20 border-2 bg-blue-700 text-white font-bold rounded py-4 px-6">
        <h2 className="text-2xl py-2 text-center">Upload a New Post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="relative border-2 border-dashed rounded-md m-2 h-20 w-full flex items-center justify-center cursor-pointer">
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
            />
            <p className="text-white">Select Media</p>
          </div>

          {preview && (
            <div className="relative flex justify-center mt-4">
              {file && file.type.startsWith("image/") ? (
                <img
                  className="border-2 rounded-md border-white max-h-64"
                  src={preview}
                  alt="Preview"
                />
              ) : (
                <video
                  className="border-2 rounded-md border-white max-h-64"
                  src={preview}
                  loop
                  controls
                  autoPlay
                  muted
                />
              )}
            </div>
          )}

          <input
            type="text"
            className="w-full text-black p-2 text-xl mt-3 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter title"
          />

          <button
            type="submit"
            className="w-full border-2 rounded bg-yellow-600 p-2 mt-4 text-xl font-bold hover:bg-red-700 transition"
          >
            Upload Post
          </button>
        </form>

        {message && <p className="text-lg text-center text-red-400 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default UploadPost;






// 'use client';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import jwt, {decode} from "jsonwebtoken";

// const UploadPost = () => {
//   const [file, setFile] = useState(null);
//   const [title, settitle] = useState("");
//   const [message, setMessage] = useState("");
//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//       const token = localStorage.getItem("token");
//       console.log(token);
//       if (!token) {
//         window.location.href ="/login";
//         console.log("Token is not Available");
//       }
//       else{
//         try {
//           const decoded = jwt.decode(token);
//           console.log("decodeddata: ",decoded);
          
//         } catch (err) {
//           console.log("Invalid Token:" , err);
//           return window.location.href="/login";
//         }
//       }
//     }, []);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (!selectedFile) return;

//     setFile(selectedFile);

//     const reader = new FileReader();
//     reader.onload = (e) => setPreview(e.target.result);  // Generate a preview URL
//     reader.readAsDataURL(selectedFile); // Reads the file and triggers `onload`
//   };

//   const handletitleChange = (e) => {
//     settitle(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file || !title) {
//       setMessage("Please provide both file and title.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file); // "file" is the field name for the file
//     formData.append("title", title); // Add title to the form data

//     try {
//       const token = localStorage.getItem("token");
//       if(!token){
//         console.log("Userid Not Found");
//       }
    
//       console.log(token);

     

//       const response = await axios.post("https://backend-k.vercel.app/post/upload", formData, {
//         headers: {
//           "x-auth-token": token, // Include the token in the headers for authentication
//         },
//       });

//       setMessage("Post uploaded successfully!");
//       console.log("Successfully Uploaded Post: ", response.data);
//     } catch (error) {
//       setMessage("Internal Server Error");
//       console.log(error);
//     }
//   };

//   return (
//     <div className="mt-40">
//       <div className="lg:m-20 border-2 justify-center  bg-blue-700 text-white font-bold rounded py-2">
//       <h2 className="text-2xl py-2 text-center">Upload a New Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="justify-center items-center text-center">
          
//        <div className="relative border-2 border-dashed rounded-md m-1 h-20">
//   <input 
//     type="file" 
//     id="file" 
//     onChange={handleFileChange} 
//     className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer" 
//   />
//   <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 text-white">
//     Select Media
//   </p>
// </div>
//         </div>
//         <div className="h-100">
//         {preview && (
//           <div  className="relative flex justify-center">
//             {file.type.startsWith("image/") ? (
//               <img className="border-2 rounded-md border-white justify-center items-center text-center max-h-64"
//                 src={preview}
//                 alt="Preview"
                
//               />
//             ) : (
//               <video
//               className=" border-2 rounded-md border-white justify-center items-center text-center max-h-64 "
//                 src={preview}
//                 loop
//                 controls
//                 autoPlay
//                 muted
                
//               />
//             )}
//           </div>
//         )}
//         </div>
//         <div className="mt-1 items-around text-lg text-center">
          
//           <input
//             type="text"
//             className="w-full text-black p-2 text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//             id="title"
//             value={title}
//             onChange={handletitleChange}
//             placeholder=" Enter title"
//           />
//         </div>
//         <button type="submit" className="w-full border-2 rounded bg-yellow-600 p-2 mt-3 text-xl font-bold hover:bg-red-700 transition">Upload Post</button>
//       </form>
//       {message && <p className="text-lg text-center text-red-400 mt-4">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default UploadPost;









