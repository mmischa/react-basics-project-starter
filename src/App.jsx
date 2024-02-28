import { useState } from 'react';
import { RecipePage } from './pages/RecipePage';
import { RecipeListPage } from './pages/RecipeListPage';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState([]);
  

  // const activeRecipe = ( () => selectedRecipe.length  > 0);
  // console.log(activeRecipe);

  return (
    <>
      {selectedRecipe.length > 0 ? (
        // Show if recipe selected
        <RecipePage recipe={selectedRecipe} />
      ) : (
        // Show if NO recipe selected
        <>
          <RecipeListPage setSelectedRecipe={setSelectedRecipe} />
        </>
      )}
    </>
  );
};

//
