import React from 'react'
import data from './data.jsx'
import BlogPost from './BlogPost.jsx'

export default function BlogList() {
    const post = data.map(item => {
        return (
            <BlogPost 
                key={item.id}
                {...item}
                
            />
        )
    })

    return (
        <>
            <section className='blog--list'>
                {post}
            </section>
        </>
    )
}