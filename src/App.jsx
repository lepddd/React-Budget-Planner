import Budget from "./Components/Budget";
import Remaning from "./Components/Remaning";
import Spend from "./Components/Spend";
import Expense from "./Components/Expense";
import useBudgetStore from "./Stores/store";
import AddExpend from "./Components/AddExpend";

function App() {
  const expenses = useBudgetStore((state) => state.expenses);
  console.log(expenses)

  return (
    <div className="p-3 lg:px-6 lg:py-10">
      <div className="flex flex-col gap-1 mb-4 lg:flex-row lg:gap-2">
        <Budget />
        <Remaning />
        <Spend />
      </div>
      <div>
        <p className="text-gray-700 text-2xl font-medium font-sans mb-2">
          Expenses
        </p>
        <input
          className="p-2.5 border-slate-300 border rounded text-sm text-slate-600 w-full min-w-[296px] outline-slate-400"
          type="text"
          name=""
          id=""
          placeholder="Type to search"
        />
      </div>
      <div className="my-4 h-[240px] overflow-auto min-w-[296px]">
        {expenses.map((el) => (
          <Expense key={el.id} title={el.title} value={el.value} id={el.id}/>
        ))}
      </div>
      <div>
        <p className="text-gray-700 text-2xl font-medium font-sans mb-2">
          Add Expenses
        </p>
        <AddExpend />
      </div>
    </div>
  );
}
export default App;
