import { useMediaQuery } from '@mui/material';

const CheckMediaQuery = () => {
  const isDesktop = useMediaQuery('(min-width: 1240px)');

  if (isDesktop) {
    return true;
  }
};

export { CheckMediaQuery };
