import React from "react";
import biglogo from '../images/navbarlogo.png';

function Airport() {
    return (
        <>
            
            <h1 class="title">amenities close by</h1>
            <section className='testing scrolling'>
                Something about amenities close by
                <div class="scrolling-wrapper">
                    <div class="columns">
                        <div class="column">
                            amenities
                            <div class="cardsc">
                                <div class="card-image">
                                    <img src={biglogo} className="placeholder" alt="logo" />
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4">John Smith</p>
                                            <p class="subtitle is-6">@johnsmith</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris.
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="column">
                            food
                            <div class="cardsc">
                                <div class="card-image">
                                    <img src={biglogo} className="placeholder" alt="logo" />
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4">John Smith</p>
                                            <p class="subtitle is-6">@johnsmith</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris.
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="column">
                          shop
                            <div class="cardsc">
                                <div class="card-image">
                                    <img src={biglogo} className="placeholder" alt="logo" />
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4">John Smith</p>
                                            <p class="subtitle is-6">@johnsmith</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris.
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="column">
                            food
                            <div class="cardsc card">
                                <div class="card-image">
                                    <img src={biglogo} className="placeholder" alt="logo" />
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4">John Smith</p>
                                            <p class="subtitle is-6">@johnsmith</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map of airport goes here">
                <h1 class="title">Map of _Insert Airport Name Here_</h1>
                <div class="box">
                    Map baybay
                </div>
            </section>
        </>
    )
}

export default Airport;