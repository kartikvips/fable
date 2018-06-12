class AddImgUrlToArticlesnotComments < ActiveRecord::Migration[5.1]
  def change
     add_column :articles, :img_url, :string
  end
end
