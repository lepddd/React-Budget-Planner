import React, { useState } from "react";
import useBudgetStore from "../Stores/store";
import { ExpenseCard } from "./ExpenseCard";
import { ExpenseCounter } from "./ExpenseCounter";

export const ExpensesList = () => {
  const expenses = useBudgetStore((state) => state.expenses);
  const [filter, setFilter] = useState("");

  const filtered = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(filtered);

  return (
    <div className="flex flex-col p-5 gap-4 min-w-min">
      <div className="flex justify-between items-center">
        <p className="font-rubik font-medium text-base text-slate-500">
          Expenses
        </p>
        <ExpenseCounter />
      </div>

      <form>
        <input
          className="py-1 px-3 border-slate-300 rounded-md text-base text-slate-500 w-full border "
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          name=""
          id=""
          defaultValue={""}
          placeholder="Search..."
          required
        />
      </form>

      <div className="flex flex-col gap-4">
        {!expenses.length ? (
          <p className="text-center text-lg font-bold">Add a expense !</p>
        ) : filter.length && !filtered.length ? (
          <p className="text-center text-lg font-bold">Expense not found !</p>
        ) : filter.length && filtered.length ? (
          filtered.map((expense) => (
            <ExpenseCard expense={expense} key={expense.id} />
          ))
        ) : (
          expenses.map((expense) => (
            <ExpenseCard expense={expense} key={expense.id} />
          ))
        )}
      </div>
    </div>
  );
};

/* {filter.length && !filtered.length ? (
  <p>Não encontrado</p>
) : filter.length && filtered.length ? (
  filtered.map((expense) => (
    <ExpenseCard expense={expense} key={expense.id} />
  ))
) : (
  expenses.map((expense) => (
    <ExpenseCard expense={expense} key={expense.id} />
  ))
)} */
