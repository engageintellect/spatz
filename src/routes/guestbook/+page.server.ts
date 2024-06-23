// +page.server.ts
import type { PageServerLoad } from './$types';

// FETCH AND LOAD DATA
export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/auth/login');
    }
    const posts = await fetchPostsData(locals);
    const users = await fetchUsersData(locals);
    return { posts, users };
};

const fetchPostsData = async (locals: App.Locals): Promise<App.Post[]> => {
    const records = await locals.pb.collection('posts').getFullList({
        sort: '-created',
    });
    // Map RecordModel to Post
    return records.map(record => ({
        id: record.id,
        author: record.author,
        content: record.content,
        collectionId: record.collectionId,
        collectionName: record.collectionName,
        created: record.created,
        updated: record.updated
    }));
};

const fetchUsersData = async (locals: App.Locals): Promise<App.User[]> => {
    const records = await locals.pb.collection('users').getFullList({
        fields: 'id,username',
    });
    // Map RecordModel to User
    return records.map(record => ({
        id: record.id,
        username: record.username
    }));
};

// ACTIONS
import type { Actions } from './$types'
import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { createGuestBookPostSchema } from '$lib/schemas';

export const actions: Actions = {
	createPost: async ({ request, locals }) => {
		const { formData, errors } = await validateData(await request.formData(), createGuestBookPostSchema);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb.collection('posts').create(formData);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			console.log('Error: ', 'error creating post: ' + err);
			throw error(err.status, err.message);
		}

		return { success: true };

	}
};