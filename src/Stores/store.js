import create from "zustand";

const useBudgetStore = create((set) => ({
  expenses: [],
  filtered: "",
  isValidBudget: true,
  isValidValue: true,
  isOpen: false,
  budget: 0,
  spend: 0,
  remainder: 0,
  //actions
  updateValidValue: (boolean) => set({ isValidValue: boolean }),
  updateValidBudget: (boolean) => set({ isValidBudget: boolean }),
  updateModal: () => set((state) => ({ isOpen: !state.isOpen })),
  updateRemainder: () =>
    set((state) => ({ remainder: state.budget - state.spend })),
  updateFiltered: (expenses) => set(() => ({ filtered: expenses })),
  updateSpend: (newSpend) => set({ spend: newSpend }),
  updateBudget: (newBudget) => set({ budget: newBudget }),
  updateExpense: (newExpense) => set({ expenses: newExpense }),
}));

export default useBudgetStore;
