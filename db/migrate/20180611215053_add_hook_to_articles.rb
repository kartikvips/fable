class AddHookToArticles < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :hook, :string, null: false, default: 0
   change_column :articles, :hook, :string, default:nil
  end
end
