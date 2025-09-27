import type { MenuTypes } from "../App";
import Basket from "./Basket";

interface HeaderProps {
  countofFood: MenuTypes[];
  showOrder: () => void;
}

const Header = (props: HeaderProps) => {
  const { countofFood, showOrder } = props;

  const getBasketFoodCount = () => {
    const result = countofFood.reduce((acc, item) => {
      return acc + +item.amount!;
    }, 0);
    return result;
  };
  return (
    <div className="w-full bg-[#8a2b06] fixed z-10">
      <header className="py-5  text-white flex items-center justify-between w-5xl m-auto ">
        <h2 className="text-3xl weight-bold">ReactMeals</h2>
        <Basket countofFood={getBasketFoodCount()} showOrder={showOrder} />
      </header>
    </div>
  );
};
export default Header;
