'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import jwt, { decode } from 'jsonwebtoken';
import { Link } from "react-router-dom";
import Image from "next/image";



const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [CommentText, setCommentText] = useState("");
  const [commentBoxOpen, setCommentBoxOpen] = useState({});
  const [UserId, setUserId] = useState(null);




  useEffect( () => {
    const fetchToken = async()=>{
    const token = await localStorage.getItem("token");
    console.log(token);
    if (!token) {
      return window.location.href ="/login";
      
    }
    else{
      try {
        const decoded = jwt.decode(token);
        console.log("decodeddata: ",decoded);
        setUserId(decoded.UserId);
      } catch (err) {
        console.log("Invalid Token:");
        return window.location.href="/login";
      }
    }
  };
  fetchToken();

  }, []);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get("https://backend-k.vercel.app/post/mango/getall");
      setPosts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLikePost = async (postId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(`https://backend-k.vercel.app/post/like/${postId}`, {}, {
        headers: {
          "x-auth-token": token,
        },
      });
      fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const handleComment = async (postId) => {
    const token = localStorage.getItem("token");
    if (!CommentText.trim()) return alert("Comment cannot be empty");

    try {
      await axios.post(
        `https://backend-k.vercel.app/post/comment/${postId}`,
        { CommentText, UserId },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setCommentText("");
      fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const toggleCommentBox = (postId) => {
    setCommentBoxOpen((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto ">
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="h-100 w-100 border-2 rounded-md border-blue-200 mt-4 border-2 p-2 rounded">
            <div className="flex items-center mb-2">
              <img   src={post?.UserId?.profilePic || "/1.jpg"} alt="User" className="w-10 h-10 rounded-full mr-3" />
              <h2 className="text-xl font-semibold"><a href={"/profile/" + post?.userId?.username}> {post?.userId?.username || "Unknown User"}</a></h2>
            </div>
            <div className="rounded-md overflow-hidden border-t-2">
              {/* Check if post.media exists and is a string before using endsWith */}
            {post.media  ? (
              post.media.endsWith(".mp4") ? (
                <video src={post.media || ""} className="w-full h-64 object-cover" autoPlay controls loop />
              ) : (
                <img src={post.media || ""} alt="Post" className=" w-full h-64 object-cover" />
              )
            ) : (
              <div></div> // Fallback if media is missing
            )}

            </div>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => handleLikePost(post._id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
              >
                Like ({post.likes && post.likes.length || 0})
              </button>
              <button
                onClick={() => toggleCommentBox(post._id)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
              >
                Comment
              </button>
            </div>
            {commentBoxOpen[post._id] && (
              <div className="mt-2">
                <input
                  type="text"
                  value={CommentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full p-2 border rounded mb-2"
                />
                <button
                  onClick={() => handleComment(post._id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                >
                  Post Comment
                </button>
                <ul className="mt-2">
                  {post.comments.map((comment) => (
                    <li key={comment._id} className="border-b py-1">
                      <strong>{comment.UserId?.username || "Anonymous"}:</strong> {comment.CommentText}
                      <strong> {comment.likes}</strong>


                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default Feed;



