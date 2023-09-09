import React from 'react'


export default function BlogPost(props) {
    return (
        <div className="blog--post">
            <h1 className='blog--main'>{props.title}</h1>
            <p className='blog--sub'>{props.subTitle}</p>
            <p className='blog--info'>Posted by {props.author} on {props.date}</p>
        </div>
    )
}