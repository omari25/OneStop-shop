class BillsController < ApplicationController
    # skip_before_action :authorize, only: [:create]
    
    def create
        bill = User.upodate!(user_params)
        render json: bill
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :phone_number, :county, :city, :address)
    end
end
