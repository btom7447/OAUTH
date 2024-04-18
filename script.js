let isOpen = false;
        
function toggleSidebar() {
    isOpen = !isOpen;
    const sidebarMobile = document.getElementById('sidebarMobile');
    sidebarMobile.classList.toggle('open');

    // Toggle hamburger animation
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.classList.toggle('change');
    });
}

// Add event listener to each element of the mobile sidebar
const sidebarElements = document.querySelectorAll('.side-bar-mobile > *');
sidebarElements.forEach(element => {
    element.addEventListener('click', () => {
        toggleSidebar(); 
    });
});

// MOBILE STICKY HEADER
document.addEventListener("DOMContentLoaded", function() {
    const mobileHeader = document.querySelector('.mobile-nav .mobile-header');
    const topOfHeader = mobileHeader.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > topOfHeader) {
            mobileHeader.classList.add('sticky');
        } else {
            mobileHeader.classList.remove('sticky');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbars li a');
  
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            this.classList.add('active');
        });

        // Add this part to check if the link's href matches the current URL
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});

// ACCOUNT DROPDOWN
function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
}

function signIn() {
    // Add your sign-in logic here
    console.log("Signing in...");
}

function createAccount() {
    // Add your account creation logic here
    console.log("Creating account...");
}


// HERO PAGE CAROUSEL
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('#heroCarousel', {
        slidesPerView: 1, 
        spaceBetween: 0,
        loop: true,
        pagination: false,
        autoplay: {
            delay: 5000, 
            disableOnInteraction: true, 
        },
        pauseOnMouseEnter: true, 
        pauseOnMouseLeave: false, 
    });
});

// OUR SERVICES TOGGLE
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.service-button');
    const middleContents = document.querySelectorAll('.service-middle-content');
    const rightContents = document.querySelectorAll('.service-right-content');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const target = this.getAttribute('data-target');

            // Deactivate all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Activate clicked button
            this.classList.add('active');

            // Hide all middle contents
            middleContents.forEach(content => content.classList.remove('active'));
            // Show corresponding middle content
            document.getElementById(`${target}-middle`).classList.add('active');

            // Hide all right contents
            rightContents.forEach(content => content.classList.remove('active'));
            // Show corresponding right content
            document.getElementById(`${target}-right`).classList.add('active');
        });
    });
});

// NUMBER INPUT (BOOK APPOINTMENT FORM)
document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('phoneInput');

    numberInput.addEventListener('input', function(event) {
        this.value = this.value.replace(/\D/g, '');
    });

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        numberInput.setAttribute('inputmode', 'numeric');
    }
});

// DOCTOR CAROUSEL
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('#doctor-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 5000, // milliseconds
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            715: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
        },
    });
});


