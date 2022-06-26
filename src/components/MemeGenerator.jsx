import { useState, useEffect } from "react";
import axios from "axios";

function MemeGenerator() {
  const [memeArray, setMemeArray] = useState([]);
  const [currentMeme, setCurrentMeme] = useState(null);

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((res) => {
      setMemeArray(res.data.data.memes);
      setCurrentMeme(res.data.data.memes[1]);
    });
  }, []);

  return (
    <div className="container">
      <div className="img_container">
        {currentMeme && (
          <img className="current_img" src={currentMeme.url} alt="meme image" />
        )}
      </div>
    </div>
  );
}

export default MemeGenerator;