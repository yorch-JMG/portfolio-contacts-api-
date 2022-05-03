import {GraphQLList, GraphQLID} from 'graphql';
import {Contacts} from '../../entities/Contacts';
import {ContactType} from '../typeDefs/ContactType';

export const GET_ALL_CONTACTS = {
  type: new GraphQLList(ContactType),
  async resolve() {
    return await Contacts.find();
  },
};

export const GET_CONTACT = {
  type: ContactType,
  args: {
    id: {type: GraphQLID},
  },
  async resolve(_: any, args: any) {
		const {id} = args
    return await Contacts.findOneBy({id});
  },
};
