import { useEffect } from "react";
import useBudgetStore from "../Stores/store";
const Spend = () => {
  const expenses = useBudgetStore((state) => state.expenses);
  const updateSpend = useBudgetStore((state) => state.updateSpend);

  let spend = expenses.reduce(
    (total, acc) => Number(total) + Number(acc.value),
    0
  );

  useEffect(() => {
    updateSpend(spend);
  }, []);

  return (
    <div className="w-full min-w-[296px] p-4 bg-blue-200 rounded text-blue-700 sm:p-6">
      <p className="font-sans sm:text-xl">Spend: {spend}</p>
    </div>
  );
};

export default Spend;
