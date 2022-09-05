import { useEffect } from "react";
import shallow from "zustand/shallow";
import useBudgetStore from "../Stores/store";

const Remaning = () => {
  const [remainder, spend, budget] = useBudgetStore(
    (state) => [state.remainder, state.spend, state.budget],
    shallow
  );

  const updateRemainder = useBudgetStore((state) => state.updateRemainder);

  useEffect(() => {
    updateRemainder();
  });

  return (
    <div className="w-full min-w-[296px] p-4 bg-green-200 rounded text-emerald-700 sm:p-6">
      <p className="font-sans sm:text-xl">Remaning: {remainder}</p>
    </div>
  );
};

export default Remaning;
