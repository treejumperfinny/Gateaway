import biglogo from '../images/navbarlogo.png';
import React from 'react';
import "../styling/main.css"
import { DateTime } from "luxon";
import delta from '../images/icons8-delta-airlines-100.png';
import united from '../images/icons8-united-airlines-100.png';
import american from '../images/icons8-american-airlines-100.png';
import southwest from '../images/icons8-southwest-airlines-100.png'

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

    function showTail(airline) {
        let image = biglogo

        switch (airline) {
            case "Southwest":
                image = southwest
                break
            case "United":
                image = united
                break
            case "American":
                image = american
                break
            case "Delta":
                image = delta
                break
            default:
                image = biglogo
        }

        return image
    }

    return (
        <>
            <div class="column" className='rails-flights centered-content'>
                <div class="card">
                    <div class="card-image">
                        <img src={showTail(flight.airline)} className="tailholder" alt="logo" />
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{flight.airline}</p>
                                <p class="title is-4">{flight.flight_number}</p>
                            </div>
                        </div>
                        <div class="content">
                           <p class="title is-4"> {DateTime.fromISO(flight.departure_date).toFormat("LLLL d, y")}</p>
                            <div className='btn-details'>
                                <button class="button is-link is-rounded is-outlined" onClick={() => onSelect(flight)} >Details</button>
                                <div className='gap'> </div>
                                <button class="button is-danger is-rounded is-outlined" onClick={handleDelete}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Flight;