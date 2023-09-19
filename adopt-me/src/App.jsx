import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <Pet name="Luna" breed="Havanese" />
      <Pet name="Pepper" breed="Cockatiel" />
      <Pet name="Doink" breed="Mixed" />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
