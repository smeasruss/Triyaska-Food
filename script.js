// Menu Data
const menuItems = [
    {
        id: 1,
        name: "Salmon Truffle",
        category: "main",
        price: "125.000",
        description: "Salmon segar dengan saus truffle dan sayuran musiman.",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        rating: 5
    },
    {
        id: 2,
        name: "Bruschetta Italia",
        category: "appetizer",
        price: "45.000",
        description: "Roti panggang dengan tomat segar, basil, dan minyak zaitun.",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1351&q=80",
        rating: 4
    },
    {
        id: 3,
        name: "Tiramisu Classico",
        category: "dessert",
        price: "55.000",
        description: "Dessert Italia klasik dengan mascarpone dan kopi.",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        rating: 5
    },
    {
        id: 4,
        name: "Wagyu Steak",
        category: "main",
        price: "285.000",
        description: "Steak daging wagyu premium dengan kentang tumbuk dan asparagus.",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        rating: 5
    },
    {
        id: 5,
        name: "Mojito Fresh",
        category: "drink",
        price: "35.000",
        description: "Minuman segar dengan mint, jeruk nipis, dan soda.",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        rating: 4
    },
    {
        id: 6,
        name: "Caesar Salad",
        category: "appetizer",
        price: "65.000",
        description: "Selada romaine dengan saus caesar, crouton, dan parmesan.",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1348&q=80",
        rating: 4
    },
    {
        id: 7,
        name: "Chocolate Lava",
        category: "dessert",
        price: "45.000",
        description: "Cokelat leleh dengan es krim vanilla dan buah beri.",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1348&q=80",
        rating: 5
    },
    {
        id: 8,
        name: "Fresh Orange Juice",
        category: "drink",
        price: "25.000",
        description: "Jus jeruk segar tanpa tambahan gula.",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=1347&q=80",
        rating: 4
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: "Oyen Anjazz",
        text: "Pengalaman makan terbaik yang pernah saya rasakan! Salmon Truffle-nya luar biasa lezat. Pelayanan juga sangat ramah dan profesional.",
        avatar: "kucing coding.jpeg",
        rating: 5
    },
    {
        id: 2,
        name: "Oyen Gaul",
        text: "Wagyu steak-nya empuk dan penuh rasa. Tempat yang sempurna untuk acara spesial. Pasti akan kembali lagi!",
        avatar: "img 2.jpeg",
        rating: 5
    },
    {
        id: 3,
        name: "Oyen Core",
        text: "Tiramisu-nya adalah yang terbaik yang pernah saya coba! Suasana restoran sangat nyaman dan romantis.",
        avatar: "1 img.jpg",
        rating: 4
    }
];

// DOM Elements
const menuGrid = document.querySelector('.menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const testimonialTrack = document.querySelector('.testimonial-track');
const sliderNav = document.querySelector('.slider-nav');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems('all');
    renderTestimonials();
    setupEventListeners();
});

// Render menu items based on category
function renderMenuItems(category) {
    menuGrid.innerHTML = '';
    
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.setAttribute('data-category', item.category);
        
        // Generate star rating
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < item.rating 
                ? '<i class="fas fa-star"></i>' 
                : '<i class="far fa-star"></i>';
        }
        
        menuItem.innerHTML = `
            <div class="menu-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <span class="menu-item-price">Rp ${item.price}</span>
                </div>
                <p class="menu-item-desc">${item.description}</p>
                <div class="menu-item-footer">
                    <div class="rating">
                        ${stars}
                    </div>
                    <button class="add-to-cart">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);
    });
}

// Render testimonials
function renderTestimonials() {
    testimonialTrack.innerHTML = '';
    sliderNav.innerHTML = '';
    
    testimonials.forEach((testimonial, index) => {
        // Create testimonial slide
        const slide = document.createElement('div');
        slide.className = 'testimonial-slide';
        
        // Generate star rating
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < testimonial.rating 
                ? '<i class="fas fa-star"></i>' 
                : '<i class="far fa-star"></i>';
        }
        
        slide.innerHTML = `
            <div class="testimonial-card">
                <div class="testimonial-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                </div>
                <div class="rating">
                    ${stars}
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <h4 class="testimonial-author">${testimonial.name}</h4>
            </div>
        `;
        
        testimonialTrack.appendChild(slide);
        
        // Create slider dot
        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-index', index);
        sliderNav.appendChild(dot);
    });
    
    // Setup testimonial slider
    setupTestimonialSlider();
}

// Setup testimonial slider functionality
function setupTestimonialSlider() {
    const dots = document.querySelectorAll('.slider-dot');
    const track = document.querySelector('.testimonial-track');
    let currentIndex = 0;
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            currentIndex = index;
            
            // Update track position
            track.style.transform = `translateX(-${index * 100}%)`;
            
            // Update active dot
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Auto slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        
        // Update track position
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active dot
        dots.forEach(d => d.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }, 5000);
}

// Setup event listeners
function setupEventListeners() {
    // Menu filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter menu items
            const filter = this.getAttribute('data-filter');
            renderMenuItems(filter);
        });
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-to-cart')) {
            const menuItem = e.target.closest('.menu-item');
            const itemName = menuItem.querySelector('.menu-item-title').textContent;
            alert(`${itemName} telah ditambahkan ke keranjang!`);
        }
    });
    
    // Form submission
    document.querySelector('.reservation-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih! Reservasi Anda telah berhasil dikirim. Kami akan menghubungi Anda untuk konfirmasi.');
        this.reset();
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

}


