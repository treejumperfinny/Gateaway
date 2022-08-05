Rails.application.routes.draw do
  scope :api do
  
    resources :users, only: [:create, :index, :destroy]
    get '/me', to: 'users#show'
    resources :flights 
    resources :sessions, only: [:create, :destroy]  
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    resources :concessions, only: [:index]
  
  end
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end