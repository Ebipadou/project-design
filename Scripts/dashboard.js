// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const profileMenuItems = document.querySelectorAll('.profile-menu .menu-item');
const profileTabs = document.querySelectorAll('.profile-tab');
const favoriteButtons = document.querySelectorAll('.favorite-btn');
const gymListItems = document.querySelectorAll('.gym-list-item');
const mapPoints = document.querySelectorAll('.map-point');
const searchBtn = document.querySelector('.search-btn');
const loadMoreBtn = document.querySelector('.load-more .btn-secondary');
const logoutBtn = document.querySelector('.logout-btn');

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    setupEventListeners();
    
    // Load initial data
    loadSearchResults();
});

// Set up all event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                }
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Hamburger menu for mobile
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Profile menu tabs
    profileMenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');
            
            // Update active menu item
            profileMenuItems.forEach(menuItem => menuItem.classList.remove('active'));
            this.classList.add('active');
            
            // Show target tab
            profileTabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.id === `${targetTab}-tab`) {
                    tab.classList.add('active');
                }
            });
        });
    });
    
    // Favorite buttons
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.background = 'var(--cherry-blossom)';
                this.style.color = 'var(--white)';
                showNotification('Gym added to favorites!');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.background = 'var(--white)';
                this.style.color = 'inherit';
                showNotification('Gym removed from favorites!');
            }
        });
    });
    
    // Gym list items on map section
    gymListItems.forEach(item => {
        item.addEventListener('click', function() {
            gymListItems.forEach(listItem => listItem.classList.remove('active'));
            this.classList.add('active');
            
            // In a real app, this would center the map on the selected gym
            const gymName = this.querySelector('h4').textContent;
            showNotification(`Centering map on ${gymName}`);
        });
    });
    
    // Map points
    mapPoints.forEach(point => {
        point.addEventListener('click', function() {
            // In a real app, this would show gym details
            showNotification('Showing gym details');
        });
    });
    
    // Direction buttons
    const directionButtons = document.querySelectorAll('.btn-direction');
    directionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const gymItem = this.closest('.gym-list-item');
            const gymName = gymItem.querySelector('h4').textContent;
            
            // In a real app, this would open Google Maps with directions
            showNotification(`Opening directions to ${gymName} in Google Maps`);
        });
    });
    
    // Search functionality
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            performSearch();
        });
    }
    
    // Load more results
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            loadMoreResults();
        });
    }
    
    // Logout button
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // In a real app, this would log the user out and redirect to login
            if (confirm('Are you sure you want to log out?')) {
                showNotification('Logging out...');
                // Redirect to login page after a delay
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }
        });
    }
    
    // Form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, this would submit the form data
            showNotification('Settings saved successfully!');
        });
    });
}

// Perform search
function performSearch() {
    const searchInput = document.querySelector('.search-input input');
    const locationInput = document.querySelector('.filters .input-container input');
    const distanceSelect = document.querySelector('.filter-select');
    const ratingSelect = document.querySelectorAll('.filter-select')[1];
    const amenitiesSelect = document.querySelectorAll('.filter-select')[2];
    
    const searchTerm = searchInput.value;
    const location = locationInput.value;
    const distance = distanceSelect.value;
    const rating = ratingSelect.value;
    const amenities = amenitiesSelect.value;
    
    // Show loading state
    const resultsGrid = document.querySelector('.results-grid');
    resultsGrid.innerHTML = '<div class="loading-spinner">Searching...</div>';
    
    // Simulate API call delay
    setTimeout(() => {
        loadSearchResults();
        showNotification(`Found 24 gyms matching your criteria`);
    }, 1500);
}

// Load search results
function loadSearchResults() {
    const resultsGrid = document.querySelector('.results-grid');
    
    // Sample gym data
    const gyms = [
        {
            name: "Powerhouse Gym",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            distance: "0.5 mi",
            rating: 4.5,
            reviews: 128,
            features: ["24/7 Access", "Personal Training", "Yoga Classes"],
            address: "123 Fitness St, New York, NY"
        },
        {
            name: "Elite Fitness",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            distance: "0.8 mi",
            rating: 4.0,
            reviews: 94,
            features: ["Pool", "Sauna", "CrossFit"],
            address: "456 Wellness Ave, New York, NY"
        },
        {
            name: "Iron Temple Gym",
            image: "https://images.unsplash.com/photo-1549060279-7e168fce7090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            distance: "1.2 mi",
            rating: 5.0,
            reviews: 67,
            features: ["Powerlifting", "Strongman", "Open 24/7"],
            address: "789 Strength Blvd, New York, NY"
        },
        {
            name: "Zenith Fitness",
            image: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            distance: "1.5 mi",
            rating: 5.0,
            reviews: 203,
            features: ["Luxury", "Spa", "Nutritionist"],
            address: "101 Premium Way, New York, NY"
        },
        {
            name: "Flex Zone",
            image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            distance: "2.1 mi",
            rating: 4.7,
            reviews: 156,
            features: ["Group Classes", "Cardio Zone", "Open 5AM-11PM"],
            address: "202 Activity Rd, New York, NY"
        },
        {
            name: "Body Sculpt",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            distance: "2.5 mi",
            rating: 4.2,
            reviews: 89,
            features: ["Pilates", "Yoga", "Personal Training"],
            address: "303 Balance Ln, New York, NY"
        }
    ];
    
    // Clear existing results
    resultsGrid.innerHTML = '';
    
    // Add gym cards to results
    gyms.forEach(gym => {
        const gymCard = document.createElement('div');
        gymCard.className = 'gym-card';
        gymCard.innerHTML = `
            <div class="gym-image">
                <img src="${gym.image}" alt="${gym.name}">
                <div class="gym-distance">${gym.distance}</div>
                <button class="favorite-btn">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="gym-info">
                <h4 class="gym-name">${gym.name}</h4>
                <div class="gym-rating">
                    <div class="stars">
                        ${generateStars(gym.rating)}
                    </div>
                    <span class="rating-value">${gym.rating}</span>
                    <span class="review-count">(${gym.reviews} reviews)</span>
                </div>
                <div class="gym-features">
                    ${gym.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <div class="gym-address">
                    <i class="fas fa-map-marker-alt"></i>
                    ${gym.address}
                </div>
            </div>
        `;
        
        resultsGrid.appendChild(gymCard);
    });
    
    // Re-attach event listeners to new favorite buttons
    const newFavoriteButtons = resultsGrid.querySelectorAll('.favorite-btn');
    newFavoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.background = 'var(--cherry-blossom)';
                this.style.color = 'var(--white)';
                showNotification('Gym added to favorites!');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.background = 'var(--white)';
                this.style.color = 'inherit';
                showNotification('Gym removed from favorites!');
            }
        });
    });
}

// Load more results
function loadMoreResults() {
    const loadMoreBtn = document.querySelector('.load-more .btn-secondary');
    
    // Show loading state
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // In a real app, this would load more results from an API
        showNotification('More results loaded!');
        
        // Reset button
        loadMoreBtn.textContent = 'Load More Results';
        loadMoreBtn.disabled = false;
    }, 1500);
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.background = 'var(--cherry-blossom)';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '10px';
    notification.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '10000';
    notification.style.transform = 'translateX(150%)';
    notification.style.transition = 'transform 0.3s ease';
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS for loading spinner
const style = document.createElement('style');
style.textContent = `
    .loading-spinner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        font-size: 18px;
        color: var(--text-light);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-content i {
        font-size: 20px;
    }
`;
document.head.appendChild(style);