import useMediaQuery from '@mui/material/useMediaQuery';

const useIsOnMobile = () => {
  return useMediaQuery('(max-width:900px)');
}

export default useIsOnMobile;