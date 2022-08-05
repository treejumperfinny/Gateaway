class Gate < ApplicationRecord
    belongs_to :concourse
    has_and_belongs_to_many :concessions
    has_and_belongs_to_many  :bathrooms
end
