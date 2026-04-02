import { recipes } from "./data.js";

function Recipe({ name, ingredients }) {
  return (
    <>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(({ id, name, ingredients }) => (
        <Recipe key={id} name={name} ingredients={ingredients} />
      ))}
    </div>
  );
}
