//home page 
// JavaScript for the image slider
let slideIndex = 0;
showSlides(slideIndex);
function moveSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}
//login and sign up
// Initialize localStorage to store user credentials for signup
const users = JSON.parse(localStorage.getItem('users')) || [];
document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('auth-modal').style.display = 'block';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
});
document.getElementById('signup-link').addEventListener('click', function() {
    document.getElementById('auth-modal').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});
// Close modal when 'x' is clicked
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('auth-modal').style.display = 'none';
});
// Login Functionality
document.getElementById('login-submit').addEventListener('click', function() {
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;
    const user = users.find(u => u.username === loginUsername && u.password === loginPassword);
    if (user) {
        alert(`Welcome to soveregain supplements, ${loginUsername}!`);
        // Reset input fields
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
        document.getElementById('auth-modal').style.display = 'none'; // Close the modal
    } else {
        alert('Please enter a correct username or password.');
    }
});
// Sign-Up Functionality
document.getElementById('signup-submit').addEventListener('click', function() {
    const signupUsername = document.getElementById('signup-username').value;
    const signupEmail = document.getElementById('signup-email').value;
    const signupPassword = document.getElementById('signup-password').value;
    if (signupPassword.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }
    // Create new user object and store in localStorage
    const newUser = {
        username: signupUsername,
        email: signupEmail,
        password: signupPassword
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users)); // Save the updated user list
    alert('Sign up successful! You can now log in.');
    // Reset input fields
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('auth-modal').style.display = 'none'; // Close the modal
});

//shop page 
// Show or hide the scroll-to-top button
window.onscroll = function() {
    const scrollButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};
// Scroll to top function with smooth behavior
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}
    // Function to show prompts when adding a product to the cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Product added to cart!');
            const viewCart = confirm('Would you like to view your cart?');
            if (viewCart) {
                window.location.href = 'cart.html';
            }
        });
    });
    // Additional functions can be added here as needed
document.addEventListener('DOMContentLoaded', function () {
    // Search functionality
    const searchInput = document.getElementById('search-input');
    const productItems = document.querySelectorAll('.product');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const searchTerm = searchInput.value.toLowerCase();
            productItems.forEach(item => {
                const productName = item.querySelector('h3').textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        });
    }
});
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const emailInput = document.getElementById('email').value.trim();
    const messageElement = document.getElementById('subscribe-message');
    // Email validation pattern (based on typical email structure)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(emailInput)) {
        messageElement.style.display = 'block';
        messageElement.style.color = 'green';
        messageElement.textContent = 'Thanks for subscribing!';
    } else {
        messageElement.style.display = 'block';
        messageElement.style.color = 'red';
        messageElement.textContent = 'Please enter a valid email address.';
    }
    document.getElementById('email').value = '';
});
function submitReview(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thanks for your review!");
    document.getElementById("review-form").reset(); // Optional: Reset the form after submission
};
// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('auth-modal');
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const closeModal = document.querySelector('.close');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    // Open modal and show login form
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        setTimeout(() => {
            modal.classList.add('show');
        }, 100);
    });
    // Open modal and show signup form
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        setTimeout(() => {
            modal.classList.add('show');
        }, 100);
    });
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    });
    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500);
        }
    });
});
// for index.html for hidden paragraph slide 2
// JavaScript to handle button click and show the paragraph with a sliding-up animation
document.getElementById('explore-btn').addEventListener('click', function() {
    var paragraph = document.getElementById('sliding-paragraph');
    // Show the paragraph by adding the class 'show-slide'
    paragraph.classList.add('show-slide');
});
// JavaScript to handle closing the sliding paragraph
document.getElementById('close-btn').addEventListener('click', function() {
    var paragraph = document.getElementById('sliding-paragraph'); 
    // Hide the paragraph by removing the class 'show-slide'
    paragraph.classList.remove('show-slide');
});
//slide 3
// JavaScript to handle the 'Learn More' button click and show the paragraph with a sliding-up animation
document.getElementById('learn-more-btn').addEventListener('click', function() {
    var learnMoreParagraph = document.getElementById('sliding-paragraph-learn-more');
    // Show the paragraph by adding the class 'show-slide-learn-more'
    learnMoreParagraph.classList.add('show-slide-learn-more');
});
// JavaScript to handle the 'Back' button click and hide the paragraph
document.getElementById('back-btn').addEventListener('click', function() {
    var learnMoreParagraph = document.getElementById('sliding-paragraph-learn-more'); 
    // Hide the paragraph by removing the class 'show-slide-learn-more'
    learnMoreParagraph.classList.remove('show-slide-learn-more');
});
//slide 4
document.addEventListener("DOMContentLoaded", function() {
    // Reference the 'Get Started' button and sliding section
    var getStartedBtn = document.getElementById('get-started-btn'); 
    var slidingProducts = document.getElementById('sliding-products'); 
    var closeBtn = document.getElementById('close-products-btn'); 
    // Show sliding section when 'Get Started' is clicked
    getStartedBtn.addEventListener('click', function() {
        slidingProducts.classList.add('show-slide-products');
    });
    // Hide sliding section when 'Close' is clicked
    closeBtn.addEventListener('click', function() {
        slidingProducts.classList.remove('show-slide-products');
    });
    // Handle Add to Cart buttons (optional functionality)
    var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    });
});
