import React from 'react'
import EditForm from './EditForm.jsx'

export default function MemeList(props) {

    const {memeList, handleDelete, handleEdit} = props;

    const savedMemes = memeList.map((meme, index) => {

        
        return (
            <div className='list--area' key={index}>
                <div className='list--meme'>
                    <img className="meme--image" src={meme.randomImage}/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
                {/* <EditForm meme={meme} handleEdit={handleEdit} index={index}/> */}
                <button className='list--delete' onClick={() => handleDelete(index)}>Delete meme</button>
            </div>
        )
    })

    
    return (
        <>
            {savedMemes}
        </>
    )
}

//map - create a new array with data from old/prev array
//props - properties, are passed from parent to child components, can pass data or functions
//move to editform <button className='list--edit'>Edit meme</button>
