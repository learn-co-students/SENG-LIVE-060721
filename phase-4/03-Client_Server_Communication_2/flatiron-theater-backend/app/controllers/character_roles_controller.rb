class CharacterRolesController < ApplicationController
    wrap_parameters format: []
    def create
       cr = CharacterRole.create(character_roles_params)
       render json: cr
    end 

    private

    def character_roles_params
        params.permit(:character_name, :performer_id, :production_id)
    end 

end
