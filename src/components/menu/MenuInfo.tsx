import type { MenuTypes } from "../../App"

const MenuInfo = (props: MenuTypes) => {
    const {title, description, price} = props
return (
    <div>
    <p className="text-lg font-semibold">{title}</p>
    <p className="text-[16px] italic">{description}</p>
    <p className="text-xl text-[#ab5502] font-bold">${price}</p>
  </div>
)
}
export default MenuInfo