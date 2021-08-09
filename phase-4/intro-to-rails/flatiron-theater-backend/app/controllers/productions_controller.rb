class ProductionsController < ApplicationController
    # get '/productions' do 
    #     productions = Production.all
    #     productions.to_json
    # end 
    def index
        productions = Production.all
        render json: productions
    end 

    def show
        production = Production.find(params[:id])
        render json:production
    end 

    def create
        production = Production.create(production_params)
        render json:production
    end 

    private

    def production_params
        params.require(:production).permit(:title, :genera, :description, :budget, :image, :director, :artistic_director, :ongoing)
    end 

end
