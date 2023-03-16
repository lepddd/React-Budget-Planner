import React from "react";
import { Icon } from "@iconify/react";
import useBudgetStore from "../Stores/store";

export const SpendCard = () => {
  const expenses = useBudgetStore((state) => state.expenses);

  const spend = expenses.reduce((acc, value) => acc + Number(value.amount), 0);

  return (
    <div className="flex flex-col gap-3 w-full min-w-[320px] py-3 px-5 border-l-4 font-rubik border-rose-500 rounded-md shadow-md md:min-w-[250px]">
      <div className="flex justify-between">
        <p className="text-base text-gray-500">Spend</p>
        <p>
          <Icon
            icon="ic:round-trending-down"
            color="#f43f5e"
            width="20"
            height="20"
          />
        </p>
      </div>

      <div className="flex justify-between items-center">
        <input
          type="text"
          className="text-2xl font-semibold w-8/12"
          maxLength={8}
          value={spend}
          disabled={true}
        />
      </div>
    </div>
  );
};
