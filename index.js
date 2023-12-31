// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.grid-btn');
const goods = document.querySelector('.goods');

// const count = 0;
const productPrice = 500000; 

// Modal
const modal = document.getElementById('myModal');
const closeModal = document.querySelector('.close');

// Cart data
const cart = [];
let totalAmount = 0; 

// Function to update the cart modal
function updateCartModal() {
  const cartBody = document.getElementById('cartBody');
  cartBody.innerHTML = ''; 

  totalAmount = 0; 

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
        <button class="button rmv_btn" data-index="${index}" data-action="remove">remove</button>
      </td>
    `;
    cartBody.appendChild(row);

    totalAmount += item.price; 
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

// document.querySelector('#continue-shopping-btn').addEventListener('click', (e) => {
//   e.preventDefault();
//   continueShopping();
// });


// const hamburgerBtn = document.querySelector('.hamburger-btn');
// const closeBtn = document.querySelector('.close-btn');
// const nav = document.querySelector('.nav');

// hamburgerBtn.addEventListener('click', () => {
//   nav.classList.toggle('active');
// });

// closeBtn.addEventListener('click', () => {
//   nav.classList.toggle('active');
// });

// document.addEventListener('click', (event) => {
//   if (!nav.contains(event.target) && event.target !== hamburgerBtn) {
//     nav.classList.remove('active');
//   }
// });

const menuButton = document.querySelector('.hamburger-btn')
const  navList = document.querySelector('.nav-li')
menuButton.addEventListener('click', () => {
  if(navList.style.display === 'none'){
    navList.style.display = 'flex'
  }else{
    navList.style.display = 'none'
  }
  

})

//paystack
function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_c1cd7065357eb8cb6bc71dc53ffc7b2aa7266bf7', // Replace with your public key
    email: document.getElementById("email").value,
    amount: document.getElementsByClassName("total_amount").value * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"////////////////
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}





