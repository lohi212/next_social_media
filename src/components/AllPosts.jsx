import React from "react";

const AllPosts = ({ posts }) => {
  console.log({ posts });
  return (
    <div>
      {(posts || []).map((post) => (
        <div key={post.id}>
          <div>{JSON.stringify(post)}</div>
          {/* <div>{post.title}</div> */}
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
