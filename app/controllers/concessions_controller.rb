class ConcessionsController < ApplicationController

    def index 
        concessions = Airport.find_by(code: params[:airport]).gates.where(name: "Gate #{params[:gate]}").first.concessions
        render json: concessions, status: :ok
    end

end
