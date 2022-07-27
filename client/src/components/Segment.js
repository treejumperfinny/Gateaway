import biglogo from '../images/navbarlogo.png';
import React, { useEffect, useState } from 'react';
import "../styling/main.css"

function Segment({ flight }) {
    const [segment, setSegment] = useState({})

    // useEffect(() => segmentSummary, [])

    // function segmentSummary(){
    //     fetch(`http://api.aviationstack.com/v1/flights?access_key=83d4b7589b6b8edeecb92814b7debe91&flight_icao=${flight.flight_number}`)
    //         .then(response => response.json())
    //         .then((segment) => setSegment(segment))
    // }

    return (
        <>
            <h3> Journey Segment In Detail</h3>
            <p>Flight information from API goes here</p>

            <div class="columns">
                <div class="column">
                    <h2 class="title"> Time At Destination </h2>
                    <div class="card">
                        <div class="card-content">
                            <h3 class="title">Insert Time At Destination desitnation timezone</h3>
                            {flight.airline}
                            {/* {segment.arrival.timezone}
                            {segment.arrival.scheduled} */}
                        </div>
                    </div>
                </div>
                <div class="column">
                    <h2 class="title"> Time At origin </h2>
                    <div class="card">
                        <div class="card-content">
                            <p>Insert Time at "origin"</p>
                            {/* {segment.destination.timezone}
                            {segment.destination.scheduled} */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                {/* You will be arriving at {segment.arrival.gate} at Terminal {segment.arrival.terminal} in {segment.arrival.airport}. */}
            </div>
            <div>
                <p>Click below for to and go to amentites</p>
                <a href="/airports"><img src={biglogo} className="hoppsflite" alt="logo" /></a>
            </div>
        </>
    )
}

export default Segment;