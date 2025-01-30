const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "FOOD",
    price: 100,
    colors: [
      {
       
        img: "./img/food.jpeg",
      },
      
    ],
  },
  {
    id: 2,
    title: "BOOKS",
    price: 50,
    colors: [
      {
        img: "./img/books.jpeg",
      },
      
    ],
  },
  {
    id: 3,
    title: "SHOES",
    price: 200,
    colors: [
      {
        
        img: "./img/shoes.jpeg",
      },
      
    ],
  },
  {
    id: 4,
    title: "CLOTHES",
    price: 200,
    colors: [
      {
        
        img: "./img/clothes.jpeg",
      },
      
    ],
  },
  {
    id: 5,
    title: "TOYS",
    price: 50,
    colors: [
      {
        
        img: "./img/toys.jpeg",
      },
      
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
const checkoutButton = document.querySelector(".payButton");

checkoutButton.addEventListener("click", () => {
  // Hide the personal information box
  payment.style.display = "none";

  // Create the modal dynamically
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.backgroundColor = "white";
  modal.style.padding = "20px";
  modal.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  modal.style.borderRadius = "10px";
  modal.style.textAlign = "center";
  modal.style.zIndex = "1000";

  // Add content to the modal
  const message = document.createElement("p");
  message.textContent = "Thank you for donating!";
  message.style.marginBottom = "20px";
  message.style.fontSize = "18px";

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.backgroundColor = "#333";
  closeButton.style.color = "white";
  closeButton.style.border = "none";
  closeButton.style.padding = "10px 20px";
  closeButton.style.borderRadius = "5px";
  closeButton.style.cursor = "pointer";

  // Close the modal when the button is clicked
  closeButton.addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  // Append message and button to the modal
  modal.appendChild(message);
  modal.appendChild(closeButton);

  // Append modal to the body
  document.body.appendChild(modal);
});
