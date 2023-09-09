import React from 'react'
import Pet from './Pet.jsx'

export default function Friend(props) {

    const petCard = props.pets.map(item => {
        return (
            <Pet 
                key={item.id}
                {...item}
                />

        )
    })

    return (
        <div className="friend--card">
            <h2 className="friend--name">{props.name}, {props.age}</h2>
            {petCard}
        </div>
    )
}