// // Get all the "Add to Cart" buttons

// const addToCartButtons = document.querySelectorAll('.grid-btn');
// const goods = document.querySelector('.goods');

// // const count = 0;
// const productPrice = 500000; // You can replace this with the actual price

// // Modal
// const modal = document.getElementById('myModal');
// const closeModal = document.querySelector('.close');

// // Cart data
// const cart = [];

// // Function to update the cart modal
// function updateCartModal() {
//   const cartBody = document.getElementById('cartBody');
//   cartBody.innerHTML = ''; // Clear existing content

//   cart.forEach((item, index) => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${index + 1}</td>
//       <td>${item.name}</td>
//       <td>${item.price}</td>
//       <td>
//         <button class="quantity-btn" data-index="${index}" data-action="decrement">-</button>
//         <span>${item.quantity}</span>
//         <button class="quantity-btn" data-index="${index}" data-action="increment">+</button>
//       </td>
//       <td>
//         <button class="button" data-index="${index}" data-action="remove">remove</button>
//       </td>
//     `;
//     cartBody.appendChild(row);
//   });
// }

// // Function to handle quantity button clicks
// // function handleQuantityButtonClick(event) {
// //   const { action, index } = event.target.dataset;

// //   if (action === 'increment') {
// //     cart[index].quantity++;
// //     cart[index].price = productPrice * cart[index].quantity;
// //   } else if (action === 'decrement') {
// //     if (cart[index].quantity > 1) {
// //       cart[index].quantity--;
// //       cart[index].price = productPrice * cart[index].quantity;
// //     }
// //   }
// //   if(action === 'remove'){
// //     cart.splice(index, 1);
// //   }

// //   updateCartModal();
// // }
// // Function to handle quantity button clicks
// function handleQuantityButtonClick(event) {
//     const { action, index } = event.target.dataset;
  
//     if (action === 'increment') {
//       cart[index].quantity++;
//       cart[index].price = productPrice * cart[index].quantity;
//     } else if (action === 'decrement') {
//       if (cart[index].quantity > 1) {
//         cart[index].quantity--;
//         cart[index].price = productPrice * cart[index].quantity;
//       }
//     }
//     if(action === 'remove'){
//       const productName = cart[index].name;
//       cart.splice(index, 1);
//       // Find the corresponding "Add to Cart" button and change its text to "ADD TO CART"
//       const button = Array.from(addToCartButtons).find(button => button.parentElement.querySelector('h2').textContent === productName);
//       if (button) {
//         button.textContent = 'ADD TO CART';
//       }
//     }
  
//     goods.innerText = cart.reduce((total, item) => total + item.quantity, 0); // Update the goods count
//     updateCartModal();
//   }

// // Event listener for quantity buttons
// document.addEventListener('click', (event) => {
//   if (event.target.classList.contains('quantity-btn') || event.target.classList.contains('button')) {
//     handleQuantityButtonClick(event);
//   }
// });

// // Event listener for closing the modal
// closeModal.addEventListener('click', closeModalFunction);

// // Event listener for closing the modal when clicking outside the modal
// window.addEventListener('click', (event) => {
//   if (event.target === modal) {
//     closeModalFunction();
//   }
// });

// // Function to open the modal
// function openModal() {
//   modal.style.display = 'block';
//   updateCartModal();
// }

// // Function to close the modal
// function closeModalFunction() {
//   modal.style.display = 'none';
// }

// // Event listener for opening the modal
// document.querySelector('.cart-container').addEventListener('click', openModal);

// // Event listener for adding items to the cart
// addToCartButtons.forEach((button, index) => {
//   button.addEventListener('click', (event) => {
//     event.preventDefault();
//     // Add the product to the cart array
//     const productName = button.parentElement.querySelector('h2').textContent;
//     const existingItem = cart.find((item) => item.name === productName);

//     if (button.textContent.toUpperCase() === 'ADD TO CART') {
//         if (existingItem) {
//             existingItem.quantity++;
//             existingItem.name = productName;
//             existingItem.price = productPrice * existingItem.quantity;
//         } else {
//             cart.push({ name: productName, price: productPrice, quantity: 1 });
//         }
//         goods.innerText = parseInt(goods.innerText) + 1; // Increment the goods count
//         button.textContent = 'REMOVE FROM CART';
//     } else {
//         const index = cart.findIndex((item) => item.name === productName);
//         if (index !== -1) {
//             cart.splice(index, 1); // Remove the item from the cart
//             goods.innerText = parseInt(goods.innerText) - 1; // Decrement the goods count
//             button.textContent = 'ADD TO CART';
//         }
//     }

//     openModal(); // Open the modal after adding the item to the cart
//   });
// });

// // ... (your existing code) ...

// // Function to validate the form inputs
// // Function to validate the form inputs
// function validateForm() {
//   let isValid = true;

//   const nameInput = document.getElementById('name');
//   const emailInput = document.getElementById('email');
//   const phoneInput = document.getElementById('phone');

//   const nameError = document.getElementById('nameError');
//   const emailError = document.getElementById('emailError');
//   const phoneError = document.getElementById('phoneError');

//   // Reset error messages and borders
//   nameError.textContent = '';
//   nameInput.style.borderColor = '';
//   emailError.textContent = '';
//   emailInput.style.borderColor = '';
//   phoneError.textContent = '';
//   // phoneInput.style.borderColor = '';

//   // Validate name
//   if (nameInput.value.trim() === '') {
//     isValid = false;
//     nameError.textContent = 'Please enter your name';
//     nameError.style.color = 'red';
//     nameInput.style.borderColor = 'red';
//   }

//   // Validate email
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(emailInput.value)) {
//     isValid = false;
//     emailError.textContent = 'Please enter a valid email address';
//     emailError.style.color = 'red';
//     emailInput.style.borderColor = 'red';
//   }

//   // Validate phone number
//   const phoneRegex = /^\d{10}$/;
//   if (!phoneRegex.test(phoneInput.value)) {
//     isValid = false;
//     phoneError.textContent = 'Please enter a valid phone number';
//     phoneError.style.color = 'red';
//     phoneInput.style.borderColor = 'red';
//   }

//   return isValid;
// }

// // Function to display error messages and focus on the first invalid field
// function displayErrorsAndFocus() {
//   const fields = [
//     { input: 'name', error: 'nameError' },
//     { input: 'email', error: 'emailError' },
//     { input: 'phone', error: 'phoneError' },
//   ];

//   for (let field of fields) {
//     const input = document.getElementById(field.input);
//     const error = document.getElementById(field.error);

//     if (error.textContent !== '') {
//       input.focus();
//       break;
//     }
//   }
// }

// // Function to handle checkout button click
// function checkout() {
//   if (!validateForm()) {
//     displayErrorsAndFocus();
//   } else {
//     // Process checkout logic here
//     closeModalFunction(); // Close the modal after successful checkout
//   }
// }

// // Function to handle continue shopping button click
// function continueShopping() {
//   if (!validateForm()) {
//     displayErrorsAndFocus();
//   } else {
//     // Process continue shopping logic here
//     closeModalFunction(); // Close the modal after continuing shopping
//   }
// }

// document.querySelector('#checkout-btn').addEventListener('click', (e) => {
//   e.preventDefault();
//   checkout();
// })

// // function checkout() {
// //   if (validateForm()) {
// //     // Process checkout logic here
// //     closeModalFunction(); // Close the modal after successful checkout
// //   } else {
// //     // Display error messages
// //     document.getElementById('name').focus();
// //     document.getElementById('email').focus();
// //     document.getElementById('phone').focus();
// //   }
// // }

// // // Function to handle continue shopping button click
// // function continueShopping() {
// //   if (validateForm()) {
// //     // Process continue shopping logic here
// //     closeModalFunction(); // Close the modal after continuing shopping
// //   } else {
// //     // Display error messages
// //     document.getElementById('name').focus();
// //     document.getElementById('email').focus();
// //     document.getElementById('phone').focus();
// //   }
// // }


// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.grid-btn');
const goods = document.querySelector('.goods');

// const count = 0;
const productPrice = 500000; // You can replace this with the actual price

// Modal
const modal = document.getElementById('myModal');
const closeModal = document.querySelector('.close');

// Cart data
const cart = [];
let totalAmount = 0; // Added variable to store the total amount

// Function to update the cart modal
function updateCartModal() {
  const cartBody = document.getElementById('cartBody');
  cartBody.innerHTML = ''; // Clear existing content

  totalAmount = 0; // Reset total amount

  cart.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>
        <button class="quantity-btn" data-index="${index}" data-action="decrement">-</button>
        <span>${item.quantity}</span>
        <button class="quantity-btn" data-index="${index}" data-action="increment">+</button>
      </td>
      <td>
        <button class="button" data-index="${index}" data-action="remove">remove</button>
      </td>
    `;
    cartBody.appendChild(row);

    totalAmount += item.price; // Update total amount
  });

  // Update the total amount in the form
  document.querySelector('.total_amount span').textContent = `₦${totalAmount}`;
}


// Function to handle quantity button clicks
function handleQuantityButtonClick(event) {
  const { action, index } = event.target.dataset;

  if (action === 'increment') {
    cart[index].quantity++;
    cart[index].price = productPrice * cart[index].quantity;
  } else if (action === 'decrement') {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      cart[index].price = productPrice * cart[index].quantity;
    } else {
      // Display alert if trying to decrement below 1
      alert("You cannot have less than one item. If you wish to remove the item, click remove.");
    }
  }

  if (action === 'remove') {
    const productName = cart[index].name;
    cart.splice(index, 1);

    // Find the corresponding "Add to Cart" button and change its text to "ADD TO CART"
    const button = Array.from(addToCartButtons).find(button => button.parentElement.querySelector('h2').textContent === productName);
    if (button) {
      button.textContent = 'ADD TO CART';
    }
  }

  goods.innerText = cart.reduce((total, item) => total + item.quantity, 0); // Update the goods count
  updateCartModal();
}


// Event listener for quantity buttons
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('quantity-btn') || event.target.classList.contains('button')) {
    handleQuantityButtonClick(event);
  }
});

// Event listener for closing the modal
closeModal.addEventListener('click', closeModalFunction);

// Event listener for closing the modal when clicking outside the modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModalFunction();
  }
});

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
  updateCartModal();
}

// Function to close the modal
function closeModalFunction() {
  modal.style.display = 'none';
}

// Event listener for opening the modal
document.querySelector('.cart-container').addEventListener('click', openModal);

// Event listener for adding items to the cart
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    // Add the product to the cart array
    const productName = button.parentElement.querySelector('h2').textContent;
    const existingItem = cart.find((item) => item.name === productName);

    if (button.textContent.toUpperCase() === 'ADD TO CART') {
        if (existingItem) {
            existingItem.quantity++;
            existingItem.name = productName;
            existingItem.price = productPrice * existingItem.quantity;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }
        goods.innerText = parseInt(goods.innerText) + 1; // Increment the goods count
        button.textContent = 'REMOVE FROM CART';
    } else {
        const index = cart.findIndex((item) => item.name === productName);
        if (index !== -1) {
            cart.splice(index, 1); // Remove the item from the cart
            goods.innerText = parseInt(goods.innerText) - 1; // Decrement the goods count
            button.textContent = 'ADD TO CART';
        }
    }

    // Update the total amount in the form
    document.querySelector('.total_amount span').textContent = `₦${totalAmount}`;

    openModal(); // Open the modal after adding the item to the cart
  });
});

// ... (your existing code)

// Function to validate the form inputs
function validateForm() {
  let isValid = true;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');

  // Reset error messages and borders
  nameError.textContent = '';
  nameInput.style.borderColor = '';
  emailError.textContent = '';
  emailInput.style.borderColor = '';
  phoneError.textContent = '';
  // phoneInput.style.borderColor = '';

  // Validate name
  if (nameInput.value.trim() === '') {
    isValid = false;
    nameError.textContent = 'Please enter your name';
    nameError.style.color = 'red';
    nameInput.style.borderColor = 'red';
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    isValid = false;
    emailError.textContent = 'Please enter a valid email address';
    emailError.style.color = 'red';
    emailInput.style.borderColor = 'red';
  }

  // Validate phone number

  const phoneRegex = /^[+]?[0-9]{0,15}$/;

  if (!phoneRegex.test(phoneInput.value)) {
    isValid = false;
    phoneError.textContent = 'Please enter a valid phone number';
    phoneError.style.color = 'red';
    phoneInput.style.borderColor = 'red';
  }

  return isValid;
}

// Function to display error messages and focus on the first invalid field
function displayErrorsAndFocus() {
  const fields = [
    { input: 'name', error: 'nameError' },
    { input: 'email', error: 'emailError' },
    { input: 'phone', error: 'phoneError' },
  ];

  for (let field of fields) {
    const input = document.getElementById(field.input);
    const error = document.getElementById(field.error);

    if (error.textContent !== '') {
      input.focus();
      break;
    }
  }
}

// Function to handle checkout button click
function checkout() {
  if (!validateForm()) {
    displayErrorsAndFocus();
  } else {
    closeModalFunction();
    // Perform the checkout or redirect to the checkout page
    // You can add your checkout logic here
  }
}

// Function to handle continue shopping button click
function continueShopping() {
  if (!validateForm()) {
    displayErrorsAndFocus();
  } else {
    closeModalFunction();
  }
}

document.querySelector('#checkout-btn').addEventListener('click', (e) => {
  e.preventDefault();
  checkout();
});

document.querySelector('#continue-shopping-btn').addEventListener('click', (e) => {
  e.preventDefault();
  continueShopping();
});




