import React from "react";
import useBudgetStore from "../Stores/store";

export const ExpenseCounter = () => {
  const expenses = useBudgetStore((state) => state.expenses);
  return (
    <p className="py-0.5 px-4 bg-indigo-500 rounded-full w-fit text-neutral-50 font-rubik font-extralight text-sm">
      {expenses.length}
    </p>
  );
};
