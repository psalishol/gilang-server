const {  
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLInt,
    GraphQLSchema } = require("graphql");

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Documentation for the user',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
    })
})

const RootQueryType = new GraphQLObjectType({
    name: "RootQueryType",
    description: "query documentation",
    fields: {
       user: {
        type: UserType,
        args: {
            id: {type: GraphQLString}
        },

        resolve(parent, args){}
       }
    },

    
})

module.exports = new GraphQLSchema({
    query: RootQueryType
})