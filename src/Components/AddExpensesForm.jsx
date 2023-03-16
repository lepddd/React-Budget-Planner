import React, { useState } from "react";
import { nanoid } from "nanoid";
import useBudgetStore from "../Stores/store";

export const AddExpensesForm = () => {
  const [expense, setExpense] = useState("");
  const [value, setValue] = useState("");

  const setExpenses = useBudgetStore((state) => state.setExpenses);

  const handleChangeExpense = (e) => {
    setExpense(e.target.value);
  };

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const addExpense = (e) => {
    e.preventDefault();
    const date = new Date();
    const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    const newExpense = {
      id: nanoid(),
      date: today,
      title: expense,
      amount: value,
    };
    setExpense("");
    setValue("");
    setExpenses(newExpense);
    console.log("Add-Expense-Funtion");
  };
  return (
    <div className="flex flex-col gap-4 p-5">
      <p className="font-rubik font-medium text-base text-slate-500">
        Add expenses
      </p>
      <form
        onSubmit={addExpense}
        className="flex flex-col gap-2 item-center justify-between md:flex-row min-w-[320px]"
      >
        <input
          className="py-1 px-3 border-slate-300 rounded-md text-base text-slate-500 w-full border "
          onChange={handleChangeExpense}
          type="text"
          name=""
          id=""
          placeholder="Expenses..."
          value={expense}
          required
        />
        <input
          className="py-1 px-3 border-slate-300 rounded-md text-base text-slate-500 w-full border "
          onChange={handleChangeValue}
          type="text"
          name=""
          id=""
          placeholder="Value..."
          value={value}
          required
        />
        <button className="py-1 px-14 font-medium bg-indigo-500 text-neutral-50 rounded-md hover:bg-indigo-600 transition-colors">
          Add
        </button>
      </form>
    </div>
  );
};
