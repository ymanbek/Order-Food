import maineBg from "../assets/images/pexels-alexy-almond-3756523 1.png";
const Summary = () => {
  return (
    <div
      className="min-h-100 bg-center bg-no-repeat bg-cover relative flex items-center justify-center "
      style={{ backgroundImage: `url(${maineBg})` }}
    >
      <div className="bg-[#383838] text-white max-w-[854px] m-auto px-[54px] py-9 rounded-3xl text-center absolute bottom-[-95px]">
        <h3 className="text-4xl font-bold">Delicious Food, Delivered To You</h3>
        <p className="text-[20px] mt-7">
          Choose your favorite meal from our broad selection of available meals
          and enjoy adelicious lunch or dinner at home.
        </p>
        <p className="text-[20px] mt-5">
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
};
export default Summary;
