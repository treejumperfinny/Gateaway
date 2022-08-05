import React from "react";

function Food({ place }) {
    return (
        <>
        <div class="column" className='rails-flights centered-content'>
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{place.name}</p>
                                <p class="title is-4">Open: {place.opening_time}</p>
                                <p class="title is-4">Close: {place.closing_time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Food;