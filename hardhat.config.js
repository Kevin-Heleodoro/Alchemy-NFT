/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
	solidity: '0.7.3',
	// {
	// compilers: [
	// 	{
	// 		version: '0.7.3',
	// 	},
	// 	{
	// 		version: '0.8.13',
	// 	},
	// ],
	// },
	defaultNetwork: 'ropsten',
	networks: {
		hardhat: {},
		ropsten: {
			url: API_URL,
			accounts: [`0x${PRIVATE_KEY}`],
		},
	},
};
