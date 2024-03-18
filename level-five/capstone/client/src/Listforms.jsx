import React, { useEffect, useState, useContext } from 'react'
import { TravelContext } from './TravelContext'



export default function Listforms(props) {

    const {handleSubmitV} = useContext(TravelContext)

    const initInputs = {
        name: props.name || "",
        continent: props.continent || "",
        yearvisited: props.yearvisited || "",
        seasonvisited: props.seasonvisited || "",
        traveledalone: props.traveledalone || ""
    }

    const [inputs, setInputs] = useState(initInputs)

    function submit(event) {
        event.preventDefault()
        handleSubmitV(inputs)
        console.log("Successfully added data.")
        setInputs(initInputs)
    }

    function handleChangeV(event) {
        const { name, value } = event.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    return (
        <div className="visited--form">
            <input 
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChangeV}
                placeholder="Country"
            />
            <br></br>
            <input 
                type="text"
                name="continent"
                value={inputs.continent}
                onChange={handleChangeV}
                placeholder="Continent"
            />
            <br></br>
            <input 
                type="text"
                name="yearvisited"
                value={inputs.yearvisited}
                onChange={handleChangeV}
                placeholder="Year Visited"
            />
            <br></br>
            <input 
                type="text"
                name="seasonvisited"
                value={inputs.seasonvisited}
                onChange={handleChangeV}
                placeholder="Season Visited"
            />
            <br></br>
            <div className="alone--box">
                <h3>Did you travel alone?</h3>
                <select 
                    name="traveledalone" 
                    value={inputs.traveledalone} 
                    onChange={handleChangeV}
                >
                    <option>---</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </div>
            <button className="button" onClick={submit}>Submit</button>
        </div>
    )
}