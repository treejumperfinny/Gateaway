class AddBathroomGates < ActiveRecord::Migration[6.1]
  def change
    create_join_table :gates, :bathrooms
  end
end
