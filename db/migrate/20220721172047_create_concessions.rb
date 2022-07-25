class CreateConcessions < ActiveRecord::Migration[6.1]
  def change
    create_table :concessions do |t|
      t.string :name
      t.integer :x_coord
      t.integer :y_coord
      t.string :opening_time
      t.string :closing_time
      t.boolean :open

      t.timestamps
    end
  end
end
