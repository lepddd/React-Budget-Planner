import Budget from "./Budget";
import Remaning from "./Remaning";
import Spend from "./Spend";

const Header = () => {
  return (
    <header className="flex flex-col gap-1 mb-4 lg:flex-row lg:gap-2">
      <Budget />
      <Remaning />
      <Spend />
    </header>
  );
};

export default Header;
