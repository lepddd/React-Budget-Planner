import Header from "./Components/Header";
import FilterBox from "./Components/FilterBox";
import Expenses from "./Components/Expenses";
import Modal from "./Components/Modal";
import AddExpendBox from "./Components/AddExpendBox";

function App() {
  return (
    <>
      <Modal />
      <div className="p-3 lg:px-6 lg:py-10">
        <Header/>
        <FilterBox/>
        <Expenses />        
        <AddExpendBox/>        
      </div>
    </>
  );
}
export default App;
