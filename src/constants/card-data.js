import { v4 } from 'uuid';

export const BIG_CARDS = [
	{
		id: v4(),
		icon: '/icon-facebook.svg',
		user: '@nathanf',
		number: 1987,
		category: 'Followers',
		positive: true,
		numberToday: 12,
		textToday: 'Today'
	},
	{
		id: v4(),
		icon: '/icon-twitter.svg',
		user: '@nathanf',
		number: 1044,
		category: 'Followers',
		positive: true,
		numberToday: 99,
		textToday: 'Today'
	},
	{
		id: v4(),
		icon: '/icon-instagram.svg',
		user: '@nathanf',
		number: 11000,
		category: 'Followers',
		positive: true,
		numberToday: 1099,
		textToday: 'Today'
	},
	{
		id: v4(),
		icon: '/icon-youtube.svg',
		user: '@nathanf',
		number: 8239,
		category: 'Subscribers',
		positive: false,
		numberToday: 144,
		textToday: 'Today'
	}
];
