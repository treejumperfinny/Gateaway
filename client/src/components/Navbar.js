import "../styling/main.css"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hoppsflite from '../images/hoppsflite.png'
import { removeUser } from "../slicers/userSlice";

function Navbar() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.value)
    let navigate = useNavigate();

    function logout() {
        fetch("/api/logout", { method: "DELETE" })
            .then((resp) => {
                dispatch(removeUser())
                navigate('/logon')
            })
    }

    function showLoggedInMenuItems() {
        return <>
            <li><a href="/welcome">Home</a></li>
            <li><a href="/dash">Flights</a></li>
            <li><a href="/airports">Airports</a></li>
            <li><button onClick={logout}>Log Out</button></li>
        </>
    }

    function showLoggedOutMenuItems() {
        return <>
            <li><a href="/welcome">Home</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/logon">Log In</a></li>
        </>
    }

    return (
        <>
            <nav>
                <aside class="menu">
                    <img src={hoppsflite} className="hoppsnav" alt="logo" />
                    <ul class="menu-list">
                        {user !== null ? showLoggedInMenuItems() : showLoggedOutMenuItems() }
                    </ul>
                </aside>
            </nav>
        </>
    )
};

export default Navbar;