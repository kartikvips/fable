class Article < ApplicationRecord
    include PgSearch
    multisearchable :against => [:title, :body, :hook]

    validates :title, :body, :user_id, :hook, :img_url, presence: true
    validates :title, uniqueness: true 

    belongs_to :user



end
