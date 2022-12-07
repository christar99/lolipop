/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['ddragon.leagueoflegends.com']
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
};
