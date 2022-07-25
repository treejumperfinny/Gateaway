import "../styling/main.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hoppsflite from '../images/hoppsflite.png'

function Navbar() {
    return (
        <>
            <nav>   
            <aside class="menu"> 
                <img src={hoppsflite} className="hoppsnav" alt="logo" />
                <ul class="menu-list">
                <li><a href="/welcome">Home</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/logon">Log In</a></li>
                <li><a href="/flights">Flights</a></li>
                <li><a href="/airports">Airports</a></li>
                </ul>
            </aside>
            </nav>
        </>
    )
};

export default Navbar;