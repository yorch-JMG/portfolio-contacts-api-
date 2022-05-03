import { GraphQLString, GraphQLBoolean, GraphQLID } from "graphql";
import { Contacts } from "../../entities/Contacts";
import { ContactType } from "../typeDefs/ContactType";

export const CREATE_CONTACT = {
	type: ContactType,
	args: {
		name: {type: GraphQLString},
		email: {type: GraphQLString},
		description: {type: GraphQLString},
	},
	async resolve(_:any, args: any) {
		const posting_date = new Date().toJSON().slice(0, 10)
		const {name, email, description} = args
		const result = await Contacts.insert({
			name,
			email,
			description,
			posting_date
		})
		return {...args, id: result.identifiers[0].id, posting_date}
	}
	
}

export const DELETE_CONTACT = {
	type: GraphQLBoolean,
	args: {
		id: {type: GraphQLID}
	},
	async resolve(_:any, args: any) {
		const {id} = args
		const result = await Contacts.delete(id)
		if (result.affected === 0) return false
		return true
	}
	
}
