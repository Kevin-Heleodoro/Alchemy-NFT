const { ethers } = require('hardhat');

async function main() {
	// contract factory
	const ContractNFT = await ethers.getContractFactory('MyNFT');

	// start deployment and return a promise
	const DeployNFT = await ContractNFT.deploy(); // contract instance
	console.log(`Contract deployed to address: ${DeployNFT.address}`);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
