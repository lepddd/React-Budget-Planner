import { AddExpensesForm } from "./Components/AddExpensesForm";
import { ExpensesList } from "./Components/ExpensesList";
import { Summary } from "./Components/Summary";
import useBudgetStore from "./Stores/store";

function App() {
  const expenses = useBudgetStore((state) => state.expenses);

  return (
    <>
      <Summary />
      <AddExpensesForm />
      <ExpensesList expenses={expenses} />
    </>
  );
}
export default App;
