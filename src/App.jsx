import Budget from "./Components/Budget";
import Remaning from "./Components/Remaning";
import Spend from "./Components/Spend";

function App() {
  return (
    <div className="p-3 lg:px-6 lg:py-10">
      <div className="flex flex-col gap-1 lg:flex-row lg:gap-2">
      <Budget budget={'2000'}/>
      <Remaning remaning={'1040'}/>   
      <Spend spend={'960'}/>   
      </div>
    </div>
  );
}
export default App;