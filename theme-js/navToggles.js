//provides script for dropdown of navigation

const menuToggle = document.querySelector('.j-menu-toggle');

// global boolean to determine if menu is opened. Multiple click listener
// can be applied to various elements

let menuOpened = false;

menuToggle.addEventListener('click', () => {
  // get menu arrow element inside of listener to make sure font-awesome svg conversion has been appleid
  const menuArrow = document.querySelector('.fa-chevron-circle-down');
  if(!menuOpened) {
    menuArrow.classList.add('menu-opened');
    menuArrow.classList.remove('menu-closed');
    menuOpened = !menuOpened;
  } else {
    menuArrow.classList.remove('menu-opened');
    menuArrow.classList.add('menu-closed');
    menuOpened = !menuOpened;
  }
});