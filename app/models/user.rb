class User < ApplicationRecord
    include PgSearch
    multisearchable :against => [:firstname, :lastname]

    validates :firstname, :lastname, :email, :password_digest, :img_url, :session_token, presence: true

    validates :email, uniqueness: true 

    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :articles
    has_many :bookmarks
    has_many :comments
    has_many :likes

    has_many :follows,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow,
    dependent: :destroy

    has_many :followings, 
    foreign_key: :followee_id,
    class_name: :Follow,
    dependent: :destroy
    


    attr_reader :password 

    after_initialize :ensure_session_token, :ensure_img_url

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user 
        user.is_password?(password) ? user : nil
    end 

    def ensure_img_url
        self.img_url ||= "https://images.unsplash.com/photo-1512988081803-9edc352397b9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4cea4ecf6b6fef597280dbf13f155ddd&auto=format&fit=crop&w=1350&q=80"
    end
    
    def ensure_session_token 
        self.session_token ||= User.generate_session_token
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def reset_session_token!
        self.session_token = User.generate_session_token 
        self.save
        self.session_token
    end 
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 
    


end
