## What is REST?!
- API Schema
- Standardize API endpoints and Schema
- REpresentational State Transfer

## URL Schema
- URL is a more specific version of URI
- that means that everything on web has a unique locaiton (URL)
Example:
facebook.com/users/4

users post:
facebook.com/users/4/posts
facebook.com/user/4/likes
/users/4/friends



## Verbs
GET  - get something
POST  - create something
PUT - Update something
PATCH - update a little bit
DELETE - Delete somethings


## Verbs and URL Schema

DELETE /user/4


## Not ReSTFul
- wonky URL Schema & verb Usage
 - Example:
    good - GET /user/4/posts
    bad - POST /post

- Endpoints are not idempotent
   - good - GET /game/score/user/6
        - only returns the score

   - bad - GET /game/score/user/6
        - returns the score
        - sets/update the score
