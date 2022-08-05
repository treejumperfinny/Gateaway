class FixLatLong < ActiveRecord::Migration[6.1]
  def change
    change_column :bathrooms, :x_coord, :decimal
    change_column :bathrooms, :y_coord, :decimal
    change_column :concourses, :x_coord, :decimal
    change_column :concourses, :y_coord, :decimal
    change_column :concessions, :x_coord, :decimal
    change_column :concessions, :y_coord, :decimal
    change_column :gates, :x_coord, :decimal
    change_column :gates, :y_coord, :decimal
  end
end
