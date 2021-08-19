class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    def index
        cookies[:cookies_hi] ||= 'rose'
        session[:session_hi] ||= 'wold'
        render json: {cookies:cookies.to_hash, session:session}
    end 

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user 
        else
            render json: {error: ['Invalid username and/or password']}
        end 
    end 

    def destroy
        session.delete :user_id
    end 

end
