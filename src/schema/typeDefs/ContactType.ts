import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const ContactType = new GraphQLObjectType({
	name: "Contact",
	fields: {
		id: {type: GraphQLID},
		name: {type: GraphQLString},
		email: {type: GraphQLString},
		description: {type: GraphQLString},
		posting_date: {type: GraphQLString},
	}
})
