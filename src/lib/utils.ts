/* eslint-disable @typescript-eslint/no-explicit-any */
import { PUBLIC_POCKETBASE_URL } from "$env/static/public";


export const getImageURL = (collectionId: unknown, recordId: unknown, fileName: unknown, size = '0x0') => {
	return `${PUBLIC_POCKETBASE_URL}/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};



export const validateData = async (formData:any, schema:any) => {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err:any) {
		console.log('Error: ', err);
		const errors = err.flatten();
		return {
			formData: body,
			errors
		};
	}
};