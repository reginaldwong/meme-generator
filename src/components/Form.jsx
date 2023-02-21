import React, {useState} from "react"
import memeData from "../memeData";

const Form = () => {
    const [memeImage, setMemeImage] = useState("");
    const [memeName, setMemeName] = useState("Enter the top text in the first bar and bottom text in the second bar");

    const getMemeImage = () => {
        const memesArray = memeData.data.memes;
        const randomMeme = memesArray[Math.floor(Math.random()*memesArray.length)];
        setMemeImage(randomMeme.url);
        setMemeName(randomMeme.name)
    }

    return (
        <section>
        <div className="form--container">
            <div className="form--container--image">
                <img src={memeImage} alt="" className="form--image" />
            </div>
            <div action="" className="form--form">
                <h3>{memeName}</h3>
                <p>Enter the top text in the first bar and bottom text in the second bar!</p>
                <input type="text" placeholder="Top Text" className="form--input"/>
                <input type="text" placeholder="Bottom Text" className="form--input"/>
                <button className="form--button" onClick={getMemeImage} >Get a new meme 🔥🔥</button>
            </div>
        </div>
        </section>
    )
}

export default Form;