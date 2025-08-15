import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:5000/api/posts");
    setPosts(res.data);
  };

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    fetchPosts();
  };

  useEffect(() => { fetchPosts(); }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">All Posts</h2>
      {posts.map(post => (
        <div key={post._id} className="border p-4 mb-4 rounded">
          <h3 className="font-bold text-lg">{post.title}</h3>
          <p>{post.content}</p>
          <div className="mt-2 space-x-2">
            <Link to={`/edit/${post._id}`} className="bg-yellow-500 px-3 py-1 rounded text-white">Edit</Link>
            <button onClick={() => deletePost(post._id)} className="bg-red-500 px-3 py-1 rounded text-white">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
