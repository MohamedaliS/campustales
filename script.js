// Email Subscription Manager
class EmailSubscriptionManager {
    constructor() {
        this.storageKey = 'campustales_emails';
        this.init();
    }

    init() {
        const form = document.getElementById('subscribeForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubscribe(e));
        }
    }

    // Get all emails from localStorage
    getEmails() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    }

    // Save emails to localStorage
    saveEmails(emails) {
        localStorage.setItem(this.storageKey, JSON.stringify(emails));
    }

    // Validate email format
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Check if email already exists
    emailExists(email) {
        const emails = this.getEmails();
        return emails.some(item => item.email.toLowerCase() === email.toLowerCase());
    }

    // Add new email
    addEmail(email) {
        const emails = this.getEmails();
        const newEntry = {
            email: email,
            subscribedAt: new Date().toISOString()
        };
        emails.push(newEntry);
        this.saveEmails(emails);
        return true;
    }

    // Handle form submission
    handleSubscribe(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('emailInput');
        const messageDiv = document.getElementById('subscribeMessage');
        const email = emailInput.value.trim();

        // Validate email format
        if (!this.validateEmail(email)) {
            this.showMessage(messageDiv, 'Please enter a valid email address.', 'error');
            return;
        }

        // Check for duplicates
        if (this.emailExists(email)) {
            this.showMessage(messageDiv, 'This email is already subscribed!', 'error');
            return;
        }

        // Add email
        try {
            this.addEmail(email);
            this.showMessage(messageDiv, 'Thank you for subscribing! We\'ll keep you updated.', 'success');
            emailInput.value = '';
        } catch (error) {
            this.showMessage(messageDiv, 'An error occurred. Please try again.', 'error');
        }
    }

    // Show message to user
    showMessage(element, message, type) {
        element.textContent = message;
        element.className = `message show ${type}`;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            element.classList.remove('show');
        }, 5000);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new EmailSubscriptionManager();
});
