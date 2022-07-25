class CreateFlights < ActiveRecord::Migration[6.1]
  def change
    create_table :flights do |t|
      t.string :airline
      t.string :flight_number

      t.timestamps
    end
  end
end
