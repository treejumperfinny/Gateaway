import { useEffect, useState } from "react";
import "../styling/main.css"
import Flight from "./Flight";
import Segment from "./Segment";

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
            <h1 class="title">Dashboard</h1>
            <p> This is your dash.
                Enter yout flight information here
                Input your flight information.
                Maybe old flight information is shown here?
            </p>
            <div className="form" class="field">
                <form onSubmit={handleAddFlight}>
                    <label class="label">
                        Airline:
                        <div class="control">
                            <input class="input" name="airline" onChange={handleInputChange} />
                        </div>
                    </label>
                    <label class="label">
                        Flight Number:
                        <div class="control">
                            <input class="input" name="flight_number" onChange={handleInputChange} />
                        </div>
                    </label>
                    <label class="label">
                        Departure Date:
                        <div class="control">
                            <input class="input" name="departure_date" type="datetime-local" onChange={handleInputChange} />
                        </div>
                    </label>
                    <button class="button is-link is-rounded" onClick={handleAddFlight}>
                        Add Trip
                    </button>
                </form>
            </div>
            <h3>Flights</h3>
            <p>
                Hello there. Packed? Ready? Let's go on a grand adventure!
            </p>
            <div class="scrolling-wrapper">
                <div class="columns">
                    
                        {showFlights()}
                                                             
                </div>
            </div>
            <div className="segement-summary">
                details of the trip go here
                <Segment flight={selectedFlight} />
            </div>
        </>
    )
}

export default Dashboard;