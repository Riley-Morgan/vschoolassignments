import React, { useState } from 'react'
import axios from 'axios'

const TravelContext = React.createContext()

function TravelContextProvider(props) {

    const [wishList, setWishList] = useState([])

    const [visitedList, setVisitedList] = useState([])

    const getWishList = () => {
        axios.get("/api/wishlist")
         .then(res => setWishList(res.data))
         .catch(err => console.log(err))
    }

    const getVisitedList = () => {
        axios.get("/api/visited")
         .then(res => setVisitedList(res.data))
         .catch(err => console.log(err))
    }

    const handleSubmitW = (country) => {
        axios.post("/api/wishlist", country)
         .then((res) => {
            setWishList((prev) => [
                ...prev,
                res.data
            ])
         .catch((err) => console.log(err))
         })
    }

    const handleSubmitV = (country) => {
        axios.post("/api/visited", country)
         .then((res) => {
            setVisitedList((prev) => [
                ...prev,
                res.data
            ])
         .catch((err) => console.log(err))
         })
    }

    const handleDeleteW = (countryId) => {
        axios.delete(`/api/wishlist/${countryId}`)
            .then((res) => {
             setWishList(prevWishList => prevWishList.filter(country => country._id !== countryId))
            })
            .catch((err) => console.log(err))
    }

    const handleDeleteV = (countryId) => {
        axios.delete(`/api/visited/${countryId}`)
         .then((res) => {
            setVisitedList(prevVisitedList => prevVisitedList.filter(country => country._id !== countryId))
         })
         .catch((err) => console.log(err))
    }

    return (
        <TravelContext.Provider value = {{
            wishList: wishList,
            visitedList: visitedList,
            getWishList: getWishList,
            getVisitedList: getVisitedList,
            handleSubmitW: handleSubmitW,
            handleSubmitV: handleSubmitV,
            handleDeleteW: handleDeleteW,
            handleDeleteV: handleDeleteV
        }}>
            {props.children}
        </TravelContext.Provider>
    )
}

export {TravelContext, TravelContextProvider}