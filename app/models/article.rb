class Article < ApplicationRecord
    valdiates :title, :body, :user_id, presence: true
    validates :title, uniqueness: true 

    belongs_to :user

    

end
