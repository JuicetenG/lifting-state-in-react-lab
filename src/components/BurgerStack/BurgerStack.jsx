import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.map((ingredient, index) => (
        <li key={index} style={{backgroundColor: ingredient.color}}>
          <Ingredient ingredient={ingredient} removeFromBurger={removeFromBurger} />
        </li>
      ))}
    </ul>
  );
};


export default BurgerStack;