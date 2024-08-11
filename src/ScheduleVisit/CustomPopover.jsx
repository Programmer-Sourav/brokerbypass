import React from 'react';
import { Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react';

export default function CustomPopover() {
  return (
    <Popover placement="right" trigger="hover">
      <PopoverTrigger>
        <Button>Hover to Open</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Popover Header</PopoverHeader>
        <PopoverBody>This popover appears on hover and is positioned to the right.</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
