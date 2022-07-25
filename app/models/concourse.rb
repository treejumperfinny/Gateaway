class Concourse < ApplicationRecord
    belongs_to :airport
    has_many :bathrooms
    has_many :concessions
    has_many :gates
end
