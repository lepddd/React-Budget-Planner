import { Icon } from "@iconify/react";
import useBudgetStore from "../Stores/store";

const Expense = ({ title, value, id }) => {
  const delExpenses = useBudgetStore((state) => state.deleteExpense);

  const deleteExpense = (id) => {
    delExpenses(id);
  };

  return (
    <div className="flex justify-between items-center px-5 py-2 min-w-[276px]">
      <p className="text-sm text-gray-700">{title}</p>
      <div className="flex items-center gap-5">
        <p className="px-2.5 py-1.5 bg-blue-600 text-sm text-slate-50 rounded-full">
          {value}
        </p>
        <button onClick={() => deleteExpense(id)}>
          <Icon icon="ci:off-close" color="#404040" width="24" height="24" />
        </button>
      </div>
    </div>
  );
};

export default Expense;
