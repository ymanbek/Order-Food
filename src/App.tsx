import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";
import Summary from "./components/Summary";
import Orders from "./components/orders/Orders";
import Modal from "./components/UI/Modal";

export interface MenuTypes {
  id: string;
  title: string;
  description: string;
  price: number;
  amount?: number;
}

const App = () => {
  const meals = [
    {
      id: "f101",
      title: "Sushi",
      description: "finest fish and veggies",
      price: 22.99,
    },
    {
      id: "f19",
      title: "Pizza",
      description: "A geman specialty!",
      price: 16.0,
    },
    {
      id: "f5",
      title: "Barbecue",
      description: "finest fish and veggies",
      price: 12.99,
    },
    {
      id: "f3",
      title: "Green Bowl",
      description: "Healthy...and green",
      price: 19.99,
    },
  ];

  const [order, setOrder] = useState<MenuTypes[]>([]);
  const [modal, setModal] = useState(true);

  const modalHandler = () => {
    setModal((prevState) => !prevState);
  };

  const addOrderHandler = (params: MenuTypes) => {
    console.log(params);
    const { id, title, description, price, amount } = params;
    const existingOrder = order.find((item) => item.id === id);
    if (!existingOrder) {
      setOrder([
        ...order,
        {
          title: title,
          description: description,
          price: price,
          id: id,
          amount: amount,
        },
      ]);
    }
    if (existingOrder) {
      const updatedOrders = order.map((item) => {
        if (item.id === id) {
          item.amount = Number(Number(existingOrder.amount) + Number(amount));
        }
        return item;
      });
      setOrder(updatedOrders);
    }
  };

  return (
    <div>
      <Header countofFood={order} showOrder={modalHandler} />
      <Summary />
      <Menu menu={meals} onAdd={addOrderHandler} />

      <Modal isOpen={modal} onClose={modalHandler}>
        <Orders onClose={modalHandler} orders={order} setOrders={setOrder} />
      </Modal>
    </div>
  );
};

export default App;
