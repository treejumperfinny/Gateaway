module ActiveUserConcern
    extend ActiveSupport::Concern

    included do
        before_action :set_active_user
    end

    def set_active_user
        if sessions[:user_id]
            @active_user = User.find(session[:user_id])
    end

end