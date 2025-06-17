const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.getElementById("menu-icon"); 

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Initialize ScrollReveal with configuration #Bright Creations Capital
const sr = ScrollReveal({
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    reset: true
});

// Apply reveal effects to elements #Bright Creations Capital
sr.reveal(".header__content h1", { 
    delay: 200,
    origin: "left"
});

sr.reveal(".header__content p", { 
    delay: 300,
    origin: "left"
});

sr.reveal(".header__container .section__container", { 
    delay: 500,
});

sr.reveal(".header__btns", { 
    delay: 1000,
});

sr.reveal(".header__img", { 
    delay: 500,
    origin: "right"
});

// Add more reveals for other sections as needed #Bright Creations Capital
sr.reveal(".service__card", {
    interval: 500
});

sr.reveal(".service__btn", {
    interval: 2000
});


sr.reveal(".about__image, .about__content", {
    interval: 200
});

sr.reveal(".about__container, .section__header", {
    interval: 200
});

sr.reveal(".about__list li", {
    delay:500,
    interval:500,
});

sr.reveal(".portfolio__container .section__header", {
    delay:500,
});

sr.reveal(".portfolio__container .section__description", {
    delay:500,
});


sr.reveal(".portfolio__image", {
    delay:1000,
    origin:"right",
});

sr.reveal(".portfolio__list li", {
    interval:500,
    delay:1500,
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    

});

sr.reveal(".subscribe__content .section__header", {
    delay:500,
});

sr.reveal(".subscribe__content form", {
    delay:500,
});

// FOR BETTER PERFORMANCE BY B.C.C
 
// Track Core Web Vitals
const reportWebVitals = (metric) => {
    console.log(metric);
    // Send to analytics
};

// Measure page load time
window.addEventListener('load', () => {
    const loadTime = window.performance.timing.loadEventEnd - 
                    window.performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
});

// Add smooth scrolling with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100; // Adjust for fixed header height
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

// Improved Lazy Loading Implementation
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Use src attribute instead of data-src
                    img.src = img.getAttribute('src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for very old browsers
        lazyImages.forEach(img => {
            img.src = img.getAttribute('src');
        });
    }
});

// Form Validation
document.getElementById('lead-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const interest = document.getElementById('interest').value;
  
  // Simple validation
  if (!name || !email || !interest) {
    alert('Please fill all fields');
    return;
  }
  
  if (!email.includes('@')) {
    alert('Please enter a valid email');
    return;
  }
  
  // Form submission logic (replace with your actual submission code)
  console.log('Form submitted:', { name, email, interest });
  
  // Show success message
  alert(`Thanks ${name}! We'll send your free audit to ${email}`);
  
  // Reset form
  this.reset();
});

document.getElementById('contact-btn').addEventListener('click', function() {
    // Open WhatsApp with your phone number and pre-filled message
    const message = "Hello B.C.C, I'd like to discuss your AI sales solutions.";
    window.open(`https://wa.me/27602192622?text=${encodeURIComponent(message)}`, '_blank');
});

// ======================
// SIMPLE FORM VALIDATION
// ======================

document.getElementById('lead-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const interest = document.getElementById('interest').value;
  
  // Clear previous errors
  document.querySelectorAll('.error-message').forEach(el => el.remove());
  
  // Simple validation
  if (!name) {
    showError('name', 'Please enter your name', '🤖 Try your full name');
    return;
  }
  
  if (!email) {
    showError('email', 'Please enter your email', '🤖 Work email works best');
    return;
  }
  
  if (!email.includes('@') || !email.includes('.')) {
    showError('email', 'Email looks incomplete', '🤖 Should be like: you@example.com');
    return;
  }
  
  if (!interest) {
    showError('interest', 'Please choose an option', '🤖 Pick what interests you most');
    return;
  }
  
  // Success message
  const responseMessage = `
    Thanks ${name}! 🎉<br><br>
    We'll email you about ${interest} at:<br>
    <strong>${email}</strong><br><br>
    <small>Check your inbox (and spam folder) in 2 minutes!</small>
  `;
  
  showSuccess(responseMessage);
  this.reset();
});

// Real-time email validation
document.getElementById('email').addEventListener('input', function() {
  if (this.value.includes('@') && !this.value.includes('.')) {
    showHint('email', '🤖 Missing something after @?');
  } else {
    clearHint('email');
  }
});

// Helper functions
function showError(fieldId, error, aiHint = '') {
  const field = document.getElementById(fieldId);
  field.style.borderColor = '#ff3e3e';
  
  const errorEl = document.createElement('div');
  errorEl.className = 'error-message';
  errorEl.innerHTML = `
    <span>${error}</span>
    ${aiHint ? `<div class="ai-hint">${aiHint}</div>` : ''}
  `;
  
  field.parentNode.appendChild(errorEl);
}

function showHint(fieldId, hint) {
  clearHint(fieldId); // Clear existing hint first
  
  const field = document.getElementById(fieldId);
  const hintEl = document.createElement('div');
  hintEl.className = 'ai-hint';
  hintEl.textContent = hint;
  
  field.parentNode.appendChild(hintEl);
}

function clearHint(fieldId) {
  const hintEl = document.querySelector(`#${fieldId} + .ai-hint`);
  if (hintEl) hintEl.remove();
}

function showSuccess(message) {
  // Remove any existing success messages
  const oldSuccess = document.querySelector('.success-message');
  if (oldSuccess) oldSuccess.remove();
  
  const successEl = document.createElement('div');
  successEl.className = 'success-message';
  successEl.innerHTML = message;
  
  const form = document.getElementById('lead-form');
  form.parentNode.insertBefore(successEl, form.nextSibling);
  
  setTimeout(() => {
    successEl.style.opacity = '0';
    setTimeout(() => successEl.remove(), 300);
  }, 5000);
}

// Clear errors when typing
document.querySelectorAll('#lead-form input, #lead-form select').forEach(el => {
  el.addEventListener('input', function() {
    this.style.borderColor = '';
    const errorEl = this.parentNode.querySelector('.error-message');
    if (errorEl) errorEl.remove();
  });
});

// Simple AI Form Validation
document.getElementById('lead-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const interest = document.getElementById('interest').value;
  
  // Clear old errors
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  
  // Validate
  let isValid = true;
  
  if (!name) {
    document.getElementById('name-error').textContent = 'Please enter your name';
    isValid = false;
  }
  
  if (!email) {
    document.getElementById('email-error').textContent = 'Please enter your email';
    isValid = false;
  } else if (!email.includes('@') || !email.includes('.')) {
    document.getElementById('email-error').textContent = 'Please enter a valid email';
    isValid = false;
  }
  
  if (!interest) {
    document.getElementById('interest-error').textContent = 'Please select an option';
    isValid = false;
  }
  
  if (!isValid) return;
  
  // Show loading state
  const btn = this.querySelector('button');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="ri-loader-4-line spin"></i> ANALYZING...';
  
  // Simulate AI audit (in real app, this would be API call)
  setTimeout(() => {
    // Show success
    document.getElementById('form-success').innerHTML = `
      <h3>AI AUDIT READY!</h3>
      <p>We've analyzed your ${interest} needs and found 3 key opportunities:</p>
      <ol>
        <li>Automate 40% of manual processes</li>
        <li>Increase lead conversion by 25-60%</li>
        <li>Reduce customer acquisition costs</li>
      </ol>
      <p>Check ${email} for your full report!</p>
    `;
    document.getElementById('form-success').style.display = 'block';
    
    // Reset form
    this.reset();
    btn.innerHTML = originalText;
    
    // In real app: Send data to your CRM/email service
    console.log('Form submitted:', { name, email, interest });
    
  }, 2000);
});

// Service Form Submission
document.getElementById('service-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get values
  const name = document.getElementById('client-name').value.trim();
  const email = document.getElementById('client-email').value.trim();
  const phone = document.getElementById('client-phone').value.trim();
  const message = document.getElementById('client-message').value.trim();
  
  // Get selected services
  const serviceCheckboxes = document.querySelectorAll('input[name="service"]:checked');
  const services = Array.from(serviceCheckboxes).map(cb => cb.value);
  
  // Clear old errors
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  
  // Validate
  let isValid = true;
  
  if (!name) {
    document.getElementById('name-error').textContent = 'Please enter your name';
    isValid = false;
  }
  
  if (!email) {
    document.getElementById('email-error').textContent = 'Please enter your email';
    isValid = false;
  } else if (!email.includes('@') || !email.includes('.')) {
    document.getElementById('email-error').textContent = 'Please enter a valid email';
    isValid = false;
  }
  
  if (services.length === 0) {
    document.getElementById('service-error').textContent = 'Please select at least one service';
    isValid = false;
  }
  
  if (!isValid) return;
  
  // Show loading
  const btn = this.querySelector('button');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="ri-loader-4-line spin"></i> PROCESSING...';
  
  // Prepare data to send (in real app, this would go to your backend)
  const formData = {
    name,
    email,
    phone: phone || 'Not provided',
    services,
    message: message || 'No additional message',
    timestamp: new Date().toISOString()
  };
  
  // Simulate processing delay
  setTimeout(() => {
    // Show success
    document.getElementById('form-success').innerHTML = `
      <h3>THANK YOU ${name.toUpperCase()}!</h3>
      <p>We're preparing your:</p>
      <ul>
        <li>Service brochure</li>
        <li>Price guidelines</li>
        <li>Case studies</li>
      </ul>
      <p>Check ${email} shortly. We'll also WhatsApp you at ${phone || 'your provided number'} to discuss your ${services.join(', ')} needs.</p>
    `;
    document.getElementById('form-success').style.display = 'block';
    
    // Reset form
    this.reset();
    btn.innerHTML = originalText;
    
    // In real app: Send data to your CRM/email
    console.log('Form submitted:', formData);
    
    // For now, just show in console
    console.log("Ready to implement:");
    console.log("1. Email service (Mailchimp/SendGrid)");
    console.log("2. WhatsApp integration");
    console.log("3. CRM connection");
    
  }, 1500);
});

// Elite Form Functionality
document.getElementById('elite-consult-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get values
  const name = document.getElementById('elite-name').value.trim();
  const company = document.getElementById('elite-company').value.trim();
  const email = document.getElementById('elite-email').value.trim();
  const phone = document.getElementById('elite-phone').value.trim();
  const budget = document.getElementById('elite-budget').value;
  const goals = document.getElementById('elite-goals').value.trim();
  
  // Get selected services
  const serviceCheckboxes = document.querySelectorAll('input[name="service"]:checked');
  const services = Array.from(serviceCheckboxes).map(cb => cb.value);
  
  // Clear old errors
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  
  // Validate
  let isValid = true;
  
  if (!name) {
    document.getElementById('elite-name-error').textContent = 'Please enter your full name';
    isValid = false;
  }
  
  if (!company) {
    document.getElementById('elite-company-error').textContent = 'Please enter your company name';
    isValid = false;
  }
  
  if (!email) {
    document.getElementById('elite-email-error').textContent = 'Please enter your work email';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('elite-email-error').textContent = 'Please enter a valid email address';
    isValid = false;
  }
  
  if (services.length === 0) {
    document.getElementById('elite-service-error').textContent = 'Please select at least one service';
    isValid = false;
  }
  
  if (!budget) {
    document.getElementById('elite-budget-error').textContent = 'Please select your budget range';
    isValid = false;
  }
  
  if (!isValid) return;
  
  // Show loading state
  const btn = this.querySelector('button');
  const originalBtnHTML = btn.innerHTML;
  btn.innerHTML = `<i class="ri-loader-4-line spin"></i> PROCESSING REQUEST...`;
  btn.disabled = true;
  
  // Simulate processing
  setTimeout(() => {
    // Show success message
    document.getElementById('elite-success').style.display = 'flex';
    
    // Reset form
    this.reset();
    btn.innerHTML = originalBtnHTML;
    btn.disabled = false;
    
    // For testing/demo purposes (remove in production or replace with your storage method)
    console.log('Form submission captured:', {
      name,
      company,
      email,
      phone,
      services,
      budget,
      goals,
      timestamp: new Date().toISOString()
    });
  }, 2000);
});

// Close success message
document.querySelector('.elite-close-success').addEventListener('click', function() {
  document.getElementById('elite-success').style.display = 'none';
});

// Add subtle animation to form inputs
document.querySelectorAll('.elite-form input, .elite-form select, .elite-form textarea').forEach(el => {
  el.addEventListener('focus', function() {
    this.parentElement.style.transform = 'translateY(-2px)';
    this.parentElement.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
  });
  
  el.addEventListener('blur', function() {
    this.parentElement.style.transform = '';
    this.parentElement.style.boxShadow = '';
  });
});

// Initialize Firebase with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyABCD...", // Replace with your actual API key
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id", // Just the ID, not URL
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcd1234"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Form submission handler
document.getElementById('elite-consult-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Get form values
  const formData = {
    name: document.getElementById('elite-name').value,
    company: document.getElementById('elite-company').value,
    email: document.getElementById('elite-email').value,
    phone: document.getElementById('elite-phone').value || null, // Optional field
    budget: document.getElementById('elite-budget').value,
    goals: document.getElementById('elite-goals').value || null,
    services: Array.from(document.querySelectorAll('input[name="service"]:checked'))
               .map(checkbox => checkbox.value),
    status: "pending",
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  };

  try {
    // Save to Firestore
    await db.collection('consultationRequests').add(formData);
    
    // Show success message
    document.getElementById('elite-success').style.display = 'flex';
    
    // Reset form
    e.target.reset();
    
  } catch (error) {
    console.error("Error saving data:", error);
    alert("Submission failed. Please try again or contact support.");
  }
});

document.getElementById('elite-consult-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  console.log("Form submission started"); // Debug log

  // Get form values
  const formData = {
    name: document.getElementById('elite-name').value.trim(),
    company: document.getElementById('elite-company').value.trim(),
    email: document.getElementById('elite-email').value.trim(),
    phone: document.getElementById('elite-phone').value.trim() || null,
    budget: document.getElementById('elite-budget').value,
    goals: document.getElementById('elite-goals').value.trim() || null,
    services: Array.from(document.querySelectorAll('input[name="service"]:checked'))
               .map(checkbox => checkbox.value),
    status: "pending",
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  };

  console.log("Form data prepared:", formData); // Debug log

  // Validate required fields
  if (!formData.name || !formData.company || !formData.email || !formData.budget) {
    console.error("Validation failed: Missing required fields");
    alert("Please fill all required fields");
    return;
  }

  try {
    console.log("Attempting to save to Firestore..."); // Debug log
    
    // Save to Firestore
    const docRef = await db.collection('consultationRequests').add(formData);
    
    console.log("Document written with ID: ", docRef.id); // Success log
    
    // Show success message
    document.getElementById('elite-success').style.display = 'flex';
    
    // Reset form
    e.target.reset();
    
  } catch (error) {
    console.error("Error saving data:", error);
    
    // Detailed error display
    let errorMessage = "Submission failed. Please try again.";
    if (error.code) {
      errorMessage += ` (Error: ${error.code})`;
    }
    alert(errorMessage);
  }
});

// Admin login function
async function adminLogin(email, password) {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log("Admin logged in:", userCredential.user.uid);
    return true;
  } catch (error) {
    console.error("Login failed:", error.message);
    return false;
  }
}

// Fetch protected data
async function fetchSubmissions() {
  const snapshot = await db.collection("consultationRequests")
                         .orderBy("timestamp", "desc")
                         .get();
  return snapshot.docs.map(doc => doc.data());
}

// Example usage
adminLogin("your@admin.email", "yourPassword").then(async (isAdmin) => {
  if (isAdmin) {
    const submissions = await fetchSubmissions();
    console.log("Admin access successful. Submissions:", submissions);
  }
});

