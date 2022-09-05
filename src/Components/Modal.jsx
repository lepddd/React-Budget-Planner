import useBudgetStore from "../Stores/store";
import { useRef } from "react";
const Modal = () => {
  const isOpen = useBudgetStore((state) => state.isOpen);
  const updateModal = useBudgetStore((state) => state.updateModal);
  const updateBudget = useBudgetStore((state) => state.updateBudget);

  const regexp = /^[0-9]+$/;

  const inputValue = useRef();

  const handleClick = () => {
    if (!inputValue.current.value) return alert("Enter a valid value!");

    if (!inputValue.current.value.match(regexp))
      return alert("Enter a valid value!");

    updateBudget(inputValue.current.value);
    updateModal();
  };

  return (
    <>
      {isOpen && (
        <div className="w-full h-screen bg-neutral-900 absolute flex items-center justify-center">
          <div className="p-5 bg-white rounded">
            <input
              ref={inputValue}
              className="p-2.5 border-slate-300 border rounded text-sm text-slate-600 w-full outline-slate-400 text-center min-w-[94px] mb-5"
              type="text"
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