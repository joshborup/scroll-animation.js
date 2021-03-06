import '../styles/animations.css';

import raf from 'raf';
import debounce from 'lodash/debounce';
import { isPartiallyInViewport } from './viewport-utils';

function ScrollAnimations() {
  let animation_elements = Array.from(document.querySelectorAll('.animation-element'));

  // Loops through each element, passing it through a utility function that detects
  // if an element's edges are partially inside the browser's viewport.
  // If the utility function returns true, the 'in-view' class is added to the element.
  const check_if_in_view = () => {
    animation_elements.forEach((element) => {
      if (isPartiallyInViewport(element)) {
        element.classList.add('in-view');
      } else if (element.classList.contains('in-view')) {
        element.classList.remove('in-view');
      }
    });
  };

  const handleScroll = () => {
    raf(check_if_in_view);
  };

  const handleResize = () => {
    check_if_in_view();
  };

  const debouncedResizeHandler = debounce(handleResize, 60);

  const bindListeners = () => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', debouncedResizeHandler);
  };

  // run once on load then bind scroll event listener.
  const init = () => {
    check_if_in_view();
    bindListeners();
  };

  // Kick everything off
  init();
}

ScrollAnimations();
