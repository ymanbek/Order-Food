import Basket from "./Basket";

const Header = () => {
  return (
    <header className="bg-[#8A2B06] flex justify-between items-center max-w-[350px] m-auto max-h-[35px]">
      <h2 className="text-[#FFFFFF] w-[226px] h-[57px] flex items-center pl-[60px] text-[11px] ">
        ReactMeals
      </h2>
      <Basket />
    </header>
  );
};
export default Header;
