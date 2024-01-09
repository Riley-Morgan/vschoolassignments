import React from 'react'

export default function Meme(props) {

    const { handleSubmit } = props

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg", 
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomMeme = Math.floor(Math.random() * allMemes.length)  /* REMEMBER TO CHECK FOR ALL () NEEDED */
        const url = allMemes[randomMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url 
        }))
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function submit(event) {
        event.preventDefault()
        handleSubmit(meme)
    }

    return (
        <main>
            <div className="form" >
                <input 
                    type="text"
                    className="form--input"
                    placeholder="top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    className="form--input"
                    placeholder="bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <button className='save--meme' onClick={submit}>Save meme 🖼</button>
        </main>
    )

}