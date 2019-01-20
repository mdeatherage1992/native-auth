Rails.application.routes.draw do
  root :to => "api/v1/appointments#index"
  namespace :api do
  namespace :v1 do
  resources :appointments
  devise_for :users
  resources :home, only: [:index]
  resources :users
  end
end

end
