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

  const inputName = useRef();
  const inputValue = useRef();

  const createExpense = () => {
    return {
      title: inputName.current.value,
      value: parseInt(inputValue.current.value),
      id: expenses.length,
    };
  };

  const addExpenses = (e) => {
    e.preventDefault();
    if (inputName.current.value == "" || inputValue.current.value == "")
      return updateIsValid(false);

    if (!inputValue.current.value.match(regexp)) return updateIsValid(false);

    if (inputValue.current.value.match(regexp)) {
      const newExpense = createExpense();
      updateExpenses([...expenses, newExpense]);
      inputName.current.value = inputValue.current.value = "";
      updateIsValid(true);
    }
  };

  return (
    <div>
      <form>
        <div className="my-1.5">
          <label className="text-base text-gray-700" htmlFor="">
            name
          </label>
          <input
            ref={inputName}
            className={`p-2.5 border-slate-300  border rounded text-sm text-slate-600 w-full outline-slate-400 mt-1.5 min-w-[296px]`}
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
            className={`p-2.5 ${
              isValid ? "border-slate-300" : "border-red-700"
            } border-slate-300 border rounded text-sm text-slate-600 w-full outline-slate-400 mt-1.5 min-w-[296px]`}
            type="text"
            name=""
            id=""
            placeholder="Enter value"
          />
        </div>

        <button
          onClick={(e) => addExpenses(e)}
          className={
            "py-2 px-5 block w-full bg-blue-600 text-slate-50 rounded font-sans sm:text-xl"
          }
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddExpend;
