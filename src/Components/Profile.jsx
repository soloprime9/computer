'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [Profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOwner, setIsOwner] = useState(false); // New state for owner check

  useEffect(() => {
    const fetchProfile = async () => {
      const path = window.location.pathname;
      const username = path.split('/').pop();
      const token = localStorage.getItem('token');

      if (!token) {
        console.log("Token is required");
        setError("Token not found. Please log in.");
        return;
      }

      try {
        const result = await axios.get(`http://localhost:4000/user/${username}`, {
          headers: {
            'x-auth-token': token,
          },
        });

        if (!result.data || !result.data.Profile) {
          setError("Profile not found");
          return;
        }

        const loggedUserId = JSON.parse(atob(token.split('.')[1])).userid;

        const userFollowers = result.data.Profile.user?.followers || [];
        setIsFollowing(userFollowers.includes(loggedUserId));

        setIsOwner(result.data.Profile.user?._id === loggedUserId);

        setProfile(result.data.Profile);
      } catch (err) {
        setError(err.message || "An error occurred while fetching the profile.");
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  const handleFollow = async () => {
    const token = localStorage.getItem('token');
    if (!token) return alert('You must be logged in to follow users!');

    const loggedUserId = JSON.parse(atob(token.split('.')[1])).userid;

    try {
      setLoading(true);
      const result = await axios.post(
        `http://localhost:4000/user/follow/${Profile.user._id}`,
        {},
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );

      setIsFollowing(!isFollowing);
      setProfile((prevProfile) => ({
        ...prevProfile,
        user: {
          ...prevProfile.user,
          followers: isFollowing
            ? prevProfile.user.followers.filter((id) => id !== loggedUserId)
            : [...prevProfile.user.followers, loggedUserId],
        },
      }));
    } catch (err) {
      console.error(err);
      alert('Error following the user');
    } finally {
      setLoading(false);
    }
  };

  if (error) return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">{error}</h1>
    </div>
  );

  if (!Profile) return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">Loading...</h1>
    </div>
  );

  const { user, posts, OwnerId } = Profile;
  
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={user.profilePicture || "/1.jpg"} alt="Profile Picture" className="w-12 h-12 rounded-full mr-4" />
          <h1 className="text-2xl font-bold">{user.username}</h1>
        </div>

        <div className="flex items-center">
          <span className="text-lg font-bold mr-4">{user.Followers.length} Followers</span>
          <span className="text-lg font-bold mr-4">{user.Followings.length} Following</span>
          {OwnerId ? (
            <button className="px-4 py-2 rounded bg-green-500 text-white">
              <a href={"/" + user.username}>Edit Profile</a>
            </button>
          ) : (
            <button
              onClick={handleFollow}
              className={`px-4 py-2 rounded text-white ${isFollowing ? 'bg-red-500' : 'bg-blue-500'}`}
              disabled={loading}
            >
              {loading ? 'Processing...' : isFollowing ? 'Unfollow' : 'Follow'}
            </button>
          )}
        </div>
      </div>

      <div className='flex justify-center font-bold p-5'>{user.bio || "Add about you"}</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-2 rounded p-2">
        {posts && posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="rounded shadow-md">
              {post.imageUrl.endsWith('.mp4') ? 
                <video
                  src={post.imageUrl}
                  autoPlay
                  controls
                  muted
                  className="w-full h-full object-cover border-2 rounded"
                /> :
                <img
                  src={post.imageUrl}
                  alt="Post"
                  className="w-full h-full object-cover border-2 rounded"
                />}
              <p className="p-4 text-lg font-bold">{post.caption}</p>
            </div>
          ))
        ) : (
          <p className="text-3xl pt-20 pb-20 text-center font-bold">No posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
