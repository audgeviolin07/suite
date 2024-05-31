// import React from 'react';
// import { ConnectButton, useWallet, addressEllipsis } from '@suiet/wallet-kit';
// import { TransactionBlock } from '@mysten/sui.js';

// function createMintNftTxnBlock() {
//   const txb = new TransactionBlock();
//   const contractAddress = "0xe146dbd6d33d7227700328a9421c58ed34546f998acdc42a1d05b4818b49faa2";
//   const contractModule = "nft";
//   const contractMethod = "mint";
//   const nftName = "Suiet NFT";
//   const nftDescription = "Hello, Suiet NFT";
//   const nftImgUrl = "https://xc6fbqjny4wfkgukliockypoutzhcqwjmlw2gigombpp2ynufaxa.arweave.net/uLxQwS3HLFUailocJWHupPJxQsli7aMgzmBe_WG0KC4";

//   txb.moveCall({
//     target: `${contractAddress}::${contractModule}::${contractMethod}`,
//     arguments: [
//       txb.pure(nftName),
//       txb.pure(nftDescription),
//       txb.pure(nftImgUrl),
//     ],
//   });

//   return txb;
// }

// export default function WalletComponent() {
//   const wallet = useWallet();

//   async function mintNft() {
//     if (!wallet.connected) return;

//     const txb = createMintNftTxnBlock();
//     try {
//       const res = await wallet.signAndExecuteTransactionBlock({ transactionBlock: txb });
//       console.log("NFT minted successfully!", res);
//       alert("Congrats! Your NFT is minted!");
//     } catch (e) {
//       alert("Oops, NFT minting failed");
//       console.error("NFT mint failed", e);
//     }
//   }

//   return (
//     <div className="App">
//       <h1 className="title">Hello, Suiet Wallet Kit</h1>
//       <ConnectButton />
//       <section>
//         <p><span className="gradient">Wallet status:</span> {wallet.status}</p>
//       </section>
//       {wallet?.account && (
//         <div>
//           <p>Connected Account: {addressEllipsis(wallet.account.address)}</p>
//           <p><span className="gradient">Current chain of wallet:</span> {wallet.chain.name}</p>
//         </div>
//       )}
//       {wallet.status === "connected" && (
//         <button onClick={mintNft}>Mint Your NFT!</button>
//       )}
//     </div>
//   );
// }
import React from 'react';
import { ConnectButton, useWallet, addressEllipsis } from '@suiet/wallet-kit';
import { TransactionBlock } from '@mysten/sui.js';

function createMintNftTxnBlock() {
  const txb = new TransactionBlock();
  const contractAddress = "0xe146dbd6d33d7227700328a9421c58ed34546f998acdc42a1d05b4818b49faa2";
  const contractModule = "nft";
  const contractMethod = "mint";
  const nftName = "Suiet NFT";
  const nftDescription = "Hello, Suiet NFT";
  const nftImgUrl = "https://xc6fbqjny4wfkgukliockypoutzhcqwjmlw2gigombpp2ynufaxa.arweave.net/uLxQwS3HLFUailocJWHupPJxQsli7aMgzmBe_WG0KC4";

  txb.moveCall({
    target: `${contractAddress}::${contractModule}::${contractMethod}`,
    arguments: [
      txb.pure(nftName),
      txb.pure(nftDescription),
      txb.pure(nftImgUrl),
    ],
  });

  return txb;
}

export default function WalletComponent() {
  const wallet = useWallet();

  async function mintNft() {
    if (!wallet.connected) return;

    const txb = createMintNftTxnBlock();
    try {
      const res = await wallet.signAndExecuteTransactionBlock({ transactionBlock: txb });
      console.log("NFT minted successfully!", res);
      alert("Congrats! Your NFT is minted!");
    } catch (e) {
      alert("Oops, NFT minting failed");
      console.error("NFT mint failed", e);
    }
  }

  return (
    <div className="App">
      <h1 className="title">Hello, Suiet Wallet Kit</h1>
      <ConnectButton />
      <section>
        <p><span className="gradient">Wallet status:</span> {wallet.status}</p>
      </section>
      {wallet?.account && (
        <div>
          <p>Connected Account: {addressEllipsis(wallet.account.address)}</p>
          <p><span className="gradient">Current chain of wallet:</span> {wallet.chain.name}</p>
        </div>
      )}
      {wallet.status === "connected" && (
        <button onClick={mintNft}>Mint Your NFT!</button>
      )}
    </div>
  );
}
