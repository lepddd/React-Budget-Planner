import create from "zustand";

const useBudgetStore = create((set,get) => ({
  expenses: [],
  budget: 4000,
  spend: 0, /* budget - spend */
}));

export default useBudgetStore;
