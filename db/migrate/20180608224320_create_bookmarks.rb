class CreateBookmarks < ActiveRecord::Migration[5.1]
  def change
    create_table :bookmarks do |t|
      t.string :user_id, null: false
      t.string :article_id, null: false

      t.timestamps
    end
    add_index :bookmarks, :user_id
    add_index :bookmarks, :article_id
  end
end
