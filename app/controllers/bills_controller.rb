class BillsController < ApplicationController
    # skip_before_action :authorize, only: [:create]
    
    def create
        bill = User.create!(user_params)
        render json: bill
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :phone_number, :county, :city, :address)
    end
end
