import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import {CREATE_CONTACT, DELETE_CONTACT} from './mutations/Contact';
import {GREETING} from './queries/Greeting';
import {GET_ALL_CONTACTS, GET_CONTACT} from './queries/Contact';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    greeting: GREETING,
    getAllContacts: GET_ALL_CONTACTS,
    getContact: GET_CONTACT,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createContact: CREATE_CONTACT,
    deleteContact: DELETE_CONTACT,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
