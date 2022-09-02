import create from "zustand";

const useBudgetStore = create((set) => ({
  expenses: [],
  budget: 4000,
  spend: 0,
  remainder: 0,
  //actions
  updateSpend: (newSpend) => set(() => ({spend:newSpend})),
  updateExpense: (newExpense) => set((state) => ({ expenses: [...state.expenses, newExpense] })),
  deleteExpense: (idExpense) => set((state) => ({ expenses: state.expenses.filter((el) => el.id !== idExpense)})),
}));

export default useBudgetStore;
