import { useEffect } from "react";
import useBudgetStore from "../Stores/store";
const Spend = () => {
  const expenses = useBudgetStore((state) => state.expenses);
  const update = useBudgetStore((state) => state.updateSpend);
  const spend = useBudgetStore((state) => state.spend);

  function updateStore() {
    return update(
      expenses.reduce((acc, value) => Number(acc) + Number(value.value), 0)
    );
  }

  useEffect(() => {
    updateStore();
  });

  return (
    <div className="w-full min-w-[296px] p-4 bg-blue-200 rounded text-blue-700 sm:p-6">
      <p className="font-sans sm:text-xl">Spend: {spend}</p>
    </div>
  );
};

export default Spend;
