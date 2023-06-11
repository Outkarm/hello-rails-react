Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
    end
  end
  # get 'greetings/random_greeting', to: 'greetings#random_greeting'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'root#index'
end
