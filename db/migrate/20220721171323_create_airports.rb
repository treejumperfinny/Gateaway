class CreateAirports < ActiveRecord::Migration[6.1]
  def change
    create_table :airports do |t|
      t.string :name
      t.string :code
      t.string :city
      t.string :state
      t.string :timezone

      t.timestamps
    end
  end
end
