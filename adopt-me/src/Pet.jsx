const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <p>
        <strong>{name}</strong> <em>({animal})</em> is a {breed}
      </p>
    </div>
  );
};

export default Pet;
