import { useRef } from "react";
import shallow from "zustand/shallow";
import useBudgetStore from "../Stores/store";

const AddExpend = () => {
  const updateExpenses = useBudgetStore((state) => state.updateExpense);
  const updateIsValid = useBudgetStore((state) => state.updateValidValue);

  const [expenses, isValid] = useBudgetStore(
    (state) => [state.expenses, state.isValidValue],
    shallow
  );

  const regexp = /^[0-9]+$/;

  const refName = useRef();
  const refValue = useRef();

  const createExpense = (title, value, id) => {
    return { title: title, value: parseInt(value), id: id };
  };

  const addExpenses = (e) => {
    e.preventDefault();
    if (refName.current.value == "" || refValue.current.value == "")
      return alert('Input is Empty!');

    if (!refValue.current.value.match(regexp)) return updateIsValid(false);

    if (refValue.current.value.match(regexp)) {
      const name = refName.current.value;
      const value = refValue.current.value;
      const newExpense = createExpense(name, value, expenses.length);
      updateExpenses([...expenses, newExpense]);
      refName.current.value = refValue.current.value = "";
      updateIsValid(true);
    }
  };

  return (
    <form>
      <div className="flex flex-col mb-1.5 lg:flex-row gap-1.5">
        <div className="">
          <label className="text-base text-gray-700 block">name</label>
          <input
            ref={refName}
            className={`p-2.5 border-slate-300  border rounded text-sm text-slate-600 w-full outline-slate-400 mt-1.5 min-w-[296px] lg:w-40`}
            type="text"
            placeholder="Enter name"
          />
        </div>

        <div className="">
          <label className="text-base text-gray-700 block">value</label>
          <input
            ref={refValue}
            className={`p-2.5 ${
              isValid ? "border-slate-300" : "border-red-700"
            } border-slate-300 border rounded text-sm text-slate-600 w-full outline-slate-400 mt-1.5 min-w-[296px] lg:w-40`}
            type="text"
            placeholder="Enter value"
          />
        </div>
      </div>

      <button
        onClick={(e) => addExpenses(e)}
        className={
          "py-2 px-5 block w-full bg-blue-600 text-slate-50 rounded font-sans sm:text-xl lg:w-auto"
        }
      >
        Save
      </button>
    </form>
  );
};

export default AddExpend;
