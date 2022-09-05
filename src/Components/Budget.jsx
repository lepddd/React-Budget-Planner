import useBudgetStore from "../Stores/store";

const Budget = () => {
  const updateModal = useBudgetStore((state) => state.updateModal);

  const budgetValue = useBudgetStore((state) => state.budget);

  return (
    <div className="flex w-full min-w-[296px] py-2 px-4 bg-gray-200 justify-between items-center rounded text-gray-700 sm:px-6 sm:py-4">
      <p className="font-sans sm:text-xl">Budget: {budgetValue}</p>
      <button
        onClick={updateModal}
        className="py-2 px-5 block bg-blue-600 text-slate-50 rounded font-sans sm:text-xl"
      >
        Edit
      </button>
    </div>
  );
};

export default Budget;
