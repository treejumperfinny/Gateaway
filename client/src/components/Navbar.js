import "../styling/main.css"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
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
            <div class="navbar-start">
                <a class="navbar-item" href="/">Home</a>
                <a class="navbar-item" href="/dash">Flights</a>
                <a class="navbar-item" href="/airports">Airports</a>
            </div>
            <div class="navbar-end">
                <div class="buttons">
                    <button class="button is-link is-rounded" onClick={logout}>Log Out</button></div>
            </div>
        </>
    }

    function showLoggedOutMenuItems() {
        return <>
            <div class="navbar-start">
                <a class="navbar-item" href="/">Home</a>
                <a class="navbar-item" href="/register">Register</a>
            </div>
            <div class="navbar-end">
                <div class="buttons">
                    <a class="navbar-item" href="/logon"><button class="button is-link is-rounded">Log In</button></a></div>
            </div>
        </>
    }

    return (
        <>
            <nav class="navbar is-transparent" >
                <div class="navbar is-fixed-top">
                    <div class="navbar-menu">
                        {user !== null ? showLoggedInMenuItems() : showLoggedOutMenuItems()}
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;