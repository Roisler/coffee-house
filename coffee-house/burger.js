const body = document.querySelector('body');

const burger = document.querySelector('.header-menu_burger');
const headerMenu = document.querySelector('.header-menu');

const navMenuOrigin = document.querySelector('.header-menu_nav');
const navMenu = navMenuOrigin.cloneNode(true);
const navMenuItems = navMenu.querySelectorAll('.header-menu_nav-link');

const mobileMenu = document.createElement('div');
mobileMenu.classList.add('header_mobile-menu');
headerMenu.appendChild(mobileMenu);

const logoMenuOrigin = document.querySelector('.header-menu_coffee-menu');
const logoMenu = logoMenuOrigin.cloneNode(true);

const showMenu = () => {
  burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
      hideMenu();
    } else {
      burger.classList.add('active');
      mobileMenu.classList.add('show');
      mobileMenu.appendChild(navMenu);
      mobileMenu.appendChild(logoMenu);
      navMenu.style = 'display: flex; flex-direction: column';
      logoMenu.style = 'display: flex;';
      body.classList.add('no-scroll');
    }
  });
};

const hideMenu = () => {
  const isModalOpen = () => {
    const modalOpen = document.querySelector('.modal_wrapper.show');
    return !!modalOpen;
  };
  if (!isModalOpen()) {
    burger.classList.remove('active');
    mobileMenu.classList.add('closing');
    mobileMenu.classList.remove('show');
    setTimeout(() => {
    mobileMenu.classList.remove('closing');
    }, 300);
    body.classList.remove('no-scroll');
  }
};

navMenuItems.forEach((item) => {
  item.addEventListener('click', hideMenu);
});

logoMenu.addEventListener('click', (e) => {
  console.log(e)
  hideMenu();
});

showMenu();

window.addEventListener('resize', (e) => {
  const { clientWidth } = document.documentElement;
  if (clientWidth > 768) {
    hideMenu();
  }
});