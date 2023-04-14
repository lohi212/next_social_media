import { Card } from "antd";
import React from "react";

const AllPosts = ({ posts }) => {
  return (
    <Card>
      {(posts || []).map((post) => (
        <div key={post.id}>
          <p>{JSON.stringify(post)}</p>
          {/* <div>{post.title}</div> */}
        </div>
      ))}
    </Card>
  );
};

export default AllPosts;
