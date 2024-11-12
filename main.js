import productData from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const productList = document.querySelectorAll(".product-list");
  const tabsCategory = document.querySelectorAll(
    ".product-tab__content__category-text"
  );

  const renderProduct = (category) => {
    productList[0].innerHTML = "";
    const productRender = productData[category];
    productRender.forEach((product) => {
      productList[0].innerHTML += `
        <div class="product-list-1__item-2fr">
          <img src="${product.img}" alt="Product1" />
          <p class="product-list-1__item__cate">${product.cate}</p>
          <p class="product-list-1__item__name">${product.name}</p>
          ${
            product.price_dis
              ? `
            <div class="product-list-1__item__price">
            <p class="product-list-1__item__sale-price">$${product.price_dis}</p>
            <p class="product-list-1__item__original-price">$${product.price}</p> 
          </div>`
              : `
              <p class="product-list-1__item__price">$${product.price}</p>`
          }
        </div>
  
    `;
    });
    const items = document.querySelectorAll(".product-list-1__item-2fr");
    items[0].classList.add("grid-1");
    items[5].classList.add("grid-6");
  };

  tabsCategory.forEach((tab) => {
    tab.addEventListener("click", () => {
      renderProduct(tab.id);
      tabsCategory.forEach((t) => t.classList.remove("category__active"));
      tab.classList.add("category__active");
    });
  });
  renderProduct("seating");
  const items = document.querySelectorAll(".product-list-1__item-2fr");
  items[0].classList.add("grid-1");
  items[5].classList.add("grid-6");
  var splide = new Splide(".splide", {
    perPage: 4,
    type: "loop",
    arrows: false,
    pagination: false,
    gap: 20,
    // dot: none,
  });

  splide.mount();
});
