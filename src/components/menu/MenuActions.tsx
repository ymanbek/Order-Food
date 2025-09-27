import { useRef, type ChangeEvent } from "react";
import Plus from "../UI/ Plus";
import Button from "../UI/Button";
import type { MenuTypes } from "../../App";

const MenuActions = (props: {
  onAdd: (params: MenuTypes) => void;
  id: string;
  title: string;
  description: string;
  price: number;
}) => {
  const { onAdd, id, title, description, price } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (elem: ChangeEvent<HTMLFormElement>) => {
    elem.preventDefault();
    const amount = inputRef.current?.value;
    const food = {
      amount: amount ? amount : "1",
      id: id,
      title: title,
      description: description,
      price: price,
    };
    onAdd(food);
  };
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-end">
      <div className="flex items-center justify-end gap-8 mb-4">
        <p>Amount</p>
        <input
          ref={inputRef}
          type="number"
          defaultValue={1}
          className="border border-[#d6d6d6] rounded-b-md w-15 px-3 py-1"
        />
      </div>
      <Button type="submit" variant="primary" size="large" leftIcon={<Plus />}>
        Add
      </Button>
    </form>
  );
};
export default MenuActions;
