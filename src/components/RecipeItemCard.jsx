import { TagList } from './TagList';
import { Image, Stack, Text, Card, CardBody, Heading } from '@chakra-ui/react';

export const RecipeItemCard = ({ recipe, clickFn }) => {
  const healthLabelsToshow = ['vegan', 'Vegetarian', 'kidney-friendly'];

  return (
    <Card
     
      transition="all .5s ease-in"
      _hover={{
        transition: 'all .3s ease-out',
        cursor: 'pointer',
        bgColor: 'blue.100',
      }}
      onClick={() => {
       clickFn(recipe.label)
      }}
    >
      <CardBody>
        {/* IMAGE  ------------------------------------- */}
        <Image
          src={recipe.image}
          height="150px"
          width="100%"
          objectFit="cover"
        />
        <Stack mt="6" spacing="3">
          {/* TEXT ------------------------------------- */}
          <Text fontSize="sm">{recipe.mealType}</Text>
          <Heading size="md">{recipe.label}</Heading>
          {/* HEALTHLABELS ----------------------------- */}

          <TagList items={recipe.healthLabels} showItems={healthLabelsToshow} />

          {/* DIETLABELS ------------------------------- */}
          {recipe.dietLabels.length > 0 && (
            <>
              <TagList items={recipe.dietLabels} />
            </>
          )}

          {/* TYPE OF DISH ------------------------------ */}
          <Text fontSize="sm">Dish: {recipe.dishType}</Text>

          {/* CAUTION ----------------------------------- */}
          {recipe.cautions.length > 0 && (
            <>
              <Text fontSize="sm">Caution:</Text>
              <TagList items={recipe.cautions} />
            </>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
