import { useState } from 'react';
import { RecipePage } from './pages/RecipePage';
import { RecipeListPage } from './pages/RecipeListPage';
import { data } from './utils/data';
import { theme } from './utils/theme';
import { ChakraProvider, Box } from '@chakra-ui/react';

const recipesData = data.hits;

export const App = () => {
  // state hook to report a click on a card
  const [recipeSelected, setRecipeSelected] = useState(false);
  // filter state hook
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);
  // searchinput
  const [searchString, setSearchString] = useState('');

  // One function to filter the array by name --------------------------------------
  const filterArray = (searchString) => {
    console.log('Searchstring = ' + searchString);
    searchString = searchString.toLowerCase();

    const matches = recipesData.filter(
      (item) => 
        item.recipe.label.toLowerCase().includes(searchString)     
        // WAAROM WERKT DIT NIET?!
        // || item.recipe.healthLabels.map((label) =>
        //  label.toLowerCase().includes(searchString)
        // )}
    );

    // console.table('##################' + matches);

    setFilteredRecipes(matches);
  };
  // reset all input --------------------------------------------------------------
  const resetState = () => {
    const searchString = '';
    setSearchString(searchString);
    filterArray(searchString);
    setRecipeSelected(false);
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <Box w="100%" h="100vw">
          {recipeSelected === true ? (
            // Show if recipe selected
            <RecipePage recipe={filteredRecipes} resetState={resetState} />
          ) : (
            // Show if NO recipe selected
            <>
              <RecipeListPage
                filterArray={filterArray}
                recipes={filteredRecipes}
                setRecipeSelected={setRecipeSelected}
                setSearchString={setSearchString}
                searchString={searchString}
              />
            </>
          )}
        </Box>
      </ChakraProvider>
    </>
  );
};

//
