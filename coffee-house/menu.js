const data = [
  {
    "name": "Irish coffee",
    "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    "price": "7.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Kahlua coffee",
    "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    "price": "7.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Honey raf",
    "description": "Espresso with frothed milk, cream and aromatic honey",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Ice cappuccino",
    "description": "Cappuccino with soft thick foam in summer version with ice",
    "price": "5.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Espresso",
    "description": "Classic black coffee",
    "price": "4.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Latte",
    "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Latte macchiato",
    "description": "Espresso with frothed milk and chocolate",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Coffee with cognac",
    "description": "Fragrant black coffee with cognac and whipped cream",
    "price": "6.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Moroccan",
    "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    "price": "4.50",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Ginger",
    "description": "Original black tea with fresh ginger, lemon and honey",
    "price": "5.00",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Cranberry",
    "description": "Invigorating black tea with cranberry and honey",
    "price": "5.00",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Sea buckthorn",
    "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    "price": "5.50",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Marble cheesecake",
    "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    "price": "3.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Red velvet",
    "description": "Layer cake with cream cheese frosting",
    "price": "4.00",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Cheesecakes",
    "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Creme brulee",
    "description": "Delicate creamy dessert in a caramel basket with wild berries",
    "price": "4.00",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Pancakes",
    "description": "Tender pancakes with strawberry jam and fresh strawberries",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Honey cake",
    "description": "Classic honey cake with delicate custard",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Chocolate cake",
    "description": "Cake with hot chocolate filling and nuts with dried apricots",
    "price": "5.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Black forest",
    "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    "price": "6.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  }
];

/* Path to Images*/
const pathToImages = './static/images/';

/*        Products          */
const beverages = document.querySelectorAll('.menu_beverages');

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
const modalItemImageWrapper = modal.querySelector('.image-wrapper');
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
const categories = Object.keys(productsByCategory);

const fillCards = (id = 'coffee') => {
  beverages.forEach((item) => {
    item.classList.remove('show');
  });
  const beveragesActive = document.querySelector(`[data-category=${id}]`);
  beveragesActive.classList.add('show');
  const products = productsByCategory[id];
  products.forEach((item, index) => {
    const beverage = document.createElement('div');
    beverage.classList.add('menu_beverage');
    beverage.classList.add('d-flex');

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image-wrapper');

    const itemImage = document.createElement('img');
    itemImage.classList.add('menu_beverage-image');

    imageWrapper.append(itemImage);
    beverage.append(imageWrapper);

    const info = document.createElement('div');
    info.classList.add('menu_beverage-info');
    info.classList.add('d-flex');

    const itemName = document.createElement('h2');
    itemName.classList.add('menu_beverage-name');

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('menu_beverage-description');

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('menu_beverage-price');

    info.appendChild(itemName);
    info.appendChild(itemDescription);
    info.appendChild(itemPrice);

    beverage.appendChild(info);
    beveragesActive.appendChild(beverage);

    const { name, description, price, category } = item;
    itemName.textContent = name;
    itemDescription.textContent = description;
    
    beverage.id = index + 1;
    itemPrice.textContent = `$${price}`;
    itemImage.src = `${pathToImages}${id}-${index + 1}.png`;
    itemImage.alt = `Image ${name}`;

    beverage.addEventListener(('click'), (e) => {
      e.preventDefault();
      showModal(category, beverage.id);
    });
  });
  /*const products = beveragesActive.querySelectorAll('.menu_beverage');

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
  });*/
};

document.addEventListener('DOMContentLoaded', fillCards());

/*items.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = e.target.closest('.menu_beverages');
    const { category } = parent.dataset;
    const { id } = item;

    showModal(category, id);
  })
})*/

const changeCategory = (id = 'coffee') => {
  tabButtons.forEach((tab) => {
    tab.classList.remove('active');
  })
  const activeTab = document.querySelector(`[data-id=${id}]`);
  const activeBeverage = document.querySelector(`[data-category=${id}]`);
  activeBeverage.innerHTML = '';
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
    const items = document.querySelectorAll('.menu_beverage');
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
  modalItemName.textContent = item.name;
  modalItemDescription.textContent = item.description;
  modalItemPrice.textContent = Number(item.price).toFixed(2);
  modalItemPrice.dataset.price = item.price;

  const modalItemImage = document.createElement('img');
  modalItemImage.classList.add('menu_beverage-image');

  modalItemImage.src = `${pathToImages}${item.category}-${id}.png`;
  modalItemImage.alt = `Image ${item.name}`;

  modalItemImageWrapper.appendChild(modalItemImage);

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

  body.classList.add('no-scroll');
};

const hideModal = () => {
  const modal = document.querySelector('.modal_wrapper');
  modalItemImageWrapper.innerHTML = '';
  modal.classList.remove('show');
  optionTabs.forEach((tab) => {
    tab.checked = false;
  });
  body.classList.remove('no-scroll');
};

modalOverlay.addEventListener('click', hideModal);
closeButton.addEventListener('click', hideModal);

window.addEventListener('resize', (e) => {
  const { clientWidth } = document.documentElement;
  if (clientWidth > 800) {
    showRefresh();
    const items = document.querySelectorAll('.menu_beverage');
    resetStyle(items);
  }
});

