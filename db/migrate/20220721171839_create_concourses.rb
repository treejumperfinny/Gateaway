class CreateConcourses < ActiveRecord::Migration[6.1]
  def change
    create_table :concourses do |t|
      t.string :name
      t.integer :x_coord
      t.integer :y_coord
      t.string :cardinal_direction

      t.timestamps
    end
  end
end
