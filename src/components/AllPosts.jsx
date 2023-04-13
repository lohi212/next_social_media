import { Card } from "antd";
import React from "react";

const AllPosts = ({ posts }) => {
  console.log({ posts });
  return (
    <Card>
      {(posts || []).map((post) => (
        <div key={post.id}>
          <div>{JSON.stringify(post)}</div>
          {/* <div>{post.title}</div> */}
        </div>
      ))}
    </Card>
  );
};

export default AllPosts;
