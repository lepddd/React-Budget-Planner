import create from "zustand";

const useBudgetStore = create((set, get) => ({
  expenses: [],
  filtered: "",
  isOpen: false,
  budget: 0,
  spend: 0,
  remainder: 0,
  //actions
  updateModal: () => set((state) => ({isOpen: !state.isOpen})),  
  updateRemainder : () => set((state) => ({ remainder: state.budget - state.spend })),
  updateFiltered: (expenses) => set(() => ({ filtered: expenses })),
  updateSpend: (newSpend) => set({ spend: newSpend }),
  updateBudget: (newBudget) => set({ budget: newBudget }),
  updateExpense: (newExpense) => set({ expenses: newExpense }),
}));

export default useBudgetStore;
