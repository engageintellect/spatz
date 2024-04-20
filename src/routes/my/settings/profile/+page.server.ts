/* eslint-disable @typescript-eslint/no-explicit-any */
import { error, fail, redirect } from '@sveltejs/kit';
import { updateProfileSchema } from '$lib/schemas';
import { validateData } from '$lib/utils';
import { serialize } from 'object-to-formdata';

export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}
};

export const actions = {
	updateProfile: async ({ request, locals }) => {
		const body = await request.formData();
		const userAvatar = body.get('avatar');

		if (userAvatar instanceof File && userAvatar.size === 0) {
			body.delete('avatar');
		}
		const { formData, errors } = await validateData(body, updateProfileSchema);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}


		try {
			await locals.pb.collection('users').getFirstListItem(`username = "${formData.username}"`);
		} catch (err: any) {
			if (err.status === 404) {
				try {
			const { name, job_title, avatar } = await locals.pb
						.collection('users')
				.update(locals?.user?.id, serialize(formData));
				if (locals?.user) {
					locals.user.name = name;
					locals.user.job_title = job_title;
					locals.user.avatar = avatar;
				}
				} catch (err: any) {
					console.log('Error: ', err);
					throw error(err.status, err.message);
				}
			}
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		return {
			success: true
		};





	}
};