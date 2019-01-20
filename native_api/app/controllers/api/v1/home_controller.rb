class Api::V1::HomeController < Api::V1::BaseController
  def index
    @appointments = Appointment.all
    @users = User.all
    render json: @appointments,@users
  end
  
end
