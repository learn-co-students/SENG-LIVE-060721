Rails.application.routes.draw do
  resources :performers, only: [:index, :create]
  resources :character_roles, only: [:create]
  resources :crewmembers, only: [:index, :create]
  resources :productions, only: [:index, :show, :create, :update, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
