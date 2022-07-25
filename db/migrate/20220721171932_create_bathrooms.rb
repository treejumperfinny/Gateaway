class CreateBathrooms < ActiveRecord::Migration[6.1]
  def change
    create_table :bathrooms do |t|
      t.string :name
      t.text :location
      t.integer :x_coord
      t.integer :y_coord

      t.timestamps
    end
  end
end
