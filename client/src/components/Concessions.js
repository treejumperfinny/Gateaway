import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Food from './Food'

function Concessions() {
    const [concessions, setConcessions] = useState([])
    let params = useParams();

    function getConcessions() {
        if (!params.airportCode || !params.gateNumber) {
            return
        }

        fetch(`/api/concessions?airport=${params.airportCode}&gate=${params.gateNumber}`)
            .then(r => r.json())
            .then(data => setConcessions(data))
    }

    useEffect(getConcessions, [])

    function showFood() {
        return concessions.map((concession) => <Food place={concession} key={concession.id} />)
    }

    return (
        <>
            <h3>Amenities near gate {params.gateNumber}:</h3>
            <div class="scrolling-wrapper">
                <div class="columns">
                    {showFood()}
                </div>
            </div>
        </>
    )
}

export default Concessions;