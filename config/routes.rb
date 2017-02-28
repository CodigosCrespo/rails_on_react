# Rails.application.routes.draw do
#   namespace :api do
#     namespace :v1 do
#       resources :items, only: [:index, :create, :destroy, :update]
#     end
#   end
# end

Rails.application.routes.draw do
  root to: 'site#index'
end
