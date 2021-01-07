const graphql = require('graphql');
const { GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList
} = graphql;

const Characters = require('../models/characters');

const CharactersType = new GraphQLObjectType({
    name: 'Characters',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        gender: { type: GraphQLString },
        race: { type: GraphQLString },
        desc: { type: GraphQLString },
    }),
});


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        characters: {
            type: new GraphQLList(CharactersType),
            resolve(parent, args){
                return Characters.find({})
            },
        },
    },
});


module.exports = new GraphQLSchema({
    query: Query,
});