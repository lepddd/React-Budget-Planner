import React from "react";
import { Icon } from "@iconify/react";
import useBudgetStore from "../Stores/store";

export const ExpenseCard = ({ expense }) => {
  const { id, date, title, amount } = expense;

  const removeExpense = useBudgetStore((state) => state.deleteExpense);

  return (
    <div className="flex justify-between items-center gap-16 px-7 py-3 bg-zinc-50 rounded-md shadow-md min-w-[320px]">
      <div className="flex flex-col gap-2 w-full justify-between font-rubik md:flex-row">
        <p className="text-gray-500 text-base">{date}</p>
        <p className="text-gray-500 text-xl font-medium">{title}</p>
        <p className="text-indigo-500 text-xl font-medium">$ {amount}</p>
      </div>

      <div>
        <button
          className="w-12 h-12 flex justify-center items-center rounded-full bg-slate-200"
          onClick={() => removeExpense(id)}
        >
          <Icon
            icon="mingcute:close-fill"
            color="#94a3b8"
            width="20"
            height="20"
          />
        </button>
      </div>
    </div>
  );
};
