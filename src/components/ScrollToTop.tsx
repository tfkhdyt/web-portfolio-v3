import { ActionIcon, Affix, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { BsChevronUp } from 'react-icons/bs';

const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 83, right: 38 }}>
      <Transition transition='fade' mounted={scroll.y > 200}>
        {(transitionStyles) => (
          <ActionIcon
            color='violet'
            variant='light'
            size='lg'
            radius='md'
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            <BsChevronUp size={20} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollToTop;
