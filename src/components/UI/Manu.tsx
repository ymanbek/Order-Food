import Plus from "./ Plus";
import Button from "./Button";

const DUMMY_MEALS = [
  {
    id: 1,
    title: "Sushi",
    description: "finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    title: "Pizza",
    description: "finest fish and veggies",
    price: 16.0,
  },
  {
    id: 3,
    title: "Barbecue",
    description: "finest fish and veggies",
    price: 12.99,
  },
  {
    id: 4,
    title: "Green Bowl",
    description: "finest fish and veggies",
    price: 19.99,
  },
];

const Manu = () => {
  return (
    <main className="bg-[#3f3f3f] h-[160px] flex justify-center">
      <section className="bg-[#FFFFFF] w-[200px] h-[110px] rounded mt-[45px] px-0.5 py-1 ">
        {DUMMY_MEALS.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-gray-200 pb-[1px] last:border-b-0"
          >
            <div>
              <h3 className="text-[6px] font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-500 italic text-[5px]">
                {item.description}
              </p>
              <p className="text-[4px] font-bold text-amber-600 mt-[2px]">
                ${item.price.toFixed(2)}
              </p>
            </div>

            <form className="flex items-center justify-center space-x-3">
              <label className="text-gray-700 font-medium text-[6px]">
                Amount
              </label>
              <input
                type="number"
                min=""
                value="1"
                className="w-4 h-4  border text-center rounded"
              />
              <Button size="large" variant="primary" leftIcon={<Plus />}>
                Add
              </Button>
            </form>
          </div>
        ))}
      </section>
    </main>
  );
};
export default Manu;
