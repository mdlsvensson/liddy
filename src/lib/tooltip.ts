import { tooltip } from "./stores";

export const tooltipToggle = (el: HTMLElement) => {
  const text = el.dataset.tooltip as string;

  const onMouseOver = () => {
    tooltip.set({
      isVisible: true,
      text,
    });
  };

  function onMouseLeave() {
    tooltip.set({
      isVisible: false,
      text,
    });
  }

  el.addEventListener('mouseover', onMouseOver);
  el.addEventListener('mouseleave', onMouseLeave);

  return {
    destroy() {
      el.removeEventListener('mouseover', onMouseOver);
      el.removeEventListener('mouseleave', onMouseLeave);
    }
  };
};