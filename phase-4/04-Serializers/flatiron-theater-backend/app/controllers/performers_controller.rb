class PerformersController < ApplicationController
    wrap_parameters format: []
    def index
        performers = Performer.all
        render json: performers
    end 

    def create
        performer = Performer.create(performer_params)
        if performer.valid?
            render json: performer, status: :created
        else 
            render json: {error: performer.errors.full_messages}
        end 
    end 

    private

    def performer_params
        params.permit(:name, :headshot)
    end 
end
