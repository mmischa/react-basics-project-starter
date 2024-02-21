import { Flex } from '@chakra-ui/react';
import { TagItem } from './Tagitem';

export const TagList = ({ items, showItems }) => {


  // Filter Optional itemss -------------------------------------  
  if (showItems !== undefined) {
    // console.log('---------------' + showItems);
    showItems = showItems.map((item) => item.toLowerCase());
    items = items.filter((item) => showItems.includes(item.toLowerCase()));
    // console.log('AFTER' + items);
  }

  return (
    <Flex gap="2" flexWrap="wrap">
      {items.map((tag) => (
        <TagItem key={tag.toString()} text={tag} />
      ))}
    </Flex>
  );
};
