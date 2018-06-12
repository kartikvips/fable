@articles.each do |article|
  json.set! article.id do
    json.extract! article, :id, :title, :user_id, :hook, :img_url
    json.user_firstname article.user.firstname
    json.user_lastname article.user.lastname
    json.month article.updated_at.month
    json.day article.updated_at.day
  end
end