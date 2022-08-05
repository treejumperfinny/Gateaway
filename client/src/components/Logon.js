import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setUser } from '../slicers/userSlice';
import "../styling/main.css"

function Logon() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate()
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
            })
            .then((user) => dispatch(setUser(user)))
            .then(() => navigate('/dash'))
    }

    return (
        <>
        <div className='logon-page centered-content'>
            <h3 className='centered-content'>Welcome Back. Log in below and away we will go!</h3>
            <div className="form login" class="field">
                <form>
                    <label class="label">
                        Email:
                        <div class="control">
                            <input class="input" name="first-name" placeholder="hoppsNflite@gateaway.com" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </label>
                    <label class="label">
                        Password:
                        <div class="control">
                            <input class="input" type="password" name="password" placeholder="******" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </label>
                    <button class="button is-link is-rounded" onClick={handleSubmit}>
                        Login
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Logon;