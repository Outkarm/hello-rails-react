class Api::V1::GreetingsController < ApplicationController
  def index
    random_greeting
  end

  def random_greeting
    random_message = Message.order(Arel.sql('RANDOM()')).first
    render json: { greeting: random_message&.message }
  end
end
