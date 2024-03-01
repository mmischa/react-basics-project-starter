import { Flex, Tag } from '@chakra-ui/react';

export const TagList = ({ items, showItems, color }) => {
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
        <Tag key={tag.toString()} bgColor={color}>{tag}</Tag>
        // <TagItem key={tag.toString()} text={tag} color={"red"} />
      ))}
    </Flex>
  );
};
