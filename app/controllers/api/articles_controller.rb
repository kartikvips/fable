class Api::ArticlesController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]
  
  def index
    @articles = Article.all 
    render '/api/articles/index'
  end

  def create
    @article = Article.new(article_params)
    @article.user_id = current_user.id 
    @article.publish_date = Date.new 

    if @article.save 
      render '/api/articles/show'
    else 
      render json: @article.errors.full_messages, status: 422
    end
  end

  def show
    @article = Article.find(params[:id])
    render'/api/articles/show'
  end

  def update
    @article = Article.find(params[:id])
    if @article.update_attributes(article_params)
      render 'api/articles/show'
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def destroy
    @article.find(params[:id])
    @article.destroy 
    @articles = Article.all 
    render 'api/articles/index'
  end

  private 

  def article_params 
    params.require(:article).permit(:title, :body, :hook, :img_url)
  end
end
