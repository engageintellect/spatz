import { json } from "@sveltejs/kit"

export async function GET({ locals }) {
	const posts = await locals.pb.collection('posts').getFullList({
			sort: '-created',
	});

	const users = await locals.pb.collection('users').getFullList({
			fields: 'id,username',
	});


	// return json(records)
	return json(posts.map(post => ({
			id: post.id,
			author: post.author,
			content: post.content,
			collectionId: post.collectionId,
			collectionName: post.collectionName,
			created: post.created,
			updated: post.updated,
			username: users.find(user => user.id === post.author)?.username
	})));
}
