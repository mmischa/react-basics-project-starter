import {
  Flex,
  Text,
  Image,
  Heading,
  Container,
  Stack,
  UnorderedList,
  ListItem,
  Box,
  Button,
} from '@chakra-ui/react';
import { TagList } from '../components/TagList';

export const RecipePage = ({ recipe, setRecipeSelected }) => {
  // console.log('-------------------------------');
  // console.log("recipe shown = " +recipe[0].recipe.label);
  // console.log('-------------------------------');
  recipe = recipe[0].recipe;

const minutesToHours = (totalMinutes) => {
   
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours === 0 ) {
        return (minutes + ' minutes');
    } else {
    return (hours + " hour and " + minutes + " minutes");
    }
  } 

  return (
    <>
      <Container
        maxW="1480px"
        pl={{ base: '16px', md: '32px' }}
        pr={{ base: '16px', md: '32px' }}
        pb={{ base: '2rem', md: '4rem' }}
        pt={{ base: '2rem', md: '4rem' }}
      >
        <Button
          onClick={() => {
            setRecipeSelected(false);
          }}
          bgColor="warmblack"
          color="white"
          mb="32px"
        >
          Back to overview
        </Button>
        <Image
          src={recipe.image}
          height="350px"
          width="100%"
          objectFit="cover"
        />

        <Flex
          gap="2rem"
          display="flex"
          direction={{ base: 'column', md: 'row' }}
          bgColor="warmwhite.200"
        >
          {/* LEFT SIDE ************************************/}
          <Box w={{ base: '100%', md: '50%' }} p={{ base: '16px', md: '4rem' }}>
            <Stack spacing="24px">
              <Stack>
                <Text fontSize="me" fontWeight="bold" textTransform="uppercase">
                  {recipe.mealType}
                </Text>
                <Heading fontSize="5xl">{recipe.label}</Heading>
              </Stack>
              <Stack>
                <Text fontSize="lg" fontWeight="bold">
                  Total cooking time:
                </Text>
                <Text fontSize="lg">{minutesToHours(recipe.totalTime)}</Text>
              </Stack>
              <Stack>
                <Text fontSize="lg" fontWeight="bold">
                  Servings:
                </Text>
                <Text fontSize="lg">{recipe.yield}</Text>
              </Stack>
              <Stack>
                <Text fontSize="lg" fontWeight="bold">
                  Ingredients:
                </Text>
                <UnorderedList pl="2rem" pt="0" spacing="8px">
                  {recipe.ingredientLines.map((ingr, index) => (
                    <ListItem key={index}> {ingr.replace('*', '')} </ListItem>
                  ))}
                </UnorderedList>
              </Stack>
            </Stack>
          </Box>
          {/* RIGHT SIDE ***********************************/}
          <Box w={{ base: '100%', md: '50%' }} p={{ base: '16px', md: '4rem' }}>
            <Stack spacing="24px">
              {/* HEALTHLABELS ----------------------------- */}
              <Stack>
                <Text fontSize="lg" fontWeight="bold">
                  Healthlabel
                </Text>
                <TagList items={recipe.healthLabels} color={'yellow'} />
              </Stack>

              {/* DIETLABELS ------------------------------- */}
              <Stack>
                {recipe.dietLabels.length > 0 && (
                  <>
                    <Text fontSize="lg" fontWeight="bold">
                      Diet:
                    </Text>
                    <TagList items={recipe.dietLabels} color={'green'} />
                  </>
                )}
              </Stack>

              {/* CAUTION ----------------------------------- */}

              {recipe.cautions.length > 0 && (
                <>
                  <Stack>
                    <Text fontSize="lg" fontWeight="bold">
                      Caution:
                    </Text>
                    <TagList items={recipe.cautions} color={'orange'} />
                  </Stack>
                </>
              )}

              {/* NUTRITION ----------------------------------- */}
              <Stack>
                <Text fontSize="lg" fontWeight="bold">
                  Total Nutrients
                </Text>
                <Flex flexWrap="wrap" gap="32px">
                  {/* Energy ----------------------------------------------------- */}
                  <Stack>
                    <Text fontWeight="bold">
                      {recipe.totalNutrients.ENERC_KCAL.label}
                    </Text>
                    <Text>
                      {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
                    </Text>
                  </Stack>
                  {/* CARBS ----------------------------------------------------- */}
                  <Stack>
                    <Text fontWeight="bold">
                      {recipe.totalNutrients.CHOCDF.label}
                    </Text>
                    <Text>
                      {Math.round(recipe.totalNutrients.CHOCDF.quantity)} g
                    </Text>
                  </Stack>
                  {/* PROTEIN ----------------------------------------------------- */}
                  <Stack>
                    <Text fontWeight="bold">
                      {recipe.totalNutrients.PROCNT.label}
                    </Text>
                    <Text>
                      {Math.round(recipe.totalNutrients.PROCNT.quantity)} g
                    </Text>
                  </Stack>
                  {/* FAT ----------------------------------------------------- */}
                  <Stack>
                    <Text fontWeight="bold">
                      {recipe.totalNutrients.FAT.label}
                    </Text>
                    <Text>
                      {Math.round(recipe.totalNutrients.FAT.quantity)} g
                    </Text>
                  </Stack>
                  {/* CHOLESTEROL ----------------------------------------------------- */}
                  <Stack>
                    <Text fontWeight="bold">
                      {recipe.totalNutrients.CHOLE.label}
                    </Text>
                    <Text>
                      {Math.round(recipe.totalNutrients.CHOLE.quantity)} mg
                    </Text>
                  </Stack>
                  {/* CHOLEsTEROL ----------------------------------------------------- */}
                  <Stack>
                    <Text fontWeight="bold">
                      {recipe.totalNutrients.NA.label}
                    </Text>
                    <Text>
                      {Math.round(recipe.totalNutrients.NA.quantity)} mg
                    </Text>
                  </Stack>
                </Flex>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </>
  );
};
