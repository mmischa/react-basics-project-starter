import {
  Flex,
  Text,
  Image,
  Heading,
  Container,
  Stack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { TagList } from '../components/TagList';

export const RecipePage = ({ recipe }) => {
  console.log('---------------' + recipe[0].recipe.label);
  recipe = recipe[0].recipe;
  return (
    <>
      <Container maxW="1480px" padding="64px" flexDir="row">
        <Image
          src={recipe.image}
          height="350px"
          width="100%"
          objectFit="cover"
        />
        <Flex>
          {/* LEFT SIDE ************************************/}
          <Stack>
            <Text fontSize="sm">{recipe.mealType}</Text>
            <Heading>{recipe.label}</Heading>

            <Text fontSize="sm">Total cooking time:</Text>
            <Text fontSize="sm">{recipe.totalTime}</Text>

            <Text fontSize="sm">Servings:</Text>
            <Text fontSize="sm">{recipe.yield}</Text>

            <Text fontSize="sm">Ingredients:</Text>
            <UnorderedList>
              {recipe.ingredientLines.map((ingr, index) => (
                <ListItem key={index}> {ingr} </ListItem>
              ))}
            </UnorderedList>
          </Stack>

          {/* RIGHT SIDE ***********************************/}
          <Stack>
            {/* HEALTHLABELS ----------------------------- */}
            <Text>Healthlabel</Text>
            <TagList items={recipe.healthLabels} />

            {/* DIETLABELS ------------------------------- */}
            {recipe.dietLabels.length > 0 && (
              <>
                <Text>Diet:</Text>
                <TagList items={recipe.dietLabels} />
              </>
            )}

            {/* CAUTION ----------------------------------- */}
            {recipe.cautions.length > 0 && (
              <>
                <Text fontSize="sm">Caution:</Text>
                <TagList items={recipe.cautions} />
              </>
            )}

            {/* NUTRITION ----------------------------------- */}
            <Text>Total Nutrients</Text>
            <Flex>
              <Stack>
                <Text>{recipe.totalNutrients.ENERC_KCAL.label}</Text>
                <Text>{recipe.totalNutrients.ENERC_KCAL.quantity}</Text>
              </Stack>
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </>
  );
};
