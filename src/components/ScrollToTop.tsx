import { ActionIcon, Affix, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { AiFillRocket } from 'react-icons/ai';

function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 13, right: 20 }}>
      <Transition transition='fade' mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            color='violet'
            variant='light'
            size='lg'
            radius='md'
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            <AiFillRocket size={20} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
}

export default ScrollToTop;
