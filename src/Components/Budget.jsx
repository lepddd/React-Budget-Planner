import { useRef } from "react";
import useBudgetStore from "../Stores/store";

const Budget = () => {
  const budgetValue = useBudgetStore((state) => state.budget);
  const setBudget = useBudgetStore((state) => state.setBudget);
  const inputValue = useRef();

  const handleClick = () => {
    inputValue.current.disabled = false;
    inputValue.current.focus();
  };

  const handleBlur = () => {
    inputValue.current.disabled = true;
    setBudget(inputValue.current.value);
  };

  return (
    <div className="flex w-full min-w-[296px] py-2 px-4 bg-gray-200 justify-between items-center rounded text-gray-700 sm:px-6 sm:py-4">
      <p className="font-sans sm:text-xl">Budget:</p>
      <input
        ref={inputValue}
        onBlur={handleBlur}
        className="inline w-full sm:text-xl"
        type="text"
        defaultValue={budgetValue}
        disabled
      />
      <button
        onClick={handleClick}
        className="py-2 px-5 block bg-blue-600 text-slate-50 rounded font-sans sm:text-xl"
      >
        Edit
      </button>
    </div>
  );
};

export default Budget;
