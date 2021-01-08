const graphql = require('graphql');
const { GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList
} = graphql;

const Characters = require('../models/characters');
const Locations = require('../models/locations');

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

const LocationsType = new GraphQLObjectType({
    name: 'Locations',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
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
        locations: {
            type: new GraphQLList(LocationsType),
            resolve(parent, args){
                return Locations.find({})
            },
        },
    },
});


module.exports = new GraphQLSchema({
    query: Query,
});