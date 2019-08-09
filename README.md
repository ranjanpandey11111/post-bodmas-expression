# Nodejs, Express 4, MongoDB + Mongoose API boilerplate

Supports either a locally-running MongoDB or MongoDB as-a-service

`add expression` post request to http://localhost:3000/bodmas-expression with request object is
 {
     "expression": "(1 + 3 * (4 - 2) - 15 / 5)"
  }
  resonse will be 
.


## Setup
1. Install [mongoDB](http://docs.mongodb.org/manual/installation/) OR create an account with either [MongoLab](https://mongolab.com/) or [Compose MongoDB](https://www.compose.io/mongodb/)
1. Install dependencies: `npm install`

## Running
1. Run `npm start`
1. Specify Mongo Settings (read below). Settings in `app/config.js`
1. Open <http://localhost:3000/>
1. If you see the `Hi` message and no db connection errors, it works!

## Sample usage
1. Comment out the specified lines in `app/index.js` to populate your database with a `crud` table with the sample json data in `data/crud.json`

2. Run `npm start` and verify that tables have been populated with:
  
## Specify MongoDB Settings
You may connect to [MongoLab](https://mongolab.com/), [Compose MongoDB](https://www.compose.io/mongodb/) or a locally-running [MongoDB](http://docs.mongodb.org/manual/tutorial/getting-started-with-the-mongo-shell/)
set your db url in `app/config.js` or set it into envoronment variables

Environment variable `MONGOLAB_URI` for MongoLab, `COMPOSEMONGO_URL` for Compose MongoDB:
```sh
# To connect to MongoLab
MONGOLAB_URI = mongodb://<username>:<password>@<host>.mongolab.com:<port>/<databasename>

# To connect locally
MONGOLAB_URI =  mongodb://127.0.0.1:27017/bodmas
```