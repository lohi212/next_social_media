import AddPost from "@/components/AddPost";
import AllPosts from "@/components/AllPosts";
import { Divider } from "antd";
import React, { useState, useContext } from "react";
import { AuthContext } from "./ContextWrapper";
import Container from "./Layout";
import Login from "./Login";

function Home() {
  const user = "null";
  const { currUser } = useContext(AuthContext);
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

  if (!currUser) return <Login />;
  console.log({ currUser });
  return (
    <Container>
      <main className="p-5 root-container">
        <h1 className="text-center">Social Media App</h1>
        <AddPost handleAddPost={handleAddPost} />
        <Divider />
        <AllPosts posts={allPosts} />
      </main>
    </Container>
  );
}

export default Home;
