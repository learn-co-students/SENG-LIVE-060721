class UsersController < ApplicationController
    wrap_parameters format: []
    def create
        #hash password
        #validations
        user = User.create(user_params)
        #save password/create user
        render json: user
        #send user back
    end 

    def login
        user = User.find_by(username:user_params[:username])
        if(user && user.authenticate(user_params[:password]))
            render json: user
        else 
            render json: {error: ['incorrect user and/or password']}
        end 
    end 

    private 

    def user_params
        params.permit(:username, :password)
    end 
end
