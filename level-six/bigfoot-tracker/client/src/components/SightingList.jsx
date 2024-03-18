import Sighting from './Sighting.jsx'

export default function Sightinglist(props) {
    const { sightings } = props
    return (
        <>
            <div className="sighting-list">
                {sightings.map(sighting => <Sighting {...sighting} key={sighting._id}/>)}
            </div>
        </>
    )
}