import React, { useState } from "react";

import MyGroup from "./components/MyGroup.jsx";
import MyDoubleButton from "./components/MyDoubleButton.jsx";

import walletConnectFcn from "./components/hedera/walletConnect.js";

import tokenCreateFcn from "./components/hedera/tokenCreate.js";
import NFTtokenCreateFcn from "./components/hedera/NFTtokenCreate.js";

import tokenMintFcn from "./components/hedera/tokenMint.js";
import contractDeployFcn from "./components/hedera/contractDeploy.js";
import contractExecuteFcn from "./components/hedera/contractExecute.js";


import "./styles/App.css";

function App() {
	
	{/* useState command	
	  const [color, setColor] = useState("red");
	  onClick={() => setColor("blue")
	  <h1>My favorite color is {color}!</h1>
	  */}

	const [walletData, setWalletData] = useState();
	const [accountId, setAccountId] = useState();
	const [tokenId, setTokenId] = useState();
	const [NFTtokenId, setNFTTokenId] = useState();
 	const [tokenSupply, setTokenSupply] = useState(); 
	const [contractId, setContractId] = useState();

	const [connectTextSt, setConnectTextSt] = useState("🔌 Connect here...");
	const [createTextSt, setCreateTextSt] = useState("");
	const [mintTextSt, setMintTextSt] = useState("");
	const [contractTextSt, setContractTextSt] = useState();
	const [trasnferTextSt, setTransferTextSt] = useState();
	
		const [NFTTextSt, setNFTTextSt] = useState();

	const [connectLinkSt, setConnectLinkSt] = useState("");
	const [createLinkSt, setCreateLinkSt] = useState("");
	const [mintLinkSt, setMintLinkSt] = useState("");
	const [contractLinkSt, setContractLinkSt] = useState();
	const [trasnferLinkSt, setTransferLinkSt] = useState();

		const [NFTLinkSt, setNFTLinkSt] = useState(); 
	
const [fooTextSt, setfooTextSt] = useState("foo");
const [barTextSt, setbarTextSt] = useState("bar");

	async function connectWallet() {
		if (accountId !== undefined) {
			setConnectTextSt(`🔌 Account ${accountId} already connected ⚡ ✅`);
		} else {
			const wData = await walletConnectFcn();
			wData[0].pairingEvent.once((pairingData) => {
				pairingData.accountIds.forEach((id) => {
					setAccountId(id);
					console.log(`- Paired account id: ${id}`);
					setConnectTextSt(`🔌 Account ${id} connected ⚡ ✅`);
					setConnectLinkSt(`https://hashscan.io/#/testnet/account/${id}`);
				});
			});
			setWalletData(wData);
			setCreateTextSt();
		}
	}

/* NEW  NEW  NEW  NEW  */
	async function NFTtokenCreate() {
		if (NFTtokenId !== undefined) {
			setNFTTextSt(`You already have token ${NFTtokenId} ✅`);
		} else if (accountId === undefined) {
			setNFTTextSt(`🛑 (NFT) Connect a wallet first! 🛑`);  
		} else {
			setNFTTextSt(`🖐️ awaiting  NFTtokenCreateFcn... 🖐️`);  
			const [tId, supply, txIdRaw] = await NFTtokenCreateFcn(walletData, accountId);
			setNFTTokenId(tId);
			setTokenSupply(supply);
			setNFTTextSt(`✅✅Successfully created token with ID: ${tId} ✅✅`);

			setMintTextSt();
			setContractTextSt();
			setTransferTextSt();

/* 			const txId = prettify(txIdRaw); */
/* 			setNFTTextSt(`https://hashscan.io/#/testnet/transaction/${txId}`); */
		}
	}
/* NEW  NEW  NEW  NEW  */

	async function tokenCreate() {
		if (tokenId !== undefined) {
			setCreateTextSt(`You already have token ${tokenId} ✅`);
		} else if (accountId === undefined) {
			setCreateTextSt(`🛑 (FT)) Connect a wallet first! 🛑`);
		} else {
			const [tId, supply, txIdRaw] = await tokenCreateFcn(walletData, accountId);
			setTokenId(tId);
			setTokenSupply(supply);
			setCreateTextSt(`Successfully created token with ID: ${tId} ✅`);
			setMintTextSt();
			setContractTextSt();
			setTransferTextSt();
			const txId = prettify(txIdRaw);
			setCreateLinkSt(`https://hashscan.io/#/testnet/transaction/${txId}`);
		}
	}

	async function tokenMint() {
		if (tokenId === undefined) {
			setMintTextSt("🛑 (MINT) Create a token first! 🛑");
		} else {
			const [supply, txIdRaw] = await tokenMintFcn(walletData, accountId, tokenId);
			setTokenSupply(supply);
			setMintTextSt(`Supply of token ${tokenId} is ${supply}! ✅`);
			const txId = prettify(txIdRaw);
			setMintLinkSt(`https://hashscan.io/#/testnet/transaction/${txId}`);
		}
	}

	async function contractDeploy() {
		if (tokenId === undefined) {
			setContractTextSt("🛑 (DEPLOY) Create a token first! 🛑");
		} else if (contractId !== undefined) {
			setContractTextSt(`You already have contract ${contractId} ✅`);
		} else {
			const [cId, txIdRaw] = await contractDeployFcn(walletData, accountId, tokenId);
			setContractId(cId);
			setContractTextSt(`Successfully deployed smart contract with ID: ${cId} ✅`);
			setTransferTextSt();
			const txId = prettify(txIdRaw);
			setContractLinkSt(`https://hashscan.io/#/testnet/transaction/${txId}`);
		}
	}

	async function contractExecute() {
		if (tokenId === undefined || contractId === undefined) {
			setTransferTextSt("🛑 (EXECUTE) Create a token AND deploy a contract first! 🛑");
		} else {
			const txIdRaw = await contractExecuteFcn(walletData, accountId, tokenId, contractId);
			setTransferTextSt(`🎉🎉🎉 Great job! You completed the demo 🎉🎉🎉`);
			const txId = prettify(txIdRaw);
			setTransferLinkSt(`https://hashscan.io/#/testnet/transaction/${txId}`);
		}
	}
	
	async function TBD_Execute() {
		if (tokenId === undefined || contractId === undefined) {
			setTBDTextSt("🛑 TBD not found 🛑");
		} else {
			const txTBD_Raw = await TBD_ExecuteFcn(); 
			setTBDTextSt(`🎉🎉🎉 Great job! You did the TBD 🎉🎉🎉`);
		}
	}
	
	async function Clear_Messages() {
			setTransferTextSt();
			setContractTextSt();
			setMintTextSt();
			setCreateTextSt();
			setNFTTextSt();
	}
	
	async function Do_Nothing() {
		setfooTextSt("foofoo");
		setbarTextSt("barbar");
	}


	function prettify(txIdRaw) {
		const a = txIdRaw.split("@");
		const b = a[1].split(".");
		return `${a[0]}-${b[0]}-${b[1]}`;
	}

	return (
		<div className="App">
			<h1>Let's BUILD SCOTTs dapp on Hedera!</h1>
			<MyGroup
				fcn={connectWallet}
				buttonLabel={"Connect Wallet"}
				text={connectTextSt}
				link={connectLinkSt}
			/>
<p align="center">
			<MyGroup
				fcn={tokenCreate}
				buttonLabel={"Create New Token"}
				text={createTextSt}
				link={createLinkSt}
			/>
</p>
<p align="center">

			<MyGroup
				fcn={tokenMint}
				buttonLabel={"Mint 100 New Tokens"}
				text={mintTextSt}
				link={mintLinkSt}
			/>
</p>
<p align="center">
			<MyGroup
				fcn={contractDeploy}
				buttonLabel={"Deploy Contract"}
				text={contractTextSt}
				link={contractLinkSt}
			/>
</p>
<p align="center">
			<MyGroup
				fcn={contractExecute}
				buttonLabel={"Transfer Tokens"}
				text={trasnferTextSt}
				link={trasnferLinkSt}
			/>
</p>
<p align="center">
			<MyFormGroup
				fcn={NFTtokenCreate}
				buttonLabel={"NFT"}
				text={NFTTextSt}
				link={NFTLinkSt}
			/>
</p>
<p align="center">
			<MyGroup
				fcn={Clear_Messages}
				buttonLabel={"Clear Messages"}
			/>
</p>
			
				<span>Hedera-XOXOXO</span>
		</div>

	);
}
export default App;
