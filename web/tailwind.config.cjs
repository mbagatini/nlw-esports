/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx',
		'./index.html'
	],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			backgroundImage: {
				galaxy: "url('/galaxy.png')",
				'nlw-gradient': "linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)",
				'game-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)"
			},
			keyframes: {
				'slide-in': {
					from: { transform: 'translateX(calc(100% + 24px))' },
					to: { transform: 'translateX(0)' },
				},
				'swipe-out': {
					from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
					to: { transform: 'translateX(calc(100% + 24px))' },
				},
				hide: {
					'0%': { opacity: 1 },
					'100%': { opacity: 0 },
				}
			},
			animation: {
				'slide-in': 'slide-in 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				'swipe-out': 'swipe-out 150ms ease-out',
				hide: 'hide 100ms ease-in'
			}
		},
	},
	plugins: [],
}
