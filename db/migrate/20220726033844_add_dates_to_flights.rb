class AddDatesToFlights < ActiveRecord::Migration[6.1]
  def change
    add_column :flights, :departure_date, :datetime
  end
end
