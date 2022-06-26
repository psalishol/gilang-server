const express = require("express"); 
const graphglHTTP = require('express-graphql');
const schema = require('./schema/schema')

const app = express();


app.use('/graphql', graphglHTTP.graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(4000, () => { //Nothing much here
    console.log("listeniing to the express port 4000");
} )