class CategoriesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index
        category = Category.all
        render json: category
    end

    def show
        category = Category.find_by(id: params[:id])
        render json: category
    end
end
