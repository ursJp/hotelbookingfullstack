import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //temporary data
  const stories = [
    {
      id: 1,
      name: "john",
      img: "https://cdn.pixabay.com/photo/2022/12/12/12/46/cat-7650987__480.jpg",
    },
    {
      id: 2,
      name: "john",
      img: "https://cdn.pixabay.com/photo/2022/12/12/12/46/cat-7650987__480.jpg",
    },
    {
      id: 3,
      name: "john",
      img: "https://cdn.pixabay.com/photo/2022/12/12/12/46/cat-7650987__480.jpg",
    },
    {
      id: 4,
      name: "john",
      img: "https://cdn.pixabay.com/photo/2022/12/12/12/46/cat-7650987__480.jpg",
    },
    {
      id: 5,
      name: "john",
      img: "https://cdn.pixabay.com/photo/2022/12/12/12/46/cat-7650987__480.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />;
        <span>{currentUser.name}</span>;<button>+</button>
      </div>
      {stories.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />;<span>{story.name}</span>;
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
