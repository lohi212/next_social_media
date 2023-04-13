import AddPost from "@/components/AddPost";
import AllPosts from "@/components/AllPosts";
import { Divider } from "antd";
import { useState } from "react";

function Home() {
  const isServer = typeof window === "undefined";

  const [allPosts, setAllPosts] = useState(
    JSON.parse(!isServer ? localStorage.getItem("posts") || "[]" : "[]")
  );

  const handleAddPost = (post) => {
    const allPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    const newAllPosts = [...allPosts, { ...post }];
    setAllPosts(newAllPosts);
    localStorage.setItem("posts", JSON.stringify(newAllPosts));
  };

  return (
    <main className="p-5 root-container">
      <h1 className="text-center">Social Media App</h1>
      <AddPost handleAddPost={handleAddPost} />
      <Divider />
      <AllPosts posts={allPosts} />
    </main>
  );
}

export default Home;
