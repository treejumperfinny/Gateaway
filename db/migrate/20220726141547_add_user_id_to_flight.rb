class AddUserIdToFlight < ActiveRecord::Migration[6.1]
  def change    
    add_column :flights, :user_id, :integer
  end
end
