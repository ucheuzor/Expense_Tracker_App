import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.length === 0 && <p>Please add transaction to get started</p>}
                {transactions.map(transaction => (
                    <Transaction {...transaction} key={transaction.id} />
                ))}
            </ul>
        </>
    )
}

export default TransactionList;
