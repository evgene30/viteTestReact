import React, { useState, MouseEvent, ReactElement, FC, memo } from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { IconButton } from '@mui/material';
import { IoMdCloseCircle } from 'react-icons/io';

interface LinkTabProps {
  label: string;
  href: string;
  selected: boolean;
  onClose: () => void;
}

const isModifiedEvent = (event: MouseEvent<HTMLAnchorElement>) =>
  event.defaultPrevented ||
  event.button !== 0 ||
  event.metaKey ||
  event.ctrlKey ||
  event.altKey ||
  event.shiftKey;

const TabsTooltip: React.FC<LinkTabProps & { children: React.ReactNode }> =
  memo(({ selected, label, href, children }) => {
    if (selected) {
      console.log(href, label);

      return <>{children}</>;
    }

    const tooltipContent = (
      <Box
        sx={{
          width: '100px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div>{label}</div>
        <div>{href}</div>
      </Box>
    );

    return (
      <Tooltip
        placement="bottom"
        title={tooltipContent}
        arrow
        TransitionComponent={Zoom}
        describeChild={!selected}
      >
        {children as ReactElement}
      </Tooltip>
    );
  });

const LinkTab: FC<LinkTabProps> = memo((props) => {
  const { onClose } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <TabsTooltip {...props}>
        <Tab
          component="a"
          onClick={(e) => {
            if (!isModifiedEvent(e)) {
              console.log(props?.href);
              e.preventDefault();
            }
          }}
          aria-current={props?.selected ? 'page' : undefined}
          {...props}
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
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            size="small"
            sx={{ ml: 0.5 }}
          >
            <IoMdCloseCircle fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
});

export function NavTabs() {
  const [value, setValue] = useState(0);

  const [tabs, setTabs] = useState([
    { label: 'Page One', href: '/drafts' },
    { label: 'Page Two', href: '/trash' },
    { label: 'Page 3', href: '/trash3' },
    { label: 'Page 4', href: '/trash4' },
    { label: 'Page 5', href: '/trash5' },
  ]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (!isModifiedEvent(event as MouseEvent<HTMLAnchorElement>)) {
      setValue(newValue);
    }
  };

  const handleCloseTab = (tabIndex: number): void => {
    const newTabs = tabs.filter((_, index) => index !== tabIndex);
    setTabs(newTabs);
    if (value >= tabIndex && value > 0) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        variant="scrollable"
        scrollButtons
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {tabs.map((tab, index) => (
          <LinkTab
            key={tab.href}
            label={tab.label}
            href={tab.href}
            selected={value === index}
            onClose={() => handleCloseTab(index)}
          />
        ))}
      </Tabs>
    </Box>
  );
}
