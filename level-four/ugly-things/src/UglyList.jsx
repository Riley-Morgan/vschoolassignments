import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { UglyContext } from './UglyContext'

export default function UglyList(props) {

    const {uglyList, getList, handleDelete, handleSubmit} = useContext(UglyContext)

    const listElements = uglyList?.map((ugly, index) => {
        /* LIST THAT WILL BE DISPLAYED ON PAGE */
        return (
            <div className='ugly--item' key={index}>
                <h2 className="ugly--title">{ugly.title}</h2>
                <img className="ugly-image" src={ugly.imgUrl}/>
                <h4 className="ugly--comment">{ugly.description}</h4>
                <button onClick={() => handleDelete(ugly._id)}>Delete</button>
                <button>Edit</button>
            </div>
        )
    })

    useEffect(() => {
        axios.get("https://api.vschool.io/rileymorgan/thing")
        .then(res => getList(res.data))
        .catch(err => console.log(err))
    }, []) 

    return (
        <div className="ugly--list">
            {listElements}
        </div>
    )
}

//https://api.vschool.io/rileymorgan/thing