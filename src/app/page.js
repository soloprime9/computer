


// 'use client';
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { decode as jwtDecode } from "jwt-decode";
// import { Link } from "react-router-dom";
// import Image from "next/image";



// const Feed = () => {
//   const [posts, setPosts] = useState([]);
//   const [CommentText, setCommentText] = useState("");
//   const [commentBoxOpen, setCommentBoxOpen] = useState({});
//   const [userId, setUserId] = useState(null);


//   const baseURL = "https://backend-k.vercel.app/";

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         setUserId(decoded.userid);
//       } catch (err) {
//         console.log("Invalid Token:", err);
//       }
//     }
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const { data } = await axios.get("https://backend-k.vercel.app/post/mango/getall");
//       setPosts(data);
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleLikePost = async (postId) => {
//     const token = localStorage.getItem("token");
//     try {
//       await axios.post(`https://backend-k.vercel.app/post/like/${postId}`, {}, {
//         headers: {
//           "x-auth-token": token,
//         },
//       });
//       fetchPosts();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleComment = async (postId) => {
//     const token = localStorage.getItem("token");
//     if (!CommentText.trim()) return alert("Comment cannot be empty");

//     try {
//       await axios.post(
//         `https://backend-k.vercel.app/post/comment/${postId}`,
//         { CommentText, userId },
//         {
//           headers: {
//             "x-auth-token": token,
//           },
//         }
//       );
//       setCommentText("");
//       fetchPosts();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const toggleCommentBox = (postId) => {
//     setCommentBoxOpen((prev) => ({
//       ...prev,
//       [postId]: !prev[postId],
//     }));
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <div className="container mx-auto p-4 md:p-6 lg:pr-60 lg:pl-60">
//       {posts && posts.length > 0 ? (
//         posts.map((post) => (
//           <div key={post._id} className="m-4 border-2 p-2 rounded">
//             <div className="flex items-center mb-2">
//               <img   src={post?.userId?.profilePic || "/1.jpg"} alt="User" className="w-10 h-10 rounded-full mr-3" />
//               <h2 className="text-xl font-semibold"><a href={"/profile/" + post?.userId?.username}> {post?.userId?.username || "Unknown User"}</a></h2>
//             </div>
//             <div>
//               {/* Check if post.media exists and is a string before using endsWith */}
// {post.media  ? (
//   post.media.endsWith(".mp4") ? (
//     <video src={baseURL + post.media || ""} className="w-full" autoPlay controls muted />
//   ) : (
//     <img src={baseURL + post.media || ""} alt="Post" className="w-full" />
//   )
// ) : (
//   <div></div> // Fallback if media is missing
// )}

//             </div>
//             <div className="flex justify-between mt-2">
//               <button
//                 onClick={() => handleLikePost(post._id)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
//               >
//                 Like ({post.likes && post.likes.length || 0})
//               </button>
//               <button
//                 onClick={() => toggleCommentBox(post._id)}
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
//               >
//                 Comment
//               </button>
//             </div>
//             {commentBoxOpen[post._id] && (
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   value={CommentText}
//                   onChange={(e) => setCommentText(e.target.value)}
//                   placeholder="Write a comment..."
//                   className="w-full p-2 border rounded mb-2"
//                 />
//                 <button
//                   onClick={() => handleComment(post._id)}
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
//                 >
//                   Post Comment
//                 </button>
//                 <ul className="mt-2">
//                   {post.comments.map((comment) => (
//                     <li key={comment._id} className="border-b py-1">
//                       <strong>{comment.userId?.username || "Anonymous"}:</strong> {comment.CommentText}
//                       <strong> {comment.likes}</strong>


//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>No posts available</p>
//       )}
//     </div>
//   );
// };

// export default Feed;






import React from 'react';

const SectionA = () => (
  <div className="bg-gray-50 text-gray-800 p-6 lg:p-12">
    <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">SECTION A</h1>

    <div className="space-y-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          1. Define Artificial Intelligence. Is it different from intelligence?
        </h2>
        <p>
          Artificial Intelligence (AI) refers to the development of computer systems that can perform tasks that
          typically require human intelligence, such as visual perception, speech recognition, decision-making,
          and language translation. AI is distinct from human intelligence, as it is a machine-based system
          designed to simulate human-like intelligence.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          2. Describe the Turing test for intelligence.
        </h2>
        <p>
          The Turing test is a method for determining whether a machine is capable of thinking like a human being.
          The test involves a human evaluator engaging in natural language conversations with both a human and a
          machine, without knowing which is which. If the evaluator cannot reliably distinguish the machine from
          the human, the machine is said to have passed the Turing test.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          3. Differentiate between uninformed search and informed search.
        </h2>
        <p>
          Uninformed search algorithms, such as Breadth-First Search (BFS) and Depth-First Search (DFS), explore
          a problem space without any additional information about the problem. In contrast, informed search
          algorithms, such as Best-First Search and A* Search, use heuristics or additional knowledge to guide
          the search towards more promising areas of the problem space.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          4. For a tic-tac-toe game, draw a game tree from the root node (initial stage) to the leaf node (win or lose).
        </h2>
        <p>
          A game tree for a tic-tac-toe game represents all possible moves and their outcomes. The root node
          represents the initial state of the game, while the leaf nodes represent the possible outcomes (win,
          lose, or draw). Each internal node represents a possible move, and the edges represent the possible
          transitions between moves.
        </p>
      </div>

      {/* More questions styled similarly */}
    </div>
  </div>
);

export default SectionA;

