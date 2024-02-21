import { useState } from 'react';
import { RecipePage } from './pages/RecipePage';
import { RecipeListPage } from './pages/RecipeListPage';
import { data } from './utils/data';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  const handleClick = (label) => {
    setSelectedRecipe(label);
  };

  const recipes = data.hits;

  console.log(recipes);
  console.log(selectedRecipe);
  console.log(data.hits[2].recipe);

  return (
    <>
      {selectedRecipe ? (
        // Show if recipe selected
        <RecipePage recipe={recipes[2].recipe} />
      ) : (
        // Show if NO recipe selected
        <>
          <RecipeListPage recipes={recipes} handleClick={handleClick} />
        </>
      )}
    </>
  );
};

//
