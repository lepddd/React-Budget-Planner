import useBudgetStore from "../Stores/store";
import Expense from "./Expense";

const Expenses = () => {
  const expenses = useBudgetStore((state) => state.expenses);
  const filter = useBudgetStore((state) => state.filtered);

  let filtered = [];

  const updateFilter = () => {
    let isvisible = false;
    const lowerCase = filter.toLowerCase();
    expenses.forEach((element) => {
      isvisible = element.title.toLowerCase().includes(lowerCase);
      if (isvisible) {
        filtered.push(element);
      }
    });
  };

  updateFilter();

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
{
  /* <div className="my-4 h-[240px] overflow-auto min-w-[296px]">
      {filtered.length > 0
        ? filtered.map((el) => (
            <Expense key={el.id} title={el.title} value={el.value} id={el.id}/>
          ))
        : expenses.map((el) => (
            <Expense key={el.id} title={el.title} value={el.value} id={el.id} />
          ))}
    </div> */
}
