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
      const response = await axios.post("http://localhost:4000/post/upload", formData, {
        headers: {
          "x-auth-token": token,
        },
      });
  
      setMessage("Post uploaded successfully!");
      console.log("Successfully Uploaded Post: ", response.data);
    } catch (error) {
      setMessage(error.response.data.message);
      console.log(error);
    }
  };