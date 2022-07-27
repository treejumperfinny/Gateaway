import biglogo from '../images/navbarlogo.png';
import React from 'react';
import "../styling/main.css"
import { DateTime } from "luxon";

function Flight({ flight, deleteTrip, onSelect }) {

    function handleDelete(e) {
        e.preventDefault()
        fetch(`/api/flights/${flight.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "applicaiton/json",
            }
        })
        .then(() => deleteTrip(flight))
    }

    return (
        <>
       
       <div class="column">
            <div class="card">
                <div class="card-image">
                    <img src={biglogo} className="placeholder" alt="logo" />
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{flight.airline}</p>
                            <p class="title is-4">{flight.flight_number}</p>
                        </div>
                    </div>
                    <div class="content">
                        {DateTime.fromISO(flight.departure_date).toLocaleString(DateTime.DATETIME_MED)}
                        <div className='btn-details'>
                        <button class="button is-link is-light" className='btn-deets' onClick={() => onSelect(flight)} >Details</button>
                        <button class="button is-link is-light" className='btn-deets' onClick={handleDelete}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default Flight;