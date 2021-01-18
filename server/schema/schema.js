const graphql = require('graphql');
const { GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList
} = graphql;

const Whitelists = require('../models/whitelists');

const WhitelistsType = new GraphQLObjectType({
    name: 'Whitelists',
    fields: () => ({
        id: { type: GraphQLID },
        IMEI: { type: GraphQLString },
        IMSI: { type: GraphQLString },
        MSISDN: { type: GraphQLString },
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        whitelists: {
            type: new GraphQLList(WhitelistsType),
            resolve(parents, args){
                return Whitelists.find({})
            }
        },
    },
});


module.exports = new GraphQLSchema({
    query: Query,
});