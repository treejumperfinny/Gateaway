Rails.application.routes.draw do
  scope :api do
  
  resources :sessions, only: [:create]  
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  resources :users, only: [:create, :show, :index, :destroy]
  end
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
