import create from "zustand";

const useBudgetStore = create((set, get) => ({
  expenses: [],
  budget: 4000,
  spend: 0,
  remainder: 0,
  updateRemainder: (newSpend, newBudget) =>
    set(() => ({ remainder: newBudget - newSpend })),
  //actions
  updateSpend: (newSpend) => set({ spend: newSpend }),
  updateExpense: (newExpense) =>
    set((state) => {
      return { expenses: [...state.expenses, newExpense] };
    }),
  deleteExpense: (idExpense) =>
    set((state) => ({
      expenses: state.expenses.filter((el) => el.id !== idExpense),
    })),
}));

export default useBudgetStore;
