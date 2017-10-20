// Determine if an element is in the visible viewport
export const isPartiallyInViewport = (element) => {
  var rect = element.getBoundingClientRect();
  var vHeight = window.innerHeight || document.documentElement.clientHeight;

  // Return false if it's not in the viewport,
  // else it returns true.
  return !(rect.bottom < 0 || rect.top > vHeight);
};

// Determine if an element is fully in the visible viewport
export const isFullyInViewport = (element) => {
  var rect = element.getBoundingClientRect();
  var vHeight = window.innerHeight || document.documentElement.clientHeight;

  // Return false if it's not in the viewport,
  // else it returns true.
  return rect.top >= 0 && rect.bottom <= vHeight;
};
