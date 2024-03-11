import React from 'react';
import { Box } from '@mui/material';
import { aboutStyle } from './style';
import { ActionButton } from '@/components/buttons/ActionButton';
import { NavTabs } from '@/components/tooltip/CustomTooltip';
import { DraggableList } from '@/components/draggable/DraggableList';

export const sortArr = [
  { id: 'item-1', content: 'Первый элемент' },
  { id: 'item-2', content: 'Второй элемент' },
  { id: 'item-3', content: 'Третий элемент' },
];

export const About = () => (
  <Box sx={aboutStyle}>
    <ActionButton data={sortArr}>Open</ActionButton>
    <NavTabs />
    <DraggableList />
  </Box>
);
