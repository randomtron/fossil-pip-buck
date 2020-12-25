const graphql = require('graphql');
const {GraphQLObjectType, 
       GraphQLString, 
       GraphQLSchema, 
       GraphQLID,
       GraphQLList
    } = graphql;

const Fanfics = require('../models/fanfics');
const Datatodo = require('../models/datatodo');

const FanficType = new GraphQLObjectType({
    name: 'Fanfic',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        author: { type: GraphQLString },
    }),
});

const DatatodoType = new GraphQLObjectType({
    name: 'Datatodo',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
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
        datatodo: {
            type: new GraphQLList(DatatodoType),
            resolve(parent, args) {
                return Datatodo.find({});
            },
        },
    },
});


module.exports = new GraphQLSchema({
    query: Query,
});