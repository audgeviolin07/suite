import React from 'react';
import { createTransaction } from '../lib/transaction';

const TransactionButton = () => {
  const handleClick = () => {
    const transfers = [
      { to: '0xAddress1', amount: 100 },
      { to: '0xAddress2', amount: 200 },
    ];
    const tx = createTransaction(transfers);
    console.log(tx); // Or handle the transaction as needed
  };

  return <button onClick={handleClick}>Create Transaction</button>;
};

export default TransactionButton;
