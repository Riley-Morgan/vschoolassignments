import React from 'react'
import data from './data.jsx'
import Friend from './Friend.jsx'


export default function FriendList() {
    const card = data.map(item => {
        return (
            
                <Friend 
                    key={item.id}
                    {...item}
                />   
            
        )
    })

    return (
        <>
            <section className="friend--list">
                {card}
            </section>
        </>
    )
}
