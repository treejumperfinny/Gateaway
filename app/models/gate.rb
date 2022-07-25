class Gate < ApplicationRecord
    belongs_to :concourse
    has_many :concessions
end
