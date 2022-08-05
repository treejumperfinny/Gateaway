import { useEffect, useState } from "react";
import "../styling/main.css"
import Flight from "./Flight";
import Segments from "./Segments";

function Dashboard() {
    const [newFlight, setNewFlight] = useState({})
    const [flights, setFlights] = useState([])
    const [selectedFlight, setSelectedFlight] = useState({})

    useEffect(() => {
        fetch("/api/flights")
            .then(response => response.json())
            .then(data => setFlights(data))
    }, [])

    function handleAddFlight(e) {
        e.preventDefault()
        const addedFlight = {
            airline: newFlight.airline,
            flight_number: newFlight.flight_number,
            departure_date: newFlight.departure_date
        }

        fetch("/api/flights", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(addedFlight)
        })
            .then((resp) => resp.json())
            .then((data => appendNewFlight(data)))
    }

    function handleInputChange(e) {
        setNewFlight({ ...newFlight, [e.target.name]: e.target.value })
    }

    function showFlights() {
        return flights.map((flight) => <Flight flight={flight} deleteTrip={removeFlight} onSelect={selectFlight} />)
    }

    const appendNewFlight = (newFlight) => {
        setFlights([...flights, newFlight])
    }

    const removeFlight = (trip) => {
        setFlights([...flights].filter((flight) => flight.id !== trip.id))
    }

    const selectFlight = (flight) => {
        setSelectedFlight(flight)
    }

    return (
        <>
            <h3>Dashboard</h3>           
            <div className="form centered-content" class="field">
                <form onSubmit={handleAddFlight}>                    
                        <label class="label">
                            Airline:
                            <select class="select control field" name="airline" onChange={handleInputChange}>
                                <option></option>
                                <option value="Delta">Delta Airlines</option>
                                <option value="American">American Airlines</option>
                                <option value="Southwest">Southwest Airlines</option>
                                <option value="United">United Airlines</option>
                            </select>
                        </label>
                    <p>When adding your flight number be sure to rememeber to add the letters before the numbers.</p>
                    <label class="label">
                        Flight Number:
                        <div class="control">
                            <input class="input" name="flight_number" onChange={handleInputChange} />
                        </div>
                    </label>
                    <label class="label">
                        Departure Date:
                        <div class="control">
                            <input class="input" name="departure_date" type="date" onChange={handleInputChange} />
                        </div>
                    </label>
                    <button class="button is-link is-rounded" onClick={handleAddFlight}>
                        Add Trip
                    </button>
                </form>
            </div>
            <h3>Flights</h3>
            <div class="scrolling-wrapper">
                <div class="columns">

                    {showFlights()}

                </div>
            </div>
            { selectFlight === {} ? "" :
                <div className="segement-summary">
                    <h2 class="centered-content title is-2">Details for {selectedFlight.airline} flight {selectedFlight.flight_number}</h2>
                    <Segments flight={selectedFlight} class="is-active" />
                </div>
            }
           
        </>
    )
}

export default Dashboard;