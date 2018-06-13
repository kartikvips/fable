json.extract! comment, :id, :body, :article_id, :user_id
json.user_firstname comment.user.firstname
json.user_lastname comment.user.lastname
json.user_id comment.user.id
json.comment_url comment.user.img_url
json.month comment.created_at.month
json.day comment.created_at.day