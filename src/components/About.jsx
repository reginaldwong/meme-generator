import React from "react"

const About = () => {
    return (
        <section>
            <div className="about--container">
            <h3 className="about--title">What is MemeMachine9000?</h3>
            <p>MemeMachine9000 is an online image maker that lets users add captions to popular meme images.</p>
            <h3 className="about--title">How to make a meme</h3>
            <ol>
                <li><strong>Choose a template.</strong> Press "Get a new meme" button to get a randomized meme of over 100 memes.</li>
                <li><strong>Add text.</strong> When a desired meme has been chosen, enter the top text and bottom text desired to display on the meme.</li>
                <li><strong>Save and share.</strong> Once you are happy with the meme you have created, you can share through social apps, or download the meme to your device.</li>
            </ol>
            </div>
        </section>
    )
}

export default About;