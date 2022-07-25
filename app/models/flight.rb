class Flight < ApplicationRecord
    belongs_to :user
    has_many :segments
    has_many :gates, through: :segments
end
