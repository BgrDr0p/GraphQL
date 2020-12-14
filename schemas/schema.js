const graphQL = require('graphql');
const lodash = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphQL

const utilisateurs = [
    {id: '0', prenom: 'BgrDr0p', age: 23},
    {id: '1', prenom: 'BgrDr1p', age:32}
]
const UserType = new GraphQLObjectType({
    name : 'Utilisateur',
    fields : {
        id : { type: GraphQLString},
        prenom : { type: GraphQLString},
        age : { type: GraphQLInt}

    }
});

const rootQuery = new GraphQLObjectType({

    name : 'RootQuery',
    fields : {
        user : { 
            type: UserType,
            args: {id : { type: GraphQLString}},
            resolve(parentValue,args){
                lodash.find(utilisateurs,{id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query : rootQuery
})

