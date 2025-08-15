import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`).then(res => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const updatePost = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/posts/${id}`, { title, content });
    navigate("/");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Edit Post</h2>
      <form onSubmit={updatePost} className="space-y-4">
        <input className="border p-2 w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="border p-2 w-full" value={content} onChange={(e) => setContent(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}
