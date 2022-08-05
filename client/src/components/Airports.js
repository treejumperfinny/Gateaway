import React from "react";
import Map from "./Map";
import Concessions from "./Concessions";

function Airport() {


    return (
        <>
            <section className="airport-map">
                <h3>Airport Map</h3>
                <div className="centered-content">
                <label class="label">
                            Airport:
                            <select class="select control field" name="airline">
                                <option></option>
                                <option value="Delta">Columbus &#40;CMH&#41;</option>
                                <option value="American">Chicago-Midway &#40;MDW&#41;</option>                                
                                <option value="American">Chicago-O'Hare &#40;ORD&#41;</option>
                                <option value="Southwest">Dayton &#40;DAY&#41;</option>
                                <option value="United">San Francisco &#40;SFO&#41;</option>
                            </select>
                        </label>
                        <div className="gap"></div>
                </div>
                <div class="box">
                    <Map />
                </div>
            </section>
            <Concessions />
        </>
    )
}

export default Airport;