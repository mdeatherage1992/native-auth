class User < ApplicationRecord
  devise :database_authenticatable, :recoverable,
          :trackable, :validatable, :registerable,
          :omniauthable

   include DeviseTokenAuth::Concerns::User
end
