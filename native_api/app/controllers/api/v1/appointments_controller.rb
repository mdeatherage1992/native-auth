class Api::V1::AppointmentsController < Api::V1::BaseController
  def index
    @appointments = Appointment.all
    render json: @appointments
  end
end
