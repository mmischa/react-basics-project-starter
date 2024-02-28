import { useState } from 'react';
import { RecipePage } from './pages/RecipePage';
import { RecipeListPage } from './pages/RecipeListPage';
import { data } from './utils/data';

const recipesData = data.hits;

export const App = () => {
  // state hook to report a click on a card
  const [recipeSelected, setRecipeSelected] = useState(false);
  // filter hook
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

  // One function to filter the array by name --------------------------------------
  const filterArray = (searchString) => {
    console.log('Searchstring = ' + searchString);
    const matches = recipesData.filter((item) =>
      item.recipe.label.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredRecipes(matches);
   // console.log(matches);
  };

  return (
    <>
      {recipeSelected === true ? (
        // Show if recipe selected
        <RecipePage recipe={filteredRecipes} />
      ) : (
        // Show if NO recipe selected
        <>
          <RecipeListPage
            filterArray={filterArray}
            recipes={filteredRecipes}
            setRecipeSelected={setRecipeSelected}
          />
        </>
      )}
    </>
  );
};

//
