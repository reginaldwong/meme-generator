import React from "react"

const Form = () => {
    return (
        <section>
        <div className="form--container">
            <div className="form--container--image">
                <img src="/images/placeholder.png" alt="" />
            </div>
            <form action="" className="form--form">
                <p>Enter the top text in the first bar and bottom text in the second bar!</p>
                <input type="text" placeholder="Top Text" className="form--input"/>
                <input type="text" placeholder="Bottom Text" className="form--input"/>
                <button className="form--button">Get a new meme 🔥🔥</button>
            </form>
        </div>
        </section>
    )
}

export default Form;