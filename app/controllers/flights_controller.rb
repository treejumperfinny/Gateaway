class FlightsController < ApplicationController
    before_action :set_flight, only: %i(show update destroy)

    def show 
        render json: @flight
    end

    def index 
        render json: active_user.flights, status: 200
    end

    def create
        flight = active_user.flights.create!(flight_params)
        render json: flight, status: :created
    end

    def destroy
        @flight.destroy!
        head 204
    end

    private 

    def set_flight
        @flight = active_user.flights.find(params[:id])
    end

    def flight_params
        params.permit(:airline, :flight_number, :departure_date)
    end
end
