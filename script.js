// Password toggle functionality
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePassword) {
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle icon
        const icon = this.querySelector('i');
        icon.className = type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
    });
}

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember')?.checked;
    const button = document.querySelector('.login-btn');
    const container = document.querySelector('.login-container');

    // Clear any previous error states
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });
    document.querySelectorAll('.error-message').forEach(msg => {
        msg.remove();
    });

    // Basic validation
    let hasError = false;

    if (!email) {
        showError('email', 'Email is required');
        hasError = true;
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
        hasError = true;
    }

    if (!password) {
        showError('password', 'Password is required');
        hasError = true;
    } else if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters');
        hasError = true;
    }

    if (hasError) return;

    // Show loading state
    button.classList.add('loading');
    button.innerHTML = '<span class="btn-text">Signing In...</span>';
    button.disabled = true;

    // Save remember me preference
    if (remember) {
        localStorage.setItem('rememberEmail', email);
    } else {
        localStorage.removeItem('rememberEmail');
    }

    // Simulate login process (replace with actual authentication)
    setTimeout(() => {
        // Success animation
        container.classList.add('success');

        setTimeout(() => {
            alert('Login successful! Welcome back!');
            window.location.href = 'courses.html';
        }, 800);
    }, 2000);
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');

    formGroup.classList.add('error');

    const errorMsg = document.createElement('span');
    errorMsg.className = 'error-message';
    errorMsg.textContent = message;

    formGroup.appendChild(errorMsg);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Load remembered email on page load
document.addEventListener('DOMContentLoaded', function() {
    const rememberedEmail = localStorage.getItem('rememberEmail');
    if (rememberedEmail) {
        document.getElementById('email').value = rememberedEmail;
        const rememberCheckbox = document.getElementById('remember');
        if (rememberCheckbox) rememberCheckbox.checked = true;
    }
});

// Add input focus effects
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
    });

    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});

// Add smooth transitions to form groups
document.querySelectorAll('.form-group').forEach(group => {
    group.style.transition = 'transform 0.3s ease';
});
