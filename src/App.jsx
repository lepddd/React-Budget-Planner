import Budget from "./Components/Budget";
import Remaning from "./Components/Remaning";
import Spend from "./Components/Spend";
import FilterInput from "./Components/FilterInput";
import AddExpend from "./Components/AddExpend";
import Expenses from "./Components/Expenses";
import Modal from "./Components/Modal";

function App() {
  return (
    <>
      <Modal />
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
          <FilterInput />
        </div>

        <Expenses />

        <div>
          <p className="text-gray-700 text-2xl font-medium font-sans mb-2">
            Add Expenses
          </p>
          <AddExpend />
        </div>
      </div>
    </>
  );
}
export default App;
