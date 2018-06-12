class CreateFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :follows do |t|
      t.string :follower_id, null: false
      t.string :followee_id, null: false

      t.timestamps
    end
    add_index :follows, :follower_id 
    add_index :follows, :followee_id 
  end
end
