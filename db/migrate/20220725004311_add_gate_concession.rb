class AddGateConcession < ActiveRecord::Migration[6.1]
  def change
    create_join_table :gates, :concessions
  end
end
