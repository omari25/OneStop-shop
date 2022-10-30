class BillsController < ApplicationController
    # skip_before_action :authorize, only: [:create]
    
    def update
        bill = User.update!(user_params)
        render json: bill
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :phone_number, :county, :city, :address)
    end
end
