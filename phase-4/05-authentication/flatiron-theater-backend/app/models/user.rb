class User < ApplicationRecord
    validates :username, presence: true, uniqueness:true
    has_secure_password
    # def password=(value)
    #     self.password_digest = BCrypt::Password.create(user_params[:password])
    # end 

    # def authenticate(password)
    #     BCrypt::Password.new(self.password_digest) == password
    # end 
end
