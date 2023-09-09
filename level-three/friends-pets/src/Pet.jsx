import React from 'react'

export default function Pet(props) {
    return (
        <div>
            <p className="pet--list">{props.name} is a {props.breed}</p>
        </div>
    )
}