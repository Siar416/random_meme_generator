import { useState, useEffect } from "react";
import axios from "axios";

function MemeGenerator() {
  const [memeArray, setMemeArray] = useState([]);
  const [currentMeme, setCurrentMeme] = useState(null);

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((res) => {
      setMemeArray(res.data.data.memes);
    });
  }, []);

  return (
    <div className="container">
      <h1>Meme</h1>
    </div>
  );
}

export default MemeGenerator;
