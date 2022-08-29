import { useMediaQuery } from '@mantine/hooks';

function useBreakpoint() {
  const isSm = useMediaQuery('(max-width: 768px)');

  return { isSm };
}

export default useBreakpoint;
