import React from "react";
import memeImg from "../assets/meme_img1.png";

function Header() {
  return (
    <div className="header">
      <img className="meme_img" src={memeImg} alt="meme head" />
      <h1>Random Meme Generator App</h1>
    </div>
  );
}

export default Header;
