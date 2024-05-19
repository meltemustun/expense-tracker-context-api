import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);

  const income = amount
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense = amount
    .filter((amount) => amount < 0)
    .reduce((acc, item) => (acc -= item), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>
          Income
          <p className="money plus">{moneyFormatter(income)}</p>
        </h4>
      </div>
      <div>
        <h4>
          Expense
          <p className="money minus">{moneyFormatter(expense)}</p>
        </h4>
      </div>
    </div>
  );
};
