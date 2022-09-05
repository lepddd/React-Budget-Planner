import useBudgetStore from "../Stores/store";

const FilterInput = () => {
  const update = useBudgetStore(state => state.updateFiltered)  

  const handleChange = (e) => {
    update(e.target.value)       
  }

  return (
    <input
    defaultValue={''}  
    onChange={handleChange}  
      className="p-2.5 border-slate-300 border rounded text-sm text-slate-600 w-full min-w-[296px] outline-slate-400"
      type="text"
      name=""
      id=""
      placeholder="Type to search"
    />
  );
};

export default FilterInput;
