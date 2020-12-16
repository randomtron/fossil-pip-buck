const graphql = require('graphql');
const {GraphQLObjectType, 
       GraphQLString, 
       GraphQLSchema, 
       GraphQLID,
       GraphQLList
    } = graphql;

const Fanfics = require('../models/fanfics');

const FanficType = new GraphQLObjectType({
    name: 'Fanfic',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        author: { type: GraphQLString },
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        fanfic: {
            type: FanficType,
            args: {id:{type: GraphQLID}},
            resolve(parent, args) {
                return Fanfics.findById(args.id);
            },
        },
        fanfics: {
            type: new GraphQLList(FanficType),
            resolve(parent, args) {
                return Fanfics.find({});
            },
        },
    },
});


module.exports = new GraphQLSchema({
    query: Query,
});