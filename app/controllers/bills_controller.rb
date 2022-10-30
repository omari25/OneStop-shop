class BillsController < ApplicationController
    # skip_before_action :authorize, only: [:create]
    
    def update
        user = User.find_by(id: params[:id])
        user.update!(user_params)
        render json: user
    end

    private

    def user_params
        params.permit(:county, :city, :address)
    end
end
