import React from "react";
import "./rightbar.scss";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/12/12/12/46/cat-7650987__480.jpg"
                alt=""
              />
              <span>Jane</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/12/13/13/30/bird-7653386__480.jpg"
                alt=""
              />
              <span>Jack</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span> Latest Activites</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/12/13/13/30/bird-7653386__480.jpg"
                alt=""
              />
              <p>
                <span>Jack</span> Changed wallpaper
              </p>
            </div>
            <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/12/13/13/30/bird-7653386__480.jpg"
                alt=""
              />
              <p>
                <span>Jack</span> Changed wallpaper
              </p>
            </div>
            <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/12/13/13/30/bird-7653386__480.jpg"
                alt=""
              />
              <p>
                <span>Jack</span> Changed wallpaper
              </p>
            </div>
            <span> 1 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
