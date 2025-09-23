import "./App.css";
import Button from "./components/UI/Button";
import Plus from "./components/UI/ Plus";
import Minus from "./components/UI/Minus";

const App = () => {
  return (
    <div>
      <Button variant="outline" size="small">
        <Plus />
      </Button>
      <Button variant="outline" size="small">
        <Minus />
      </Button>
      <Button variant="outline" size="large" leftIcon={<Plus />}>
        Chon baskych
      </Button>
      <Button variant="primary" size="large">
        Icon jok
      </Button>
    </div>
  );
};

export default App;
