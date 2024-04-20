import type { Actions } from './$types'
import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { loginUserSchema } from '$lib/schemas';

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const { formData, errors } = await validateData(await request.formData(), loginUserSchema);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
			if (!locals.pb?.authStore?.model) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/');
	}
};