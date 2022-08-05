import { DateTime } from 'luxon';
import React from 'react';
import { Link } from 'react-router-dom';
import "../styling/main.css"

function Segment({ segment }) {


	return (
		<>
			<div class="columns">
				<div class="column">
					<h1 class="title centered-content">🛫 Departure 🛫</h1>
					<div class="card">
						<div class="card-content">
							<div class="columns is-gapless">
								<div class="column is-2">
									<h4 class="title is-4">When:</h4>
								</div>
								<div class="column is-size-4">
									{DateTime.fromISO(segment.departure.scheduled_at).setZone(segment.departure.timezone).toLocaleString(DateTime.DATETIME_FULL)}
								</div>
							</div>
							<div class="columns is-gapless">
								<div class="column is-2">
									<h4 class="title is-4">Airport:</h4>
								</div>
								<div class="column is-size-4">
									{segment.departure.airport} &#40;{segment.departure.code}&#41;
								</div>
							</div>
							<div class="columns is-gapless">
								<div class="column is-2">
									<h4 class="title is-4">Gate:</h4>
								</div>
								<div class="column is-size-4">
									{segment.departure.gate}
								</div>
								<div class="column is-3">
								<Link to={`/airports/${segment.departure.code}/${segment.departure.gate}`} className="button is-link is-rounded">View Details</Link>
								</div>
							</div>
							<div class="columns is-gapless">
								<div class="column is-2">
									<h4 class="title is-4">Delay:</h4>
								</div>
								<div class="column is-size-4">
									{segment.departure.delay_in_minutes === undefined ? "On time" : `${segment.departure.delay_in_minutes} minutes`}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="column">
					<h1 class="title centered-content">🛬 Arrival 🛬</h1>
					<div class="card">
						<div class="card-content">
							<div class="columns is-gapless">
								<div class="column is-2">
									<h4 class="title is-4">When:</h4>
								</div>
								<div class="column is-size-4">
									{DateTime.fromISO(segment.arrival.scheduled_at).setZone(segment.arrival.timezone).toLocaleString(DateTime.DATETIME_FULL)}
								</div>
							</div>
							<div class="columns is-gapless">
								<div class="column is-2">
									<h4 class="title is-4">Airport:</h4>
								</div>
								<div class="column is-size-4">
									{segment.arrival.airport} &#40;{segment.arrival.code}&#41;
								</div>
							</div>
							<div class="columns is-gapless">
								<div class="column is-2">
									<h4 class="title is-4">Gate:</h4>
								</div>
								<div class="column is-size-4">
									{segment.arrival.gate}
								</div>
								<div class="column is-3">
									<Link to={`/airports/${segment.arrival.code}/${segment.arrival.gate}`} className="button is-link is-rounded">View Details</Link>
								</div>
							</div>
							<div class="columns is-gapless">
								<div class="column is-2">
									<h4 class="title is-4">Delay:</h4>
								</div>
								<div class="column is-size-4">
									{segment.arrival.delay_in_minutes === undefined ? "On time" : `${segment.arrival.delay_in_minutes} minutes`}
								</div>
							</div>
							<div class="columns is-gapless">
								<div class="column is-2">
									<h4 class="title is-4">Bags:</h4>
								</div>
								<div class="column is-size-4">
									Carousel {segment.arrival.baggage_carousel}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Segment;