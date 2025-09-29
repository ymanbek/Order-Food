import type { MenuTypes } from "../../App";
import OrderItem from "./OrderItem";
import OrderTotal from "./OrderTotal";

interface OrdersProps {
  onClose: () => void;
  orders: MenuTypes[];
  setOrders: React.Dispatch<React.SetStateAction<MenuTypes[]>>;
}

const Orders = ({ onClose, orders, setOrders }: OrdersProps) => {
  const removeHandler = (id: string) => {
    setOrders((prev) => prev.filter((item) => item.id !== id));

    sessionStorage.removeItem(`plus-${id}`);
  };

  const renderOrders = () => {
    return orders.map((item) => {
      return <OrderItem {...item} key={item.id} onRemove={removeHandler} />;
    });
  };

  return (
    <div className="max-w-2xl w-[600px] bg-white rounded-2xl p-8 ">
      {renderOrders()}
      <OrderTotal onClose={onClose} hasOrders={orders} />
    </div>
  );
};
export default Orders;
