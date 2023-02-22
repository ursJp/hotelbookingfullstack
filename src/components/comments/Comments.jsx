import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //temporary
  const comments = [
    {
      id: 1,
      name: "john",
      profilePicture:
        "https://cdn.pixabay.com/photo/2022/12/12/12/46/cat-7650987__480.jpg",
      userId: 1,
      desc: " Lorem ipsum dolor sit amet. Et assumenda error est internos unde rem autem quisquam non velit necessitatibus.",
      img: "https://cdn.pixabay.com/photo/2021/01/03/13/57/gingerbread-5884607_640.jpg",
    },
    {
      id: 2,
      name: "Joke",
      profilePicture:
        "https://cdn.pixabay.com/photo/2022/12/12/12/46/cat-7650987__480.jpg",
      userId: 2,
      desc: " Lorem ipsum dolor sit amet. Et assumenda error est internos unde rem autem quisquam non velit necessitatibus.",
      img: "https://cdn.pixabay.com/photo/2021/01/03/13/57/gingerbread-5884607_640.jpg",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => {
        return (
          <div className="comment">
            <img src={comment.profilePicture} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">1 Hour ago</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
