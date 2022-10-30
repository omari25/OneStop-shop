class BillsController < ApplicationController
    # skip_before_action :authorize, only: [:create]
    
    def create
        bill = User.update!(user_params)
        render json: bill
    end

    private

    def user_params
        params.permit(:county, :city, :address)
    end
end
