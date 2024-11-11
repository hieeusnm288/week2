import productData from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const productList = document.querySelectorAll(".product-list");
  const tabsCategory = document.querySelectorAll(
    ".product-tab__content__category-text"
  );
  let html = "";
  const renderProduct = (category) => {
    const productRender = productData[category] || [];
    console.log(category);
    html = `
      <div class="product-list-1">
        <div class="product-list-1__item-2fr">
          <img src="${productRender[0].img}" alt="Product1" />
          <p class="product-list-1__item__cate">${productRender[0].cate}</p>
          <p class="product-list-1__item__name">${productRender[0].name}</p>
          <p class="product-list-1__item__price">$${productRender[0].price}</p>
        </div>
        <div class="product-list-1__item-1fr">
          <img src="${productRender[1].img}" alt="Product2" />
          <p class="product-list-1__item__cate">${productRender[1].cate}</p>
          <p class="product-list-1__item__name">${productRender[1].name}</p>
          <p class="product-list-1__item__price">$${productRender[1].price}</p>
          <div class="roduct-list-1__item__tag">
            <p class="tag__selling">Selling fast!</p>
            <p class="tag__new">New</p>
          </div>
        </div>
        <div class="product-list-1__item-1fr">
          <img src="${productRender[2].img}" alt="Product3" />
          <p class="product-list-1__item__cate">${productRender[2].cate}</p>
          <p class="product-list-1__item__name">${productRender[2].name}</p>
          <p class="product-list-1__item__price">$${productRender[2].price}</p>
        </div>
        </div>
              <div class="product-list-2">
        <div class="product-list-1__item-1fr">
          <img src="${productRender[3].img}" alt="Product1" />
          <p class="product-list-1__item__cate">${productRender[3].cate}</p>
          <p class="product-list-1__item__name">${productRender[3].name}</p>
          <div class="product-list-1__item__price">
          <p class="product-list-1__item__sale-price">$599.00</p>
          <p class="product-list-1__item__original-price">$${productRender[3].price}</p>  
          </div>
             <div class="roduct-list-1__item__tag">
            <p class="tag__sale">-30%</p>
          </div>
        </div>
        <div class="product-list-1__item-1fr">
          <img src="${productRender[4].img}" alt="Product2" />
          <p class="product-list-1__item__cate">${productRender[4].cate}</p>
          <p class="product-list-1__item__name">${productRender[4].name}</p>
          <p class="product-list-1__item__price">$${productRender[4].price}</p>
       
        </div>
        <div class="product-list-1__item-2fr">
          <img src="${productRender[5].img}" alt="Product3" />
          <p class="product-list-1__item__cate">${productRender[5].cate}</p>
          <p class="product-list-1__item__name">${productRender[5].name}</p>
          <p class="product-list-1__item__price">$${productRender[5].price}</p>
        </div>
        </div>
    `;
    productList[0].innerHTML = html;
  };
  tabsCategory.forEach((tab) => {
    tab.addEventListener("click", () => {
      renderProduct(tab.id);
      tabsCategory.forEach((t) => t.classList.remove("category__active"));
      tab.classList.add("category__active");
    });
  });
  renderProduct("seating");
});
