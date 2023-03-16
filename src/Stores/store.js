import create from "zustand";
import { nanoid } from "nanoid";

const useBudgetStore = create((set, get) => ({
  expenses: [
    {
      id: nanoid(),
      date: "2023-03-11",
      title: "Gym",
      amount: "50",
    },
    {
      id: nanoid(),
      date: "2023-03-12",
      title: "Petshop",
      amount: "80",
    },
    {
      id: nanoid(),
      date: "2023-03-13",
      title: "Dinner",
      amount: "30",
    },
  ],
  budget: 0,
  //actions
  setBudget: (newBudget) => set({ budget: newBudget }),
  setExpenses: (newExpense) =>
    set((state) => ({ expenses: [...state.expenses, newExpense] })),
  deleteExpense: (id) => {
    const result = get().expenses.filter((expense) => expense.id !== id);

    set({ expenses: result });
  },
}));

export default useBudgetStore;
