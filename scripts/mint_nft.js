require('dotenv').config();
const { API_URL, PRIVATE_KEY, PUBLIC_KEY } = process.env;

const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const web3 = createAlchemyWeb3(API_URL);

const contract = require('../artifacts/contracts/MyNFT.sol/MyNFT.json');
const contractAddress = '0xD16B762142289953BA27DaDd0C0dBd3F8993351c';
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(tokenURI) {
	const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); // gets the latest nonce

	const tx = {
		from: PUBLIC_KEY,
		to: contractAddress,
		nonce: nonce,
		gas: 500000,
		maxPriorityFeePerGas: 2999999987,
		data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
	};

	const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
	const txReceipt = await web3.eth.sendSignedTransaction(
		signedTx.rawTransaction
	);

	console.log(`Transaction Receipt: ${JSON.stringify(txReceipt)}`);
}

mintNFT(
	'https://gateway.pinata.cloud/ipfs/QmfDKiSWVAPZQqM5gGF3ZTrHv9LqVmXyEaftHggtADQNWa'
);
