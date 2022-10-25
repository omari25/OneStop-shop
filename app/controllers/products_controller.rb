class ProductsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        product = Product.all
        render json: product
    end
end
