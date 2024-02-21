import { SimpleGrid, Heading, Container } from '@chakra-ui/react';
// import { data } from '../utils/data';
import { RecipeItemCard } from '../components/RecipeItemCard';

export const RecipeListPage = ({ recipes , handleClick }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);

  return (
    <Container maxW="1480px" padding="64px" flexDir="row">
      <Heading>Your Recipe App</Heading>
      <SimpleGrid minChildWidth="230px" spacing="32px">
        {recipes.map((item) => (
          <RecipeItemCard
            key={item.recipe.label}
            recipe={item.recipe}
            handleClick={handleClick}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};
