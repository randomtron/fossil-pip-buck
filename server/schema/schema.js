const graphql = require('graphql');
const { GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList
} = graphql;

const Fanfics = require('../models/fanfics');
const Datatodo = require('../models/datatodo');
const Characters = require('../models/characters');

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


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addDatatodo: {
            type: DatatodoType,
            args: {
                name: { type: GraphQLString },
            },
            resolve(parent, args) {
                const datatodo = new Datatodo({
                    name: args.name
                });
                return datatodo.save();
            },
        },
        deleteDatatodo: {
            type: DatatodoType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Datatodo.findByIdAndRemove(args.id);
            },
        },
        updateDatatodo: {
            type: DatatodoType,
            args: {
                id: { type: GraphQLID },
                name: { type: GraphQLString },
            },
            resolve(parent, args) {
                return Datatodo.findByIdAndUpdate(
                    args.id,
                    { $set: { name: args.name } },
                    { new: true }
                );
            },
        },
    },
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        fanfic: {
            type: FanficType,
            args: { id: { type: GraphQLID } },
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
        datatodos: {
            type: new GraphQLList(DatatodoType),
            resolve(parent, args) {
                return Datatodo.find({});
            },
        },
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
    mutation: Mutation,
});