Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
    post 'login', to: 'sessions#create'
    post 'signup', to: 'registrations#create'
    post 'calories', to: 'foods#create'
    post 'index', to: 'foods#index'
    post 'destroy', to: 'foods#destroy'
    post 'calCount', to: 'users#count_cal'
    post 'foodSearch', to: "users#food_search"
    post 'createMed', to: "medicines#check"
    post 'medShow', to: "medicines#index"
    post 'medDestroy', to: "medicines#medDestroy"
    post 'profileShow', to: "users#show"
    end
  end
  
  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
