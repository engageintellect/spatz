// +page.server.ts
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { error, fail } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { createGuestBookPostSchema } from '$lib/schemas';

// FETCH AND LOAD DATA
export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/auth/login');
    }
    const res = await fetch('http://localhost:5173/api/getPosts');
		const posts = await res.json();

    return { posts };
};

// ACTIONS
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
