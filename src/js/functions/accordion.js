export function initAccordion(triggerSelector, parentSelector, isToggle) {
  const triggerNodes = document.querySelectorAll(triggerSelector);

  if (!triggerNodes.length > 0) return;

  const needInit = [...triggerNodes].every(
    (el) => !el.classList.contains('is-active')
  );

  if (needInit && !isToggle) {
    triggerNodes[0].parentNode.classList.add('is-active');
  }

  triggerNodes.forEach((el) => {
    el.addEventListener('click', function () {
      const parentNode = el.closest(parentSelector);
      const activeNode = document.querySelector(parentSelector + '.is-active');

      if (isToggle) {
        parentNode.classList.toggle('is-active');
      } else {
        activeNode.classList.remove('is-active');
        parentNode.classList.add('is-active');
      }
    });
  });
}
