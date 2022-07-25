import "../styling/main.css"
import React, { useState } from "react";
// import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "../styling/main.css"

function Register() {
    const [newUser, setNewUser] = useState({})

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
    }

    function handleInputChange(e) {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    return (
        <>
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
        </>
    )
};

export default Register;