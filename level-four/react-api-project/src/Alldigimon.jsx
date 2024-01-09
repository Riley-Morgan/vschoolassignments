import axios from "axios"
import { useEffect, useState } from "react"

export default function Alldigimon() {

    const [entireList, setEntireList] = useState([])

    const justNames = entireList.map((digimon, index) => {

        return (
            <div className='just--name' key={index}>
                <h3>{digimon.name}</h3>
            </div>
        )
    })

    useEffect(() => {
        axios.get('https://digimon-api.vercel.app/api/digimon')
        .then(res => setEntireList(res.data))
        .catch(err => console.log(err))
    })

    return (
        <div className='name--box'>
            {justNames}
        </div>
    )
}