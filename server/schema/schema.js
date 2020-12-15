const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;


const FanficType = new GraphQLObjectType({
    name: 'Fanfic',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        author: { type: GraphQLString },
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        fanfic: {
            type: FanficType,
            args: {id:{type: GraphQLString}},
            resolve(parent, args) {
    
            }
        },
    }
});


module.exports = new GraphQLSchema({
    query: Query,
});

