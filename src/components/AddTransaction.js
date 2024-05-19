import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from "uuid";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function onSubmit(e) {
    e.preventDefault();

    addTransaction({
      text: text,
      amount: +amount,
      id: uuidv4(),
    });
  }

  return (
    <>
      <h3>Add new transaction</h3>

      <form onSubmit={onSubmit}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          placeholder="Enter text..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></input>
        <label htmlFor="amount">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        ></input>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
