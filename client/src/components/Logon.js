import React from "react"
import "../styling/main.css"

function Logon() {


    return (
        <>
            <h3>Welcome Back. Log in below and away we will go!</h3>
            <div className="form" class="field">
                <form>
                    <label class="label">
                        Email:
                        <div class="control">
                            <input class="input" name="first-name" placeholder="hoppsNflite@gateaway.com" />
                        </div>
                    </label>
                    <label class="label">
                        Password:
                        <div class="control">
                            <input class="input" name="password" placeholder="******" />
                        </div>
                    </label>
                    <button class="button is-link is-rounded">
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default Logon;