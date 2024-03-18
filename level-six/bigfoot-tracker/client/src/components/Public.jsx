import { useContext, useEffect } from 'react'
import Sighting from './Sighting.jsx'
import { UserContext } from '../context/UserProvider.jsx'

export default function Public() {
    const { getAllSightings, sightings } = useContext(UserContext)

    useEffect(() => {
        getAllSightings()
    }, [])

    return (
        <div>
            <div>
                {sightings.map(sighting => <Sighting {...sighting} key={sighting._id}/>)}
            </div>
        </div>
    )
}