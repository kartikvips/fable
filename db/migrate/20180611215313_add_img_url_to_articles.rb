class AddImgUrlToArticles < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :img_url, :string
  end
end
