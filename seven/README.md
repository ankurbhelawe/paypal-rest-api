
# Exercise

Movie rental
Library
Shopping

- List  resources URI and HTTP method to manage the service.
- Have at least 3 resources for each services with CRUD functionality


### 1. Movie rental

| Description | HTTP method | Resource URI |
|-------------|-------------|--------------|
| List all movies | GET| /movies
| Create | POST | /movies
| Get movie by ID (Read) | GET | /movies/m-1222
| Put movie by ID (Update) | PUT | /movies/m-1222
| Delete movie by ID (Delete) | DELETE | /movies/m-1222
| Add review to movie by id | POST | /movies/{id}/reviews/{user}/review
| Add rating to movie by id | POST | /movies/{id}/ratings/{user}/rating



### 2. Library

| Description | HTTP method | Resource URI |
|-------------|-------------|--------------|
| List all books | GET| /books
| Create | POST | /books
| Get book by ID (Read) | GET | /books/b-1222
| Put book by ID (Update) | PUT | /books/b-1222
| Delete book by ID (Delete) | DELETE | /book/b-1222
| Add review to book by id | POST | /books/{id}/reviews/{user}/review
| Add rating to book by id | POST | /books/{id}/ratings/{user}/rating

### 3. Shopping 

| Description | HTTP method | Resource URI |
|-------------|-------------|--------------|
| List all items | GET| /items
| Create | POST | /items
| Get item by ID (Read) | GET | /items/i-1222
| Put items by ID (Update) | PUT | /items/i-1222
| Delete item by ID (Delete) | DELETE | /items/i-1222
| Add review to item by id | POST | /items/{id}/review/{user}/review
| Add rating to item by id | POST | /items/{id}/rating/{user}/rating