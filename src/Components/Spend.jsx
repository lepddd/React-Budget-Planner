import { useEffect } from "react";
import shallow from "zustand/shallow";
import useBudgetStore from "../Stores/store";

const Spend = () => {
  const [expenses, spend] = useBudgetStore(
    (state) => [state.expenses, state.spend],
    shallow
  );

  const updateSpend = useBudgetStore((state) => state.updateSpend);

  function updateStore() {
    return updateSpend(
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
