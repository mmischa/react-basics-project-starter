import { TagList } from './TagList';
import { Image, Stack, Text, Card, CardBody, Heading } from '@chakra-ui/react';

export const RecipeItemCard = ({ recipe, clickFn }) => {
  const healthLabelsToshow = ['vegan', 'Vegetarian', 'kidney-friendly'];

  return (
    <Card
      variant="filled"
      borderRadius="1rem"
      bgColor="warmwhite.200"
      transition="all .5s ease-in"
      _hover={{
        transition: 'all .3s ease-out',
        cursor: 'pointer',
        bgColor: 'warmwhite.600',
      }}
      onClick={() => {
        clickFn(recipe.label);
      }}
    >
      <CardBody>
        {/* IMAGE  ------------------------------------- */}
        <Image
          src={recipe.image}
          height="220px"
          width="100%"
          objectFit="cover"
          borderRadius="1rem"
        />
        <Stack mt="6" spacing="3">
          {/* TEXT ------------------------------------- */}
          <Stack spacing="0">
            <Text fontSize="xs" fontWeight="bold"  textTransform="uppercase">
              {recipe.mealType}
            </Text>
            <Heading fontSize="2xl" lineHeight="base">
              {recipe.label}
            </Heading>
          </Stack>

          {/* HEALTHLABELS ----------------------------- */}

          <TagList
            items={recipe.healthLabels}
            showItems={healthLabelsToshow}
            color={'yellow'}
          />

          {/* DIETLABELS ------------------------------- */}
          {recipe.dietLabels.length > 0 && (
            <>
              <TagList items={recipe.dietLabels} color={'green'} />
            </>
          )}

          {/* TYPE OF DISH ------------------------------ */}
          <Text fontSize="sm">Dish: {recipe.dishType}</Text>

          {/* CAUTION ----------------------------------- */}
          {recipe.cautions.length > 0 && (
            <>
              <Text fontSize="sm" fontWeight="semibold">
                Caution:
              </Text>
              <TagList items={recipe.cautions} color={'orange'} />
            </>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
