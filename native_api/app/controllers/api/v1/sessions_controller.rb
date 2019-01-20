class Api::V1::SessionsController < Api::V1::BaseController

  def create
    @appointments = Appointment.all
    @session = Session.new
    respond_to do |format|
     format.html { redirect_to :root, notice: 'Session was successfully created.' }
     format.json
   end
  end
  def new
  end
  def show
  end
  def index
  end

  private

end
