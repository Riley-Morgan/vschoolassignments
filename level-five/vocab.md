# Vocab

  # Route
    ~ An event listener for http requests

  # Endpoint
    ~ "/item"  "/user"

  # Port
    ~ localhost:9000/


# Nodemon
 ~ npm install -g nodemon
 ~ start server with nodemon for server to auto restart after a change

# Intro to REST API architecture
 
  # REST
    - Representational State Transfer

  # Resource
    - a single item (object) in a database
    /user

  # Collection
    - a collection of similar items in a database
    /users

  # Base (root) URL
    -http://amazon.com

  # API Endpoint
    - http://amazon.com/movies

  # Parameters
    - /movies/:movieId

  # Query (query string)
    - /movies?genre=action&year=1999

  # Client
    - frontend

  # Server
    - intermediary

  # Request Method
    - CRUD - GET POST PUT DELETE

# Middleware
    - a function that fires on the inbetween
    - app.use("/", express.json()) <-- looks for a request body, and turns it into 'req.body'

# Request body (req.body)
    -