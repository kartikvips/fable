class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :article_id, null: false
      t.integer :user_id, null: false
      t.datetime :publish_date, null: false

      t.timestamps
    end
    add_index :comments, :article_id
    add_index :comments, :user_id
    add_index :comments, :publish_date
  end
end
