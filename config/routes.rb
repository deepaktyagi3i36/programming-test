Rails.application.routes.draw do
  root 'index#index'
  post '/user/create' => 'index#create_user'
end
