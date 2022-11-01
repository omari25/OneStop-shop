class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create, :index]

    # def index
    #     render json: User.all
    # end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        current_user = User.find_by(id: session[:user_id])
        render json: current_user
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :phone_number, :password, :password_confirmation)
    end
end
