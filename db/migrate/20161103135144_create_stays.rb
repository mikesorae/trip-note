class CreateStays < ActiveRecord::Migration[5.0]
  def up
    create_table :stays do |t|
      t.string :place
      t.timestamps
    end
  end
 
  def down
    drop_table :stays
  end
end
