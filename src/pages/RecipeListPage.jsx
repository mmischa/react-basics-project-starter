import { SimpleGrid, Heading, Container } from '@chakra-ui/react';

import { RecipeItemCard } from '../components/RecipeItemCard';
import { SearchField } from '../components/SearchField';
// import { useEffect } from 'react';
import { useState } from 'react';
import { data } from '../utils/data';

const recipesData = data.hits;

export const RecipeListPage = ({ setSelectedRecipe }) => {
  const [searchString, setSearchString] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

  console.log(searchString);

  //Searchfield handler
  const inputChangeHandler = (e) => {
    const searchString = e.target.value;
    setSearchString(searchString);
    const filteredItems = recipesData.filter((recipe) =>
      recipe.recipe.label.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredRecipes(filteredItems);
    console.log(filteredItems);
  };

  //cardclickhandler
  const onClickHandler = (recipeName) => {
    console.log(recipeName);
    console.log(recipesData);

    const matchingRecipe = recipesData.filter(
      (recipe) => recipe.recipe.label == recipeName
    );
    setSelectedRecipe(matchingRecipe);
    console.log(matchingRecipe);
  };

  return (
    <Container maxW="1480px" padding="16px" flexDir="row">
      <Heading>Your Recipe App</Heading>
      <SearchField clickFn={inputChangeHandler} searchString={searchString} />
      <SimpleGrid
        spacing="32px"
        templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
      >
        {filteredRecipes.map((item) => (
          <RecipeItemCard
            key={item.recipe.label}
            recipe={item.recipe}
            clickFn={onClickHandler}
            width="230px"
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};
