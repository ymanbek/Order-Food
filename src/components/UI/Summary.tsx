import Kartinka from "../../assets/images/pexels-alexy-almond-3756523 1.png";
import Manu from "./Manu";

const Summary = () => {
  return (
    <summary className="max-w-[350px] m-auto relative">
      <img src={Kartinka} alt="Foods" />
      <div className="bg-[#383838] text-white w-[200px] h-[70px] flex flex-col gap-2  justify-center  text-center rounded-xl absolute  left-1/2 -translate-x-1/2 -translate-y-1/2  ">
        <h1 className="text-[10px]">Delicious food, delivered to you</h1>
        <p className="text-[4px]">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious
          <br />
          lunch or dinner at home.
        </p>
        <p className="text-[4px] ">
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by
          <br />
          experienced chefs!
        </p>
      </div>
      <Manu />
    </summary>
  );
};
export default Summary;
