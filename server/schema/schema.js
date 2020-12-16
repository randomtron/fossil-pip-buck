const graphql = require('graphql');

const {GraphQLObjectType, 
       GraphQLString, 
       GraphQLSchema, 
       GraphQLID,
       GraphQLList
    } = graphql;

const fanfics = [
    { id: '1', name: 'Fallout: Equestria', author: 'Kkat'},
    { id: '2', name: 'Fallout Equestria: Project Horizon', author: 'Somber'},
    { id: '3', name: 'Fallout Equestria: The Fossil', author: 'Lucky Ticket'},
];


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
                return fanfics.find(fanfic => fanfic.id == args.id);
            },
        },
        fanfics: {
            type: new GraphQLList(FanficType),
            resolve(parent, args) {
                return fanfics;
            },
        },
    },
});


module.exports = new GraphQLSchema({
    query: Query,
});