class SessionsController < ApplicationController
    # include ActiveUserConcern
    skip_before_action :authorize_user, only: [:create]

    def create 
        user = User.find_by(email: params[:email])&.authenticate(params[:password])

        if user
            session[:user_id] = user.id
            render json: user
        else
            render json: {error: "User does not exist. Please register!"}, status: 422
        end
    end 

    def destroy
        session.delete :user_id
        head :no_content    
    end

    # def logged_in
    #       if @active_user
    #         render json: { logged_in: true, user: @active_user}
    #       else
    #         render json: {logged_in: false}
    #       end  
    # end

    # def logout
    #     reset_session
    #     render json: {status: 200, logout: true}
    # end
end