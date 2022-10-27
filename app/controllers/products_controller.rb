class ProductsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        product = Product.all
        render json: product
    end

    def show
        product = Product.find_by(id: params[:id])
        render json: product
    end
    
end
