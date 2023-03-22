import React, {useState} from "react"
import memeData from "../memeData";

const Form = () => {
    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        image:"/images/placeholder.png"
    });
    const [memeName, setMemeName] = useState("Shut Up And Take My Money Fry");

    const getMeme = () => {
        const memesArray = memeData.data.memes;
        const randomMeme = memesArray[Math.floor(Math.random()*memesArray.length)];
        setMemeImage(prevMeme => {
            return {
                ...prevMeme,
                image: randomMeme.url
            }
        });
        setMemeName(randomMeme.name)
    }

    return (
        <section>
        <div className="form--container">
            <div className="form--container--image">
                <img src={memeImage.image} alt={memeName} className="form--image" />
                <h2 className="meme--text top">top text</h2>
                <h2 className="meme--text bottom">bottom text</h2>
            </div>
            <div action="" className="form--form">
                <h3 className="form--name">{memeName}</h3>
                <p>Enter the top text in the first bar and bottom text in the second bar!</p>
                <input type="text" placeholder="Enter top text" className="form--input"/>
                <input type="text" placeholder="Enter bottom text" className="form--input"/>
                <button className="form--button" onClick={getMeme} >Get a new meme 🔥🔥</button>
            </div>
        </div>
        </section>
    )
}

export default Form;