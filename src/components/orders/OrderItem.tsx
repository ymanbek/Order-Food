import type { MenuTypes } from "../../App";
import OrderItemActions from "./OrderItemActions";
import OrderItemInfo from "./OrderItemInfo";

const OrderItem = ({ title, price, amount }: MenuTypes) => {
  return (
    <div className="flex items-center justify-between border-b border-b-[#6d6d6d]">
      <OrderItemInfo price={price} amount={amount || "1"} title={title} />
      <OrderItemActions />
    </div>
  );
};
export default OrderItem;
