import data from './data.json';
/* Path to Images*/

const pathToImages = './static/images/';

/*        Products          */
const beverages = document.querySelectorAll('.menu_beverages');
const items = document.querySelectorAll('.menu_beverage');

/* Products sort by category */
const productsByCategory = data.reduce((acc, item) => {
  const category = item['category'];
  if (acc[category]) {
    acc[category].push(item);
  } else {
    acc[category] = [item];
  }
  return acc;
}, []);

/*         Tabs          */
const tabButtons = document.querySelectorAll('[data-id]');

/*    Refresh menu      */
const refreshButton = document.querySelector('.menu_refresh');

/*    Modal      */
const modal = document.querySelector('.modal_wrapper');
const modalOverlay = modal.querySelector('.modal_overlay');
const closeButton = modal.querySelector('.modal_close');
const modalItemName = modal.querySelector('.menu_beverage-name');
const modalItemDescription = modal.querySelector('.menu_beverage-description');
const modalItemPrice = modal.querySelector('.modal_price');
const modalItemImage = modal.querySelector('.menu_beverage-image');
const optionSize = modal.querySelector('[data-option="sizes"]');
const optionAdditive = modal.querySelector('[data-option="additives"]');
const optionWrappers = modal.querySelectorAll('.menu_list-item');
const optionTabs = modal.querySelectorAll('.modal_tab');


const { clientWidth } = document.documentElement;

/* Hide elements after update  */
const resetStyle = (elements) => {
  elements.forEach((element) => {
    element.style.removeProperty('display');
  })
};

/*   Fill cards with data from the object  */
const fillCards = (id = 'coffee') => {
  beverages.forEach((item) => {
    item.classList.remove('show');
  });
  const beveragesActive = document.querySelector(`[data-category=${id}]`);
  beveragesActive.classList.add('show');
  const products = beveragesActive.querySelectorAll('.menu_beverage');

  const { category } = beveragesActive.dataset;

  products.forEach((item, index) => {
    const itemName = item.querySelector('.menu_beverage-name');
    const itemDescription = item.querySelector('.menu_beverage-description');
    const itemPrice = item.querySelector('.menu_beverage-price');
    const itemImage = item.querySelector('.menu_beverage-image');

    const { name, description, price } = productsByCategory[category][index];
    itemName.textContent = name;
    itemDescription.textContent = description
    
    item.id = index + 1;
    itemPrice.textContent = `$${price}`;
    itemImage.src = `${pathToImages}${category}-${index + 1}.png`;
    itemImage.alt = `Image ${name}`;
  });
};

document.addEventListener('DOMContentLoaded', fillCards());

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = e.target.closest('.menu_beverages');
    const { category } = parent.dataset;
    const { id } = item;

    showModal(category, id);
  })
})

const changeCategory = (id = 'coffee') => {
  tabButtons.forEach((tab) => {
    tab.classList.remove('active');
  })
  const activeTab = document.querySelector(`[data-id=${id}]`);
  activeTab.classList.add('active');
  fillCards(id);
};

const showRefresh = () => {
  refreshButton.classList.add('show');
};

const hideRefresh = () => {
  refreshButton.classList.remove('show');
};

tabButtons.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    const { id } = tab.dataset;
    changeCategory(id);

    productsByCategory[id].length > 4 ? showRefresh() : hideRefresh();
    resetStyle(items);
  })
});

refreshButton.addEventListener('click', (e) => {
  e.preventDefault();
  const activeBeverages = document.querySelector('.menu_beverages.show');
  const items = activeBeverages.querySelectorAll('.menu_beverage');
  items.forEach((beverage) => {
    beverage.style.setProperty('display', 'flex');
  })
  hideRefresh();
});

const calculateTotal = (tabs) => {
  const total = tabs
  .filter((tab) => tab.checked)
  .reduce((acc, item) => {
    acc += Number(item.value);
    return acc;
  }, 0);
  return total;
};

optionTabs.forEach((optionTab) => {
  optionTab.addEventListener('change', () => {
    const { price } = modalItemPrice.dataset;
    modalItemPrice.textContent = (Number(price) + calculateTotal([...optionTabs])).toFixed(2);
  })
});

const fillModalCard = (item, id) => {
  console.log(item.category)
  console.log(id)
  modalItemName.textContent = item.name;
  modalItemDescription.textContent = item.description;
  modalItemPrice.textContent = Number(item.price).toFixed(2);
  modalItemPrice.dataset.price = item.price;
  modalItemImage.src = `${pathToImages}${item.category}-${id}.png`;
  modalItemImage.alt = `Image ${item.name}`;

  const radio = optionSize.querySelectorAll('.modal_tab');
  const sizes = Object.keys(item.sizes);
  
  radio.forEach((el, index) => {
    el.id = sizes[index];
    el.value = item.sizes[el.id]['add-price'];
    
    const label = el.nextElementSibling;
    label.htmlFor = el.id;
    label.textContent = item.sizes[el.id][el.name]
  });

  const checkboxes = optionAdditive.querySelectorAll('.modal_tab');

  checkboxes.forEach((el, index) => {
    const option = item[el.name][index];
    el.id = option.name.toLowerCase();
    el.value = option['add-price'];
    
    const label = el.nextElementSibling;
    label.htmlFor = el.id;
    label.textContent = option.name;
  });
  //calculateTotal([...radio, ...checkboxes])
};

/*optionWrappers.forEach((el) => {
  el.addEventListener('click', () => {
    const tab = el.querySelector('.modal_tab');
    tab.checked = tab.checked ? false : true;
  });
});*/

const showModal = (category, id) => {
  const key = id - 1;
  const item = productsByCategory[category][key];
  fillModalCard(item, id);
  modal.classList.add('show');
  optionTabs[0].checked = true;
};

const hideModal = () => {
  const modal = document.querySelector('.modal_wrapper');
  modal.classList.remove('show');
  optionTabs.forEach((tab) => {
    tab.checked = false;
  });
};

modalOverlay.addEventListener('click', hideModal);
closeButton.addEventListener('click', hideModal);

window.addEventListener('resize', (e) => {
  e.preventDefault();
  const { clientWidth } = document.documentElement;
  if (clientWidth > 900) {
    showRefresh();
    resetStyle(items);
  }
});

