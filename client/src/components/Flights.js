import biglogo from '../images/navbarlogo.png';
import React from 'react';
import "../styling/main.css"


function Flights() {
    return (
        <>
            <h3>Flights</h3>
            <div className="flights">
                <p>
                    Hello there. Packed? Ready? Let's go on a grand adventure!
                </p>
                <card>
                    <div class="card-content">
                        This is where flight information will go.
                        <img src={biglogo} className="placeholder" alt="logo" />
                        <p>Flights and flight information goes here. Map it out on cards?</p>

                    </div>
                </card>
                <div class="card">
                    Second Flight
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


                <div class="columns">
                    <div class="column">
                        First column
                        <div class="card">
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
                        Second Flight
                        <div class="card">
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
                        Third column
                        <div class="card">
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
                        Fourth column
                        <div class="card">
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
                <div class="box">
                    This is a box of stuff
                </div>
                <div class="box">
                    This is a box of stuff
                </div>
                <div class="box">
                    This is a box of columns with cards
                    <div class="columns">
                        <div class="column">
                            first
                            <div class="card">
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
                            second
                            <div class="card">
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
                    <section className='testing scrolling'>
                        <div class="scrolling-wrapper">
                            <div class="columns">
                                <div class="column">
                                    First column
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
                                    Second Flight
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
                                    Third column
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
                                    Fourth column
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
                            </div>
                        </div>
                    </section>
                    <h2>Title</h2>
                    <div class="box">
                        I am a box under a title.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flights;