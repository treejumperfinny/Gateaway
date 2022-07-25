class User < ApplicationRecord
    has_many :flights
    has_many :segments, through: :flights

    has_secure_password

    validates_presence_of :email
    validates_uniqueness_of :email

    def authenticate(password)
        salt = password_digest[0..28]
        return nil unless BCrypt::Engine::hash_secret(password, salt) == self.password_digest
        self
    end
    
end
