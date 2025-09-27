import type { MenuTypes } from "../../App";
import MenuItem from "./MenuItem";

type MenuInnerTypes = MenuTypes;
const Menu = (props: {
  menu: MenuInnerTypes[];
  onAdd: (params: MenuTypes) => void;
}) => {
  const { menu, onAdd } = props;
  return (
    <div className="bg-[#474141] p-13">
      <ul className="max-w-[1000px] m-auto bg-white p-13 rounded-2xl mt-20">
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            id={item.id}
            price={item.price}
            description={item.description}
            onAdd={onAdd}
          />
        ))}
      </ul>
    </div>
  );
};
export default Menu;
