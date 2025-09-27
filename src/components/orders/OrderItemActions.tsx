import Plus from "../UI/ Plus";
import Button from "../UI/Button";
import Minus from "../UI/Minus";

const OrderItemActions = () => {
    return ( 
        <div className="flex items-center gap-3.5">
        <Button variant="outline" size="small">
          <Plus />
        </Button>
        <Button variant="outline" size="small">
          <Minus />
        </Button>
      </div>
    )
}
export default OrderItemActions;