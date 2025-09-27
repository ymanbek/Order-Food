import type { MenuTypes } from "../../App";
import OrderItem from "./OrderItem";
import OrderTotal from "./OrderTotal";

interface OrdersProps {
  onClose: () => void;
  orders: MenuTypes[];
}

const Orders = ({ onClose, orders }: OrdersProps) => {
  const renderOrders = () => {
    return orders.map((item) => {
      return <OrderItem {...item} key={item.id}/>;
    });
  };
  return (
    <div className="max-w-2xl w-[600px] bg-white rounded-2xl p-8 ">

      {renderOrders()}
      <OrderTotal onClose={onClose} />
    </div>
  );
};
export default Orders;
