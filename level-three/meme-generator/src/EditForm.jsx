import React from 'react'

export default function EditForm(props) {

    const {meme, handleEdit, index} = props;

    const [editMeme, setEditMeme] = React.useState({
        topText: "",
        bottomText: "", 
    })

    function handleChange(event) {
        const {name, value} = event.target
        setEditMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
        console.log(value)
    }

    return (
        <form>
            <input 
                    type="text"
                    className="form--input"
                    placeholder="top text"
                    name="topText"
                    value={editMeme.topText}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    className="form--input"
                    placeholder="bottom text"
                    name="bottomText"
                    value={editMeme.bottomText}
                    onChange={handleChange}
                />
            <button className='list--edit' onClick={() => handleEdit(editMeme, index, event)}>Edit meme</button>
        </form>
    )
}