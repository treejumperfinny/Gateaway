class SessionsController < ApplicationController
    include ActiveUserConcern

    def create 
        user = User.find_by(email: params["email"]).try(:authenticate, params[:email, :password])

        if user
            session[:user_id] = user.id
            render json: {status: :created, logged_in: true, user: user}
        end

        else
            render json: { status: 401 } 
        end
    end

    def logged_in
          if @active_user
            render json: { logged_in: true, user: @active_user}
          else
            render json: {logged_in: false}
          end  
    end

    def logout
        reset_session
        render json: {status: 200, logout: true}
    end
end