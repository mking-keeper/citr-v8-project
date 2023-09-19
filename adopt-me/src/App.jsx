import ReactDOM from "react-dom";

const Pet = ({ name, breed }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {name} is a {breed}
      </p>
    </div>
  );
};

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
