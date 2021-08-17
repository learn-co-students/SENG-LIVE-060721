class CrewmembersController < ApplicationController
    wrap_parameters format: []
    def index
        crewmembers = Crewmember.all
        render json: crewmembers
    end 

    def create
        crewmember = Crewmember.create(crewmember_params)
        if crewmember.valid?
            render json: crewmember
        else 
            render json: {error: crewmember.errors.full_messages}
        end 
    end 

    private

    def crewmember_params
        params.permit(:name, :job_title, :salary, :production_id)
    end 

end
