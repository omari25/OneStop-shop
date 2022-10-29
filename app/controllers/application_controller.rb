class ApplicationController < ActionController::Base
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # before_action :authorize
    skip_before_action :verify_authenticity_token
    
    private
  
    # def authorize
    #   @current_user = User.find_by(id: session[:user_id])
    #   render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    # end
  
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
