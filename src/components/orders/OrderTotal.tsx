import Button from "../UI/Button";

const OrderTotal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div>
      <div className="flex justify-between mt-7">
        <div className="text-bolder text-2xl">Total Amount</div>
        <div className="text-[#ad5502] text-xl font-bold">$200.99</div>
      </div>
      <div className="flex justify-end mt-6 gap-4">
        <Button variant="outline" size="large" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" size="large">
          Order
        </Button>
      </div>
    </div>
  );
};
export default OrderTotal;
