import type { MenuTypes } from "../../App";
import Button from "../UI/Button";

interface OrderTotalProps {
  onClose: () => void;
  hasOrders: MenuTypes[];
}

const OrderTotal = ({ onClose, hasOrders }: OrderTotalProps) => {
  const total = hasOrders.reduce((acc, item) => {
    const amountt = Number(item.amount) || 0;
    return acc + item.price * amountt;
  }, 0);

  return (
    <div>
      <div className="flex justify-between mt-7">
        <div className="text-bolder text-2xl">Total Amount</div>
        <div className="text-[#ad5502] text-xl font-bold">
          ${total.toFixed(2)}
        </div>
      </div>
      <div className="flex justify-end mt-6 gap-4">
        <Button variant="outline" size="large" onClick={onClose}>
          Close
        </Button>
        {hasOrders.length > 0 && (
          <Button variant="primary" size="large">
            Order
          </Button>
        )}
      </div>
    </div>
  );
};
export default OrderTotal;
