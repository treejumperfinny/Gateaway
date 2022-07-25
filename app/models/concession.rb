class Concession < ApplicationRecord
    belongs_to :concourse
    has_many :gates
end
