import "../styling/main.css"
import React, { useState } from "react";
// import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "../styling/main.css"
import { useNavigate } from "react-router-dom";

function Register() {
    const [newUser, setNewUser] = useState({})

    let navigate = useNavigate()

    function handleNewUser(e) {
        e.preventDefault()
        const addNewUser = {
            user_id: newUser.user,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            phone: newUser.phone,
            password: newUser.password
        }

        fetch('/api/users', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(addNewUser)
        })
            .then((response) => response.json)
            .then(() => navigate('/letsgo'))
    }

    function handleInputChange(e) {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="reg-page  centered-content" style={{backgroundColor: "#e8f1f3"}}>
                <div className="form" class="field">
                    <h3>Register with us today!</h3>
                    <form onSubmit={handleNewUser}>
                        <label class="label">
                            First Name:
                            <div class="control">
                                <input class="input" name="first_name" onChange={handleInputChange} />
                            </div>
                        </label>

                        <label class="label">
                            Last Name:
                            <div class="control">
                                <input class="input" name="last_name" onChange={handleInputChange} />
                            </div>
                        </label>

                        <label class="label">
                            Email:
                            <div class="control">
                                <input class="input" name="email" onChange={handleInputChange} />
                            </div>
                        </label>
                        <label class="label">
                            Phone:
                            <div class="control">
                                <input class="input" name="phone" onChange={handleInputChange} />
                            </div>
                        </label>
                        <label class="label">
                            Password:
                            <div class="control">
                                <input class="input" type="password" name="password" onChange={handleInputChange} />
                            </div>
                        </label>
                        <button class="button is-link is-rounded">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Register;