class AddConcorseToAirport < ActiveRecord::Migration[6.1]
  def change
    add_reference :concourses, :airport
  end
end
