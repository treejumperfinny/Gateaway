import Segment from './Segment';
import React, { useEffect, useState } from 'react';
import "../styling/main.css"
import ReactLoading from 'react-loading'

function Segments({ flight }) {
    const [segments, setSegments] = useState([])
    const [loaded, setLoaded] = useState(true)

    useEffect(segmentSummary, [flight])

    function cleanedData(data) {
        return {
            departure: {
                airport: data.departure.airport,
                code: data.departure.iata,
                timezone: data.departure.timezone,
                gate: data.departure.gate,
                delay_in_min: data.departure.delay,
                scheduled_at: data.departure.scheduled
            },
            arrival: {
                airport: data.arrival.airport,
                code: data.arrival.iata,
                timezone: data.arrival.timezone,
                gate: data.arrival.gate,
                delay_in_min: data.arrival.delay,
                baggage_carousel: data.arrival.baggage,
                scheduled_at: data.arrival.scheduled
            }
        }
    }

    function segmentSummary() {
        if(flight.flight_number === undefined) {
            return;
        }

        setLoaded(false)
        fetch(`https://api.aviationstack.com/v1/flights?access_key=fef5700f671c8396292b1032dd84da7d&flight_icao=${flight.flight_number}`)
            .then(response => response.json())
            .then((segments) => {
                setSegments(segments.data.filter(data => data.flight_date === flight.departure_date).map(cleanedData))
                setLoaded(true)
            })
    }

    function showSegments() {
        return segments.map((segment, index) => <Segment segment={segment} key={index} />)
    }

    return (
        <>
            {loaded === false ? <div class="centered-content"><ReactLoading type={"cylon"} color={"#5C6784"} className="bars" height={350} width={350}/></div> : showSegments()}
        </>
    )
}

export default Segments;