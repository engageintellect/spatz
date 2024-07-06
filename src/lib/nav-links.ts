import { PUBLIC_POCKETBASE_URL } from "$env/static/public";	


export const navLinks = [
	{
		name: 'Home',
		href: '/',
		icon: 'material-symbols:home',
		new: false
	},

	{
		name: 'Guestbook',
		href: '/guestbook',
		icon: 'fluent-emoji-high-contrast:ledger',
		new: true
	},

	{
		name: 'AI',
		href: '/ai/chat',
		icon: 'simple-icons:openai',
		new: true
	},

	{
		name: 'Profile',
		href: '/my/settings/profile',
		icon: 'mdi-user',
		new: false
	},


	{
		name: 'Settings',
		href: '/my/settings/security',
		icon: 'mdi-gear',
		new: false
	},

	{
		name: 'PB Admin',
		href: `${PUBLIC_POCKETBASE_URL}/_/`,
		icon: 'simple-icons:pocketbase',
		new: false
	},

]