import { useEffect } from "react";
import shallow from 'zustand/shallow'
import useBudgetStore from "../Stores/store";
const Remaning = () => {
  const {spend,budget,remainder} = useBudgetStore(state => ({spend:state.spend,budget:state.budget,remainder:state.remainder}),shallow)
  const update = useBudgetStore(state => state.updateRemainder)

  function updateStore() {
    return update(spend,budget);
  }

  useEffect(()=>{
    updateStore()
  })

  console.log(remainder)

  return (
    <div className="w-full min-w-[296px] p-4 bg-green-200 rounded text-emerald-700 sm:p-6">
      <p className="font-sans sm:text-xl">Remaning: {remainder}</p>
    </div>
  );
};

export default Remaning;
