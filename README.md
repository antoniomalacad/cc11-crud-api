# API Project

CRUD API Project: This was created during my time as a student at Code Chrysalis.

The goal of the project was to create a virtual coffee shop that utilized CRUD API to process customer requests.

- Placing an order utilizes a Create API request to the orders database
- Accessing the menu uses a Read API request to the menu database
- Processing the order uses the Update API request in the orders database
- Cancelling orders uses the Delete API request in the orders database

# Set Up

1. Clone the repo:

```
git clone https://github.com/antoniomalacad/cc11-crud-api.git
```

2. Install packages:

```
yarn
```

3. Build the Database and Seed it:

```
yarn migrate && yarn seed
```

4. Start the server:

```
yarn start
```

# Implementation

Server is hosted at:

```
localhost:3000
```

# Work in Progress

Implementing order placements to provide a post request to the orders database.
