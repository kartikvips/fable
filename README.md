# fable

[Live Demo](https://fable-one.herokuapp.com/#/)

fable is a website that shares stories from the depths of the universe, based on Medium. It uses Rails/PostgreSQL backend with React.js and Redux for the frontend. 

Project was built over a ten day period and features will be added in the future. 

## Introduction
* Features
* Technologies
* Challenges
* Snippets


## Features
* Login: Secure frontend to backend user authentication using BCrypt
* Fables: Create and edit their own fables using a Quill-enabled rich text editor
* Home Page: Updates to show new fables
* Show Page: Fable show page
* Comments: Post comments in fables 
* Search: Search query through users * and fables 
* User profile page that displays all fables written


### Login 

Use modal to display login and create new user container

![Sign In ](https://raw.githubusercontent.com/kartikvips/fable/master/docs/pics/Screen%20Shot%202018-06-15%20at%203.01.56%20PM.png)

### Fables

Write fables using a rich text editor

![Create New Fable](https://raw.githubusercontent.com/kartikvips/fable/master/docs/pics/Screen%20Shot%202018-06-15%20at%203.04.33%20PM.png)

### Home Page

Use flex and separate react components to render home page

![Home Page](https://raw.githubusercontent.com/kartikvips/fable/master/docs/pics/Screen%20Shot%202018-06-15%20at%203.02.34%20PM.png)

### Show Page

Display stories in a reader friendly manner based on current Medium show

![Fable show](https://raw.githubusercontent.com/kartikvips/fable/master/docs/pics/Screen%20Shot%202018-06-15%20at%203.03.35%20PM.png)

### Comments

Post comments under fables using rich text editor

![Comments](https://raw.githubusercontent.com/kartikvips/fable/master/docs/pics/Screen%20Shot%202018-06-15%20at%203.04.01%20PM.png)

### Search

Find fables and users through the search feature

![Search](https://github.com/kartikvips/fable/blob/master/docs/pics/Screen%20Shot%202018-06-15%20at%203.03.02%20PM.png?raw=true)

### Profile

Check user profile page for authored fables 

![Profile](https://github.com/kartikvips/fable/blob/master/docs/pics/Screen%20Shot%202018-06-15%20at%203.05.05%20PM.png?raw=true)

## Technologies

### Ruby on Rails

Process of developing backend using Ruby on Rails with PostgreSQL
* Generate migrations to setup database tables
* Create Models with validations, associations, and methods as backbone of backend
* Create controllers with proper routes to access information in backend
* Render views using JSON to send data to front end

### React.js and Redux
* Develop components and containers for various paths
* Use reducers to dispatch actions to modify global state
* Wrote jQuery ajax calls to fetch information from the rails backend

### jQuery
* Used to make calls to backend and for testing purposes

### Quill Rich Text Editor
* Incorporate technology to editor and article show pages for rich text editing

### PG Search
* Backend setup to make search queries to multiple models

### JSON/Jbuilder
* Render JSON objects to send to front end and jbuilder to convert ruby instances to javascript objects

## Challenges
* Incorporating the use of modals through react components, containers and adding a modal slice to global state
* JSON for various frontend requirements 
* Maintaining sane global state model

## Snippets

Incorporating a multi-model search. 

```ruby
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
```

Dynamically displaying stored Rich Text in React Component

```javascript
<tbody>
    <tr>
       <td dangerouslySetInnerHTML={{ __html: article.body }} />
    </tr>
</tbody>
```


