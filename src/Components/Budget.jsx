import Button from "./Button";

const Budget = ({ budget }) => {
  return (
    <div className="flex w-full min-w-[296px] py-2 px-4 bg-gray-200 justify-between items-center rounded text-gray-700 sm:px-6 sm:py-4">
      <p className="font-sans sm:text-xl">Budget: {budget}</p>
      <Button title={"Edit"} />
    </div>
  );
};

export default Budget;
