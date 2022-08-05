class GatesController < ApplicationController
    before_action :set_flight, only: %i(show update destroy)

    def show 
        render json: Gate.all
    end

  private 


end
