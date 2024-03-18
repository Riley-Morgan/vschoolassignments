import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { TravelContext } from './TravelContext'

export default function Wishlist(props) {

    const { name, _id } = props
    const { wishList, getWishList, handleDeleteW, handleSubmitW } = useContext(TravelContext)
    const firstWish = { name: ""}
    const [wish, setWish] = useState(firstWish)

    const wishElements = wishList.map((country, index) => {
        
        return (
            <div className='wish--country' key={index}>
                <h2 className='wish--name'>{country.name}</h2>
                <button className="button" onClick={() => handleDeleteW(country._id)}>Delete</button>
            </div>
        )
    })

    function submit(event) {
        event.preventDefault()
        handleSubmitW(wish)
        setWish(firstWish)
    }

    function handleChangeW(event) {
        const {name, value} = event.target
        setWish(prevWish => ({
            ...prevWish,
            [name]: value
        }))
    }

    useEffect(() => {
        getWishList()
    }, [])

    return (
        <>
            <div className="wish--list">
                {wishElements}
            </div>

            <div className="wish--form">
                <input 
                    type="text"
                    placeholder="Country"
                    name="name"
                    value={wish.name}
                    onChange={handleChangeW}
                />
                <button className="button" onClick={submit}>Add Wish</button>
            </div>
        </>
    )
}