import React from 'react'

export default function Badge(props) {

    const {badgeArray} = props    /*deconstructed, only use badgeArray in this component*/

    const badgeList = badgeArray.map((badge, index) => {
        return (
            <section className="badge--area" key={index}>
            <h3 className="badge--head">Badge:</h3>
            <div className="badge--info">
                <p>Name: {badge.firstName} {badge.lastName}</p>
                <p>Phone: {badge.phone}</p>
                <p>Date of birth: {badge.birthDate}</p>
                <p>Favorite Animal: {badge.favAnimal}</p>
                <p>Email: {badge.email}</p>
                <textarea>{badge.comments}</textarea>
            </div>
        </section>
        )
    })

    return (
        <>
            {badgeList}
        </>
    )
}

//Vocabulary
//1. Destructuring - definition
//2. 