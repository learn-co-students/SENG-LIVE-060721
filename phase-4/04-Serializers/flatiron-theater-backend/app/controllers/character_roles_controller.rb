class CharacterRolesController < ApplicationController
    wrap_parameters format: []
    def create
       cr = CharacterRole.create(character_roles_params)
       if cr.valid?
        render json: cr
       else
        render json: {error: cr.errors.full_messages } 
       end 
    end 

    private

    def character_roles_params
        params.permit(:character_name, :performer_id, :production_id)
    end 

end
