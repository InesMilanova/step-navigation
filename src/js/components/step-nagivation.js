window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#menu");
  initializeMenu(menu);
});

const handleMenuItemClick = (event, menuItems) => {
  let menuItem = event.target;

  // Only handle clicks directly on the `.menu-item` or its children
  while (menuItem && menuItem !== menu) {
    if (menuItem.classList.contains("menu-item")) {
      setActiveMenuItem(menuItem, menuItems);
      return;
    }

    menuItem = menuItem.parentNode;
  }
};

/**
 * @param {Node} menu - The navigation element with id menu
 */
const initializeMenu = (menu) => {
  const menuItems = menu.querySelectorAll(".menu-item");

  menuItems.forEach((menuItem) => {
    const stepCount = menuItem.querySelector(".step-content:first-child");
    stepCount.dataset.number = stepCount.innerHTML;
  });

  menu.addEventListener(
    "click",
    menu.addEventListener("click", (event) =>
      handleMenuItemClick(event, menuItems)
    )
  );
};

/**
 * Set one menu item (step) as active and deactive all other steps;
 * @param {Node} activeItem - The menu item to activate
 * @param {NodeList} allMenuItems - The list of all menu items
 */
const setActiveMenuItem = (activeItem, allMenuItems) => {
  // clear .active class from existing steps;
  allMenuItems.forEach((item) => {
    item.classList.remove("active");
  });

  activeItem.classList.add("active");
  changeStepNumberToImage(activeItem);
};

/**
 * Change the step number of the first span with a check image;
 * @param {Node} menuItem - The menu item (active step) to change the content of
 */
const changeStepNumberToImage = (menuItem) => {
  const span = menuItem.querySelector(".step-content:first-child");

  if (span.innerHTML == span.dataset.number) {
    span.innerHTML =
      "<img src='../../assets/img/check.png' alt='check icon' />";
  }
};
