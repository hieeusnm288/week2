import productData from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const productList = document.querySelectorAll(".product-list");
  const tabsCategory = document.querySelectorAll(
    ".product-tab__content__category-text"
  );
  const arrowLeft = document.getElementById("arrow_left");
  const arrowRight = document.getElementById("arrow_right");

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
  let currentSlide = 0;
  function slideInfo(direction) {
    const content = document.getElementById("content");

    if (direction === "right") {
      currentSlide = (currentSlide + 1) % 2; // Loop forward
    } else if (direction === "left") {
      currentSlide = (currentSlide - 1 + 2) % 2; // Loop backward
    }

    // Apply transform based on the currentSlide
    content.style.transform =
      currentSlide === 0 ? "translateX(0)" : "translateX(-100%)";
  }

  arrowLeft.addEventListener("click", () => slideInfo("left"));
  arrowRight.addEventListener("click", () => slideInfo("right"));

  var splide = new Splide(".splide", {
    perPage: 4,
    type: "loop",
    arrows: false,
    pagination: false,
    gap: 10,
    breakpoints: {
      768: {
        perPage: 1.3,
        gap: 5,
      },
    },
  });

  splide.mount();
});
