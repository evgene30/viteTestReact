import React, { useState, MouseEvent, ReactElement, FC, memo } from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { Badge, CircularProgress, IconButton } from '@mui/material';
import { IoMdCloseCircle } from 'react-icons/io';
import html2canvas from 'html2canvas';

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
    const [screenshot, setScreenshot] = useState('');
    const [loadedScreen, setLoadedScreen] = useState(false);
    if (selected) {
      console.log(href, label);

      return <>{children}</>;
    }

    const handleTooltipOpen = async () => {
      if (!screenshot) {
        const canvas = await html2canvas(
          document.querySelector('body') as HTMLElement, // указываем элемент, на котором нужно сделать скриншот
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
                // boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
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
