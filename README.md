## This app is the Express/Node.js backend for Askybois.

## Setup

1. Install dependencies:

    `npm install`

2. Set up database:

    You will need PostgreSQL installed. 
    Create a database called `askybois_dev` with the `postgres` user having permissions.

    
    If you do not have the knex cli installed, install it with 

    `npm install knex -g`

    Then run

    `knex migrate:latest`
    `knex seed:run`
