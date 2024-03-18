import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { TravelContext } from './TravelContext'

export default function Visitedlist(props) {

    const { name, continent, yearvisited, seasonvisited, traveledalone, _id } = props
    const { visitedList, getVisitedList, handleDeleteV } = useContext(TravelContext)

    const travelElements = visitedList.map((country, index) => {
        
        return (
            <div className="visited--country" key={index}>
                <h2>{country.name}</h2>
                <h3>Continent: {country.continent}</h3>
                <h3>Visited: {country.seasonvisited} of {country.yearvisited}</h3>
                <p>{country.traveledalone ? "Solo trip" : "Group trip"}</p>
                <button className="button" onClick={() => handleDeleteV(country._id)}>Remove</button>
                
            </div>
        )
    })

    useEffect(() => {
        getVisitedList()
    }, [])

    return (
        <div className="visited--box">
            {travelElements}
        </div>
    )
}