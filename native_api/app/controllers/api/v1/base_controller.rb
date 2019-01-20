class Api::V1::BaseController <  ActionController::Base
  respond_to :json
  skip_before_action :verify_authenticity_token
end
