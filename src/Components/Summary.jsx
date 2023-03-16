import React from "react";
import { BudgetCard } from "./BudgetCard";
import { SpendCard } from "./SpendCard";
import { RemainderCard } from "./RemainderCard";

export const Summary = () => {
  return (
    <div className="flex flex-col p-5 gap-4">
      <p className="font-rubik font-medium text-base text-slate-500">Summary</p>

      <div className="flex flex-col gap-3 justify-center md:flex-row">
        <RemainderCard/>
        <BudgetCard />
        <SpendCard/>
      </div>
    </div>
  );
};
