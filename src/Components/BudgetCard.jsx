import { useRef } from "react";
import { Icon } from "@iconify/react";
import shallow from "zustand/shallow";
import useFocus from "../useFocus";
import useBudgetStore from "../Stores/store";

export const BudgetCard = () => {
  const fieldRef = useRef();
  const { isEditing, setIsEditing } = useFocus(fieldRef);
  const { budget, setBudget } = useBudgetStore(
    (state) => ({
      budget: state.budget,
      setBudget: state.setBudget,
    }),
    shallow
  );

  const editBudgetField = () => {
    setIsEditing(true);
  };

  const saveBudgetField = () => {
    setBudget(fieldRef.current.value);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-3 w-full min-w-[320px] py-3 px-5 border-l-4 font-rubik border-indigo-500 rounded-md shadow-md md:min-w-[250px]">
      <div className="flex justify-between">
        <p className="text-base text-gray-500">Budget</p>
        <p>
          <Icon
            icon="mingcute:copper-coin-line"
            color="#6366f1"
            width="20"
            height="20"
          />
        </p>
      </div>

      <div className="flex justify-between items-center">
        <input
          ref={fieldRef}
          type="text"
          className="text-2xl font-semibold w-8/12"
          maxLength={8}
          disabled={!isEditing}
          defaultValue={budget}
        />

        {isEditing ? (
          <button
            className="py-1 px-3 bg-indigo-500 text-neutral-50 rounded-md hover:bg-indigo-600 transition-colors"
            onClick={() => saveBudgetField()}
          >
            Save
          </button>
        ) : (
          <button
            className="py-1 px-3 bg-indigo-500 text-neutral-50 rounded-md hover:bg-indigo-600 transition-colors"
            onClick={() => editBudgetField()}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};
