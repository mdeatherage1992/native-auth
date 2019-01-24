Rails.application.routes.draw do

  root :to => "api/v1/appointments#index"
  namespace :api do
  namespace :v1 do
  resources :appointments
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :sessions
  resources :home, only: [:index]
  resources :users
  end
end

end
