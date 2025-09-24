import Korzina from "./Korzina";

const Basket = () => {
  return (
    <div className="bg-[#5A1F08] rounded-4xl flex w-[100px] h-[23px] items-center justify-center mr-[20px]">
      <Korzina />
      <p className="text-[#FFFFFF] text-[6px] ml-1.5">Your Cart</p>
      <p className="bg-[#8A2B06] text-[#FFFFFF] text-[10px] w-[23px] h-[17px] text-center rounded-2xl ml-1.5">
        7
      </p>
    </div>
  );
};

export default Basket;
