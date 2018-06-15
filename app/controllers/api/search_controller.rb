class Api::SearchController < ApplicationController

   def index
       if params[:query].present?
           @to_search = PgSearch.multisearch(params[:query])
            
            @articles = [];
            @users = [];

           if (@to_search != [])

                @to_search.each do |res|
                    @articles.push(Article.find(res.searchable_id)) if res.searchable_type == "Article"
                    @users.push(User.find(res.searchable_id)) if res.searchable_type == "User"
                end
               render :index
           end
        
       end
   end

end