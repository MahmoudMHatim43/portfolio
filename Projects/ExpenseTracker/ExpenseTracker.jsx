import "./expense-tracker.css";
import React from "react";
import { GlobalProvider } from "./Context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
function ExpenseTracker() {
  return (
    <>
      <GlobalProvider>
        <div className="expense-tracker-container">
          <Header title={"Your Name"} />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </>
  );
}

export default ExpenseTracker;
