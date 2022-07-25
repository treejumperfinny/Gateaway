class CreateGates < ActiveRecord::Migration[6.1]
  def change
    create_table :gates do |t|
      t.string :name
      t.integer :x_coord
      t.integer :y_coord
      t.string :timezone

      t.timestamps
    end
  end
end
