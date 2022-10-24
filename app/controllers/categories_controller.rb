class CategoriesController < ApplicationController
    def index
        category = Category.all
        render json: category
    end

    def show
        category = Category.find_by(id: params[:id])
        render json: category
    end
end
