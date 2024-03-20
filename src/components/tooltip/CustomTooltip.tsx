import React, { useState, ReactElement, FC, memo } from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { Badge, CircularProgress, IconButton } from '@mui/material';
import { IoMdCloseCircle } from 'react-icons/io';
import html2canvas from 'html2canvas';
import {
  DndContext,
  closestCorners,
  useSensor,
  useSensors,
  KeyboardSensor,
  PointerSensor,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { Task } from '../draggable/Task';

interface LinkTabProps {
  selected?: boolean;
  children?: React.ReactNode;
  label: string;
  href: string;
}

const TabsTooltip: React.FC<LinkTabProps> = memo(
  ({ label, href, children }) => {
    const [screenshot, setScreenshot] = useState('');
    const [loadedScreen, setLoadedScreen] = useState(false);

    const handleTooltipOpen = async () => {
      if (!screenshot) {
        const canvas = await html2canvas(
          document.querySelector('body') as HTMLElement,
        );
        const imageScreen = canvas.toDataURL('image/png');
        setScreenshot(imageScreen);
      }
    };

    const tooltipContent = (
      <Box
        sx={{
          fontSize: '12px',
          fontWeight: 'bolder',
          margin: '3px',
          width: '180px',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '15px',
            alignItems: 'center',
          }}
        >
          <Badge
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: '#44b700',
                color: '#44b700',
                '&::after': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  animation: 'ripple 1.2s infinite ease-in-out',
                  border: '1px solid currentColor',
                  content: '""',
                },
              },
              '@keyframes ripple': {
                '0%': {
                  transform: 'scale(.8)',
                  opacity: 1,
                },
                '100%': {
                  transform: 'scale(2.4)',
                  opacity: 0,
                },
              },
            }}
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          />

          <Box>Status page: {label}</Box>
        </Box>
        <Box>Page url: {href}</Box>

        {screenshot ? (
          <Box>
            <img
              onLoad={() => setLoadedScreen(true)}
              src={screenshot}
              alt="Tab Screenshot"
              style={{
                margin: 0,
                maxHeight: '120px',
                opacity: loadedScreen ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
              }}
            />
          </Box>
        ) : (
          <Box
            sx={{
              height: '120px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '10px',
            }}
          >
            <CircularProgress color="inherit" thickness={6} size={25} />
          </Box>
        )}
      </Box>
    );

    return (
      <Tooltip
        onOpen={handleTooltipOpen}
        placement="bottom"
        title={tooltipContent}
        arrow
        TransitionComponent={Zoom}
      >
        {children as ReactElement}
      </Tooltip>
    );
  },
);

const LinkTab: FC<LinkTabProps> = memo((props) => {
  const { href, label } = props;

  return (
    <Task id={href}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <TabsTooltip {...props}>
          <Tab
            aria-current={props?.selected ? 'page' : undefined}
            href={href}
            label={label}
          />
        </TabsTooltip>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Tooltip title="Закрыть" arrow placement="top">
            <IconButton size="small" sx={{ ml: 0.5 }}>
              <IoMdCloseCircle fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Task>
  );
});

export function NavTabs() {
  const [tabs, setTabs] = useState([
    { label: 'Page One', href: 'drafts' },
    { label: 'Page Two', href: 'trash' },
    { label: 'Page 3', href: 'trash3' },
    { label: 'Page 4', href: 'trash4' },
    { label: 'Page 5', href: 'trash5' },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const getTaskPos = (id: string) => tabs.findIndex((task) => task.href === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event as {
      active: { id: string };
      over: { id: string };
    };

    if (active.id === over.id) return;

    const originalPos = getTaskPos(active.id);
    const newPos = getTaskPos(over.id);

    setTabs(arrayMove(tabs, originalPos, newPos));
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={tabs} strategy={horizontalListSortingStrategy}>
        <Tabs
          variant="scrollable"
          scrollButtons
          value={tabs.findIndex((task) => task.href === 'trash')}
          aria-label="nav tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          {tabs.map((tab) => (
            <LinkTab href={tab.href} key={tab.href} label={tab.label} />
          ))}
        </Tabs>
      </SortableContext>
    </DndContext>
  );
}
