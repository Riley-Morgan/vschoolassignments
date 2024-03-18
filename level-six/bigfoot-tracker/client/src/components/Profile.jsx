import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider'
import Sighting from './Sighting.jsx'
import SightingForm from './SightingForm.jsx'
import Sightinglist from './SightingList.jsx'

export default function Profile() {
    const { user: { username }, addSighting, sightings, getUserSightings} = useContext(UserContext)

    useEffect(() => {
        getUserSightings()
    }, [])

    return (
        <div className="profile-container">
            <h2>Welcome {username}!</h2>
            <h4>Record a new sighting:</h4>
            <SightingForm addSighting={addSighting}/>
            <h4>Past sightings:</h4>
            <Sightinglist sightings={sightings}/>
        </div>
    )
}