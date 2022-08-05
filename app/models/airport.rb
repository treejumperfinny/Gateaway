class Airport < ApplicationRecord
    # belongs_to :segments
    has_many :concourses
    has_many :gates, through: :concourses
    has_many :bathrooms, through: :concourses
    has_many :concessions, through: :concourses
end
