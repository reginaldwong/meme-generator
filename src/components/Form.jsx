import React, {useState} from "react"
import memeData from "../memeData";

const Form = () => {
    const [memeImage, setMemeImage] = useState("/images/placeholder.png");
    const [memeName, setMemeName] = useState("");

    const getMeme = () => {
        const memesArray = memeData.data.memes;
        const randomMeme = memesArray[Math.floor(Math.random()*memesArray.length)];
        setMemeImage(randomMeme.url);
        setMemeName(randomMeme.name)
    }

    return (
        <section>
        <div className="form--container">
            <div className="form--container--image">
                <img src={memeImage} alt={memeName} className="form--image" />
            </div>
            <div action="" className="form--form">
                <h3 className="form--name">{memeName}</h3>
                <p>Enter the top text in the first bar and bottom text in the second bar!</p>
                <input type="text" placeholder="Top Text" className="form--input"/>
                <input type="text" placeholder="Bottom Text" className="form--input"/>
                <button className="form--button" onClick={getMeme} >Get a new meme 🔥🔥</button>
            </div>
        </div>
        </section>
    )
}

export default Form;