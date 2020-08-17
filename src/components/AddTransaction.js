import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const AddTransaction = () => {
    const { AddTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState(undefined);

    const onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^[\d +-]*(\.\d{0,2})?$/)) {
            return setAmount(amount);
        }
    };

    const handleChange = (e) => {
        const text = e.target.value;

        if (!text.match(/^[a-zA-Z\s ]*$/)) {
            return setError('Only test is allowed on the text field');
        }
        setText(text);
        setError('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text || !amount) {
            return setError('Please add all fields');
        }

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount     //parseInt(amount) parseInt also convert strings to integer. + sign is just faster 
        };
        AddTransaction(newTransaction);
        setAmount('');
        setText('');
        setError(undefined);
    };


    return (
        <>
            <h3>Add new transaction</h3>
            {error && <p className="minus">{error} </p>}
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        placeholder="Enter text..."
                        value={text}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
              (negative - expense, positive - income)</label
                    >
                    <input
                        type="text"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={onAmountChange}
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction;
