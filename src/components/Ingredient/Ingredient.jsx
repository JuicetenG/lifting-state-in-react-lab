
const Ingredient = (props) => {
  return (
      <>
        <p>{props.ingredient.name}</p>
        {props.removeFromBurger ? (
          <button onClick={() => props.removeFromBurger(props.ingredient)}>X</button> 
        ) : (
          <button onClick={() => props.addToBurger(props.ingredient)}>+</button>
        )}
      </>
  );
};


export default Ingredient;