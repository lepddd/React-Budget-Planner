import useBudgetStore from "../Stores/store";
import shallow from "zustand/shallow";
import { Icon } from "@iconify/react";
import { useRef } from "react";

const Modal = () => {
  const [isOpen, isValid] = useBudgetStore(
    (state) => [state.isOpen, state.isValidBudget],
    shallow
  );

  const updateModal = useBudgetStore((state) => state.updateModal);
  const updateBudget = useBudgetStore((state) => state.updateBudget);
  const updateIsValid = useBudgetStore((state) => state.updateValidBudget);

  const regexp = /^[0-9]+$/;

  const inputValue = useRef();

  const handleClick = () => {
    if (!inputValue.current.value) return updateIsValid(false);

    if (!inputValue.current.value.match(regexp)) return updateIsValid(false);

    updateBudget(inputValue.current.value);
    updateIsValid(true);
    updateModal();
  };

  const closeModal = () => {
    updateIsValid(true);
    updateModal();
  };

  return (
    <>
      {isOpen && (
        <div className="w-full h-screen bg-neutral-900 bg-opacity-90 absolute flex items-center justify-center">
          <div className="p-5 bg-white rounded relative">
            <button
              onClick={closeModal}
              className="bg-white absolute -top-3 -right-3 cursor-pointer rounded-full"
            >
              <Icon
                icon="icon-park-solid:close-one"
                color="#b91c1c"
                width="24"
                height="24"
              />
            </button>

            <input
              ref={inputValue}
              className={`p-2.5 ${
                isValid ? "border-slate-300" : "border-red-700"
              } border-slate-300 border rounded text-sm text-slate-600 w-full outline-slate-400 text-center min-w-[94px] mb-5`}
              type="text"
              placeholder="Enter a value"
            />
            <button
              onClick={handleClick}
              className="py-2 px-5 block bg-blue-600 text-slate-50 rounded font-sans sm:text-xl mx-auto"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
