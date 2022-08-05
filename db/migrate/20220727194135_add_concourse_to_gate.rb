class AddConcourseToGate < ActiveRecord::Migration[6.1]
  def change
    add_reference :gates, :concourse
  end
end
