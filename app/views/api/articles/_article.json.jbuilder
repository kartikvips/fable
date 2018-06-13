json.extract! article, :id, :title, :body, :user_id, :hook, :img_url
json.user_firstname article.user.firstname
json.user_lastname article.user.lastname
json.month article.created_at.month
json.day article.created_at.day
json.userImgUrl article.user.img_url