class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: [:create]
    def create
        #hash password
        #validations
        user = User.create(user_params)
        #save password/create user
        render json: user
        #send user back
    end 


    private 

    def user_params
        params.permit(:username, :password)
    end 
end
