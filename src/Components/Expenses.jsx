import useBudgetStore from "../Stores/store";
import Expense from "./Expense";

const Expenses = () => {
  const expenses = useBudgetStore((state) => state.expenses);
  const filter = useBudgetStore((state) => state.filtered);

  let allExpenses = [];

  const updateFilter = () => {
    if (filter.length < 1) return (allExpenses = expenses);

    const filterWord = filter.toLowerCase();
    expenses.forEach((el) => {
      if (el.title.toLowerCase().includes(filterWord))
        return allExpenses.push(el);
    });
  };

  updateFilter();

  return (
    <div className="my-4 h-[240px] overflow-auto min-w-[296px]">
      {allExpenses.map((el) => (
        <Expense key={el.id} title={el.title} value={el.value} id={el.id} />
      ))}
    </div>
  );
};

export default Expenses;
