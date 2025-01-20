const menuItems = [
    {
        name: "Chicken Pizza",
        description: "Fresh-baked pizza topped with grilled chicken and vegetables",
        image: "./Chicken Pizza.jpg",
        category: "Pizza",
        price: 4.20,
        rating: 5,
        reviews: 124,
        discount: "20% OFF"
    },
    // Add other menu items here
];

// Function to create menu items
function createMenuItems() {
    const menuGrid = document.querySelector('.menu-grid');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-image-container">
                <img src="${item.image}" alt="${item.name}" class="menu-image">
                <span class="category-tag">${item.category}</span>
                ${item.discount ? `<span class="discount-badge">${item.discount}</span>` : ''}
            </div>
            <div class="menu-content">
                <h3 class="menu-title">${item.name}</h3>
                <p class="menu-description">${item.description}</p>
                <div class="menu-bottom">
                    <div class="price">$${item.price.toFixed(2)}</div>
                    <button class="buy-button">Add to Cart</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Initialize menu
document.addEventListener('DOMContentLoaded', createMenuItems);

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Active nav item on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                    link.classList.add('active');
                }
            });
        }
    });
});