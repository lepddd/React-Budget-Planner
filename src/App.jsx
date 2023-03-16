import { AddExpensesForm } from "./Components/AddExpensesForm";
import { ExpensesList } from "./Components/ExpensesList";
import { Summary } from "./Components/Summary";
import useBudgetStore from "./Stores/store";

function App() {

  return (
    <>
      <Summary />
      <AddExpensesForm />
      <ExpensesList/>
    </>
  );
}
export default App;
