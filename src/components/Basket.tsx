import BasketIcon from "./UI/BasketIcon";

interface BasketProps {
  countofFood: number
  showOrder: () => void
}

const Basket = (props: BasketProps) => {
  const {countofFood, showOrder} = props
  return (
    <div onClick={showOrder} className="bg-[#5a1f08] py-[17px] px-[32px] rounded-4xl flex gap-6 text-white">
      <div className="flex items-center gap-3">
        <BasketIcon />
        <p>Your Cart</p>
      </div>
      <div className="bg-[#8a2b06] py-1 px-5 rounded-4xl cursor-pointer">{countofFood}</div>
    </div>
  );
};
export default Basket;
