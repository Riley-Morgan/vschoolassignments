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

# UUID
    - creates unique ID
    - npm install uuid

# Express Router
    -enables to modularize our routes in express

# Modular file organization
    - 

# URL Parameters (parameter is a placeholder for data the FE can send to the BE)

  # Parts of a URL
  * Base - http:// amazon.com
  * Endpoint - http://amazon.com/images
  * Parameter - http://amazon.com/images/6835f35
  * Query - 

  # Parameters (req.params)

# URL Queries

  # Query string - (typically to filer results)
  * Begins with the "?"
  * Built of key=value pairs
  * Multiple queries separated by the "&"

# Middleware

  # what is it?
  * app.use() <- leave () empty to fire on every request
    1. (optional) - Mount Path ( endpoint )
    2. Callback function - recieves the request, response objects, also the 'next' function

  # the "next" function
  * go look for the next piece of middleware to run
  * Movies on the the next middleware in line on our server