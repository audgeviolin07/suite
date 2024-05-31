import { Transaction } from '@mysten/sui/transactions';

interface Transfer {
  to: string;
  amount: number;
}

export const createTransaction = (transfers: Transfer[]) => {
  const tx = new Transaction();
  const coins = tx.splitCoins(
    tx.gas,
    transfers.map((transfer) => transfer.amount),
  );

  transfers.forEach((transfer, index) => {
    tx.transferObjects([coins[index]], transfer.to);
  });

  return tx;
};
