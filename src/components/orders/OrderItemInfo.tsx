interface OrderItemInfoProps {
  title: string;
  price: number;
  amount: string;
}

const OrderItemInfo = ({ title, price, amount }: OrderItemInfoProps) => {
  return (
    <div className="flex flex-col py-6">
      <p className="text-lg font-semibold">{title}</p>
      <div className="flex flex-row mt-3 gap-12">
        <p className="text-[#ad5502] text-xl font-bold">${price}</p>
        <div className="border border-[#6d6d6d] rounded-md w-11.5 h-9 text-[16px] font-bold flex items-center justify-center">
          x {amount}
        </div>
      </div>
    </div>
  );
};
export default OrderItemInfo;
