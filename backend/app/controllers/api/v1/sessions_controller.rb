class Api::V1::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      token = JWT.encode({user_id: user.id}, Rails.application.secrets.secret_key_base)
      render json: {token: token, username:user.name, email:user.email, calorie_intake:user.calorie_intake}
    else
      render json: {error: 'Invalid email or password'}, status: :unprocessable_entity
    end
  end
end
