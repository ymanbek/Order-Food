import { useEffect, useState } from "react";
import type { MenuTypes } from "../../App";
import OrderItemActions from "./OrderItemActions";
import OrderItemInfo from "./OrderItemInfo";

interface OrderItemProps extends MenuTypes {
  onRemove: (id: string) => void;
}

const OrderItem = ({ id, title, price, amount, onRemove }: OrderItemProps) => {
  const [plus, setPlus] = useState<number>(() => {
    const stored = sessionStorage.getItem(`plus-${id}`);
    return stored ? JSON.parse(stored) : amount ? Number(amount) : 1;
  });

  useEffect(() => {
    sessionStorage.setItem(`plus-${id}`, JSON.stringify(plus));

    if (plus === 0) {
      onRemove(id);
    }
  }, [plus, id, onRemove]);

  const amountPlus = () => setPlus((prev) => (prev === 20 ? 20 : prev + 1));
  const amountMinus = () => setPlus((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="flex items-center justify-between border-b border-b-[#6d6d6d]">
      <OrderItemInfo price={price} amount={plus} title={title} />
      <OrderItemActions onPlus={amountPlus} onMinus={amountMinus} />
    </div>
  );
};
export default OrderItem;
