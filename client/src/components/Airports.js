import React from "react";
import Map from "./Map";
import Concessions from "./Concessions";

function Airport() {


    return (
        <>
        <section className="airport-map">                
                <div class="box">
                    <Map />
                </div>
            </section>     
            <Concessions />
        </>
    )
}

export default Airport;