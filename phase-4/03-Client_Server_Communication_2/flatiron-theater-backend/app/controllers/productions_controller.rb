class ProductionsController < ApplicationController
    #Actions
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

    def update
        production = Production.find(params[:id])
        production.update(production_params)
        render json:production
    end 

    def destroy
        production = Production.find(params[:id])
        production.destroy
        render json: {message:'Production deleted'}
    end 

    private 

    def production_params
        byebug
        params.require(:production).permit(:title, :genre, :description, :budget, :image, :director, :artistic_director, :ongoing)
    end 


end
