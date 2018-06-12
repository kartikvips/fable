class AddBodyColumnToCommentsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :body, :string, null: false, default: 0
    change_column :comments, :body, :string, default:nil

  end
end
