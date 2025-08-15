import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const submitPost = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/posts", { title, content });
    navigate("/");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Add New Post</h2>
      <form onSubmit={submitPost} className="space-y-4">
        <input className="border p-2 w-full" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="border p-2 w-full" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
