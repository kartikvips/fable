class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :article_id, null: false

      t.timestamps
    end
    add_index :likes, :user_id
    add_index :likes, :article_id
    add_index :likes, [:user_id, :article_id], unique: true
  end
end
