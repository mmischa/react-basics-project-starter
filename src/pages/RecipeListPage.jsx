import { SimpleGrid, Heading, Container, Stack } from '@chakra-ui/react';
import { RecipeItemCard } from '../components/RecipeItemCard';
import { SearchField } from '../components/SearchField';
//import { useState } from 'react';

export const RecipeListPage = ({ searchString, setSearchString, filterArray, recipes, setRecipeSelected }) => {
  

  //Searchfield handler ------------------------------------------------
  const inputChangeHandler = (e) => {
    const searchString = e.target.value;
    setSearchString(searchString);
    filterArray(searchString);
  };

  //cardclickhandler ----------------------------------------------------
  const onClickHandler = (recipeName) => {
    console.log('clickhandle ' + recipeName);
    const searchString = recipeName;
    setSearchString(searchString);
    filterArray(searchString);
    setRecipeSelected(true);
  };

  return (
    <Container
      // bg="beige.100"
      maxW="1480px"
      
      pl="16px"
      pr="16px"
      pt="8rem"
      pb="8rem"
      flexDir="row"
    >
      <Stack spacing="44px">
        <Heading textStyle="h1" fontSize="5xl">
          Mischa&apos;s Recipe App
        </Heading>
        <SearchField clickFn={inputChangeHandler} searchString={searchString} />
        <SimpleGrid
          spacing="32px"
          templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
        >
          {recipes.map((item) => (
            <RecipeItemCard
              key={item.recipe.label}
              recipe={item.recipe}
              clickFn={onClickHandler}
              width="230px"
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};
