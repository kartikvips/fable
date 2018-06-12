class Comment < ApplicationRecord
    validates :article_id, :user_id, :publish_date, presence:true

    belongs_to :user 
    belongs_to :article 

end
