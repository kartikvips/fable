json.extract! @user, :id, :firstname, :lastname, :img_url
json.month @user.created_at.month
json.year @user.created_at.year
json.set! :articles do
    json.array! @user.articles do |article|
        json.extract! article, :id, :title, :hook, :img_url
        json.month article.created_at.month
        json.day article.created_at.day
    end 
end