class CreateSegments < ActiveRecord::Migration[6.1]
  def change
    create_table :segments do |t|
      t.string :airline
      t.string :flight_number
      t.datetime :departure_time
      t.string :departure_gate
      t.string :departure_time_zone
      t.datetime :arrival_time
      t.string :arrival_gate
      t.string :arrival_time_zone
      t.datetime :time_at_destination
      t.datetime :time_at_origin
      t.integer :travel_time
      
      t.timestamps
    end
  end
end
