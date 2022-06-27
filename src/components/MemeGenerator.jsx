import { useState, useEffect } from "react";
import axios from "axios";

function MemeGenerator() {
  const [memeArray, setMemeArray] = useState([]);
  const [currentMeme, setCurrentMeme] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((res) => {
      setMemeArray(res.data.data.memes);
      setCurrentMeme(res.data.data.memes[1]);
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    let randomNum = Math.floor(Math.random() * memeArray.length);
    let randomImg = memeArray[randomNum];
    setCurrentMeme(randomImg);
    setTopText("");
    setBottomText("");
  };

  return (
    <>
      <form className="container">
        {!currentMeme && <h1>Loading image...</h1>}
        <div className="img_container">
          <p className="text_top">{topText}</p>
          {currentMeme && (
            <img className="current_img" src={currentMeme.url} alt="meme" />
          )}
          <p className="text_bottom">{bottomText}</p>
        </div>

        <div className="input_container">
          <div>
            <input
              className="text_area"
              type="text"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
              placeholder="Enter Top Area Text"
            />
          </div>
          <div>
            <input
              className="text_area"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
              type="text"
              placeholder="Bottom Area Text"
            />
          </div>
          <button onClick={(e) => handleClick(e)} className="btn">
            Generate
          </button>
        </div>
      </form>
    </>
  );
}

export default MemeGenerator;
