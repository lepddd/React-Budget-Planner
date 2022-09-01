import { useRef } from "react";
import useBudgetStore from "../Stores/store";

const AddExpend = () => {
  const addExpense = useBudgetStore((state) => state.addExpense);
  const allExpenses = useBudgetStore((state) => state.expenses);

  const inputName = useRef();
  const inputValue = useRef();

  const addExpenses = () => {
    const add = {
      title: inputName.current.value,
      value: inputValue.current.value,
      id: allExpenses.length,
    };
    addExpense(add);
    inputName.current.value = inputValue.current.value = "";
  };

  return (
    <div>
      <div className="my-1.5">
        <label className="text-base text-gray-700" htmlFor="">
          name
        </label>
        <input
          ref={inputName}
          className="p-2.5 border-slate-300 border rounded text-sm text-slate-600 w-full outline-slate-400 mt-1.5 min-w-[296px]"
          type="text"
          name=""
          id=""
          placeholder="Enter name"
        />
      </div>

      <div className="my-1.5">
        <label className="text-base text-gray-700" htmlFor="">
          value
        </label>
        <input
          ref={inputValue}
          className="p-2.5 border-slate-300 border rounded text-sm text-slate-600 w-full outline-slate-400 mt-1.5 min-w-[296px]"
          type="text"
          name=""
          id=""
          placeholder="Enter value"
        />
      </div>

      <button
        onClick={addExpenses}
        className={
          "py-2 px-5 block w-full bg-blue-600 text-slate-50 rounded font-sans sm:text-xl"
        }
      >
        Save
      </button>
    </div>
  );
};

export default AddExpend;
