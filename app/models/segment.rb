class Segment < ApplicationRecord
    belongs_to :flight
    has_many :airports
    has_many :concourses, through: :airports
    has_many :gates, through: :concourses
    has_many :bathrooms, through: :concourses
    has_many :concessions, through: :concourses
end
