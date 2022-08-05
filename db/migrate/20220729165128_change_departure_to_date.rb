class ChangeDepartureToDate < ActiveRecord::Migration[6.1]
  def change
    change_column :flights, :departure_date, :date
  end
end
