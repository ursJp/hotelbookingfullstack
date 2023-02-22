import React from "react";
import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "john",
      profilePic:
        "https://cdn.pixabay.com/photo/2022/12/12/12/46/cat-7650987__480.jpg",
      userId: 1,
      desc: " Lorem ipsum dolor sit amet. Et assumenda error est internos unde rem autem quisquam non velit necessitatibus.",
      img: "https://cdn.pixabay.com/photo/2021/01/03/13/57/gingerbread-5884607_640.jpg",
    },
    {
      id: 2,
      name: "Joke",
      profilePic:
        "https://cdn.pixabay.com/photo/2022/12/12/12/46/cat-7650987__480.jpg",
      userId: 2,
      desc: " Lorem ipsum dolor sit amet. Et assumenda error est internos unde rem autem quisquam non velit necessitatibus.",
      img: "https://cdn.pixabay.com/photo/2021/01/03/13/57/gingerbread-5884607_640.jpg",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
