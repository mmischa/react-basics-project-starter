import { Input } from '@chakra-ui/react';
//import { useState } from 'react';

export const SearchField = ({ searchString, clickFn }) => {
  return (
    <Input
      type="text"
      value={searchString}
      onChange={clickFn}
      placeholder="Type to search"
    />
  );
};
