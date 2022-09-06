import Budget from "./Components/Budget";
import Remaning from "./Components/Remaning";
import Spend from "./Components/Spend";
import FilterInput from "./Components/FilterInput";
import AddExpend from "./Components/AddExpend";
import Expenses from "./Components/Expenses";
import Modal from "./Components/Modal";
import TitleSection from "./Components/TitleSection";

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
          <TitleSection title={"Expenses"} />
          <FilterInput />
        </div>

        <Expenses />

        <div>
          <TitleSection title={"Add Expenses"} />
          <AddExpend />
        </div>
      </div>
    </>
  );
}
export default App;
