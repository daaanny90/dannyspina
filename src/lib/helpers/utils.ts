/**
 * Returns the height of an element, margin and padding included.
 *
 * @param elSelector The target element
 * @returns the height of the element, marign and padding included.
 */
export const outerHeight = (elSelector: string) => {
  const elm = document.querySelector(elSelector);

  const elmHeight = parseInt(
    document.defaultView.getComputedStyle(elm, "").getPropertyValue("height")
  );
  const elmMargin =
    parseInt(
      document.defaultView
        .getComputedStyle(elm, "")
        .getPropertyValue("margin-top")
    ) +
    parseInt(
      document.defaultView
        .getComputedStyle(elm, "")
        .getPropertyValue("margin-bottom")
    );
  const elmPadding =
    parseInt(
      document.defaultView
        .getComputedStyle(elm, "")
        .getPropertyValue("padding-top")
    ) +
    parseInt(
      document.defaultView
        .getComputedStyle(elm, "")
        .getPropertyValue("padding-bottom")
    );
  return elmHeight + elmMargin + elmPadding;
};
