# @to_search.each do |result|
#  json.set! result.id do
#    json.extract! result, :id, :content, :searchable_type, :searchable_id
#  end
# end
# if(@users.length>0) 
    @users.each do |user|
        json.users do 
            json.set! user.id do 
                json.extract! user, :id, :firstname, :lastname, :img_url
            end
        end
    end
# end

# if(@articles.length>0) 
    @articles.each do |article|
        json.articles do 
            json.set! article.id do 
                json.extract! article, :id, :title, :img_url, :hook
                json.user_firstname article.user.firstname
                json.user_lastname article.user.lastname
                json.month article.created_at.month
                json.day article.created_at.day
            end
        end
    end
# end

