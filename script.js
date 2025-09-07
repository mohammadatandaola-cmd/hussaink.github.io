const products = [
    { id: 1, name: 'Product One', image: 'path/to/image1.jpg' },
    { id: 2, name: 'Product Two', image: 'path/to/image2.jpg' },
    { id: 3, name: 'Product Three', image: 'path/to/image3.jpg' },
    { id: 4, name: 'Product Four', image: 'path/to/image4.jpg' },
    { id: 5, name: 'Product Five', image: 'path/to/image5.jpg' },
    { id: 6, name: 'Product Six', image: 'path/to/image6.jpg' },
    { id: 7, name: 'Product Seven', image: 'path/to/image7.jpg' },
    { id: 8, name: 'Product Eight', image: 'path/to/image8.jpg' }
];

// Load products
const productContainer = document.getElementById('productContainer');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
    `;
    productContainer.appendChild(productDiv);
});

// Search functionality
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input', () => {
    const searchValue = searchBar.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));
    
    productContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
        `;
        productContainer.appendChild(productDiv);
    });
});

// Sliding navigation
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
    productContainer.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    productContainer.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});
