class ApplicationController < ActionController::API
    before_action :authorize_user

  include ActionController::Cookies

  def active_user
    User.find(session[:user_id])
  end

  private

  def authorize_user
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
