class UsersController < ApplicationController
    skip_before_action :authorize_user, only: [:create]

    def index
        users = User.all
        render json: users, status: 200
    end


    def create
        user = User.create!(user_params)
        if user 
            session[:user_id] = user.id
            render json: { status: :created, user: user}
        else
            render json: { status: 500 }
        end
    end

    def show
        if active_user
            render json: active_user
        else
            render json: { status: :unauthorized }
        end
    end

private

    # def set_active_user
    #     if sessions[:user_id]
    #         @active_user = User.find(session[:user_id])
    #     end
    # end

    def
        user_params 
        params.permit(:first_name, :last_name, :phone, :email, :password)
    end

end
