import Plus from "../UI/ Plus";
import Button from "../UI/Button";
import Minus from "../UI/Minus";
interface OrderItemActionsProps {
  onPlus: () => void;
  onMinus: () => void;
}
const OrderItemActions = (props: OrderItemActionsProps) => {
  const { onPlus, onMinus } = props;

  return (
    <div className="flex items-center gap-3.5">
      <Button variant="outline" size="small" onClick={onPlus}>
        <Plus />
      </Button>
      <Button variant="outline" size="small" onClick={onMinus}>
        <Minus />
      </Button>
    </div>
  );
};
export default OrderItemActions;
