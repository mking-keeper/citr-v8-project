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

export default Pet;
