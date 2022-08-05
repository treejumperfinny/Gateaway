class Concession < ApplicationRecord
  
    has_and_belongs_to_many :gates
end
