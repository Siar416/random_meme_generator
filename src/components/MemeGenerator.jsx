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

  return (
    <form className="container">
      <div className="img_container">
        {currentMeme && (
          <img className="current_img" src={currentMeme.url} alt="meme image" />
        )}
      </div>

      <div className="input_container">
        <div>
          <input
            className="text_area"
            type="text"
            placeholder="Enter Top Area Text"
          />
        </div>
        <div>
          <input
            className="text_area"
            type="text"
            placeholder="Bottom Area Text"
          />
        </div>
        <button className="btn">Generate</button>
      </div>
    </form>
  );
}

export default MemeGenerator;
