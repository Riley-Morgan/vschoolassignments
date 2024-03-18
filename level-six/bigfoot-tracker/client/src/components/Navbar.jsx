import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const { logout } = props

    return (
        <div className="navbar">
            <img className="navbar-img" src='../public/7987671_495.svg'/>
            <Link to="/profile" style={{paddingRight:20}}>Your Sightings</Link>
            <Link to="public" style={{paddingRight:20}}>The Sighting Board</Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}