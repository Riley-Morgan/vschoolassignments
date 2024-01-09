import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"


export default function Levelspage() {
    const [levelList, setLevelList] = useState([])

    const [currentLevel, setCurrentLevel] = useState(['fresh'])

    const listElements = levelList.map((digimon, index) => {

        return (
            <div className='each--digimon' key={index}>
                <h3 className='each--digimon--name' >{digimon.name}</h3>
                <img className='each--digimon--img' src={digimon.img}/>
            </div>
        )
    })

    useEffect(() => {
        axios.get(`https://digimon-api.vercel.app/api/digimon/level/${currentLevel}`)
        .then(res => setLevelList(res.data))
        .catch(err => console.log(err))
    }, [currentLevel])

    function getFresh(event) {
        event.preventDefault()
        setCurrentLevel("fresh")
    }

    function getTraining(event) {
        event.preventDefault()
        setCurrentLevel("in training")
    }

    function getRookie(event) {
        event.preventDefault()
        setCurrentLevel("rookie")
    }

    function getChampion(event) {
        event.preventDefault()
        setCurrentLevel("champion")
    }

    function getUltimate(event) {
        event.preventDefault()
        setCurrentLevel("ultimate")
    }

    function getMega(event) {
        event.preventDefault()
        setCurrentLevel("mega")
    }



    return (
        <>
            <nav className="level--nav">
                <button className='button' onClick={getFresh}>Fresh</button> | 
                <button className='button' onClick={getTraining}>In Training</button> | 
                <button className='button' onClick={getRookie}>Rookie</button> | 
                <button className='button' onClick={getChampion}>Champion</button> | 
                <button className='button' onClick={getUltimate}>Ultimate</button> | 
                <button className='button' onClick={getMega}>Mega</button>
            </nav>
            <div className="level--box">
                {listElements}
            </div>
        </>
    )
}