import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./profile.scss";
import Posts from "../../components/posts/Posts";
const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://cdn.pixabay.com/photo/2022/11/30/13/50/winter-7626888_640.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641__480.jpg"
          alt=""
          className="profilePic"
        />
        <div className="profileContainer">
          <div className="uInfo">
            <div className="left">
              <a href="">
                <FacebookTwoToneIcon fontSize="large" />
              </a>
              <a href="">
                <LinkedInIcon fontSize="large" />
              </a>
              <a href="">
                <InstagramIcon fontSize="large" />
              </a>
              <a href="">
                <PinterestIcon fontSize="large" />
              </a>
              <a href="">
                <TwitterIcon fontSize="large" />
              </a>
            </div>
            <div className="center">
              <span> Jane Doe</span>
              <div className="info">
                <div className="item">
                  <PlaceIcon />
                  <span>INDIA</span>
                </div>
                <div className="item">
                  <LanguageIcon />
                  <span>Jay</span>
                </div>
                <button>follow</button>
              </div>
            </div>
            <div className="right">
              <EmailOutlinedIcon />
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};
export default Profile;
