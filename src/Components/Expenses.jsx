import Expense from "./Expense";
import useBudgetStore from "../Stores/store";

const Expenses = () => {
  const expenses = useBudgetStore((state) => state.expenses);
  const filter = useBudgetStore((state) => state.filtered);

  let filtered = []

  const updateFilter = () => {
    return expenses.filter(el => el.title == filter)
  }

  filtered = updateFilter()

  return (
    <div className="my-4 h-[240px] overflow-auto min-w-[296px]">
      {filtered.length > 0
        ? filtered.map((el) => (
            <Expense key={el.id} title={el.title} value={el.value} id={el.id} />
          ))
        : expenses.map((el) => (
            <Expense key={el.id} title={el.title} value={el.value} id={el.id} />
          ))}
          
    </div>
  );
};

export default Expenses;
