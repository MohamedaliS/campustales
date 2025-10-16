// Admin Panel Manager
class AdminPanel {
    constructor() {
        this.storageKey = 'campustales_emails';
        this.authKey = 'campustales_auth';
        this.sessionKey = 'campustales_session';
        // Default password (in production, this should be more secure)
        this.defaultPassword = 'campustales2025';
        
        this.init();
    }

    init() {
        // Check if already logged in
        if (this.isAuthenticated()) {
            this.showDashboard();
        }

        // Setup event listeners
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.handleLogout());
        }

        const downloadBtn = document.getElementById('downloadBtn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => this.downloadCSV());
        }

        const refreshBtn = document.getElementById('refreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => this.loadSubscribers());
        }

        // Set default password if not set
        if (!localStorage.getItem(this.authKey)) {
            localStorage.setItem(this.authKey, this.defaultPassword);
        }
    }

    // Check if user is authenticated
    isAuthenticated() {
        const session = localStorage.getItem(this.sessionKey);
        if (!session) return false;
        
        const sessionData = JSON.parse(session);
        const now = new Date().getTime();
        
        // Session expires after 1 hour
        if (now - sessionData.timestamp > 3600000) {
            localStorage.removeItem(this.sessionKey);
            return false;
        }
        
        return sessionData.authenticated === true;
    }

    // Handle login
    handleLogin(e) {
        e.preventDefault();
        
        const passwordInput = document.getElementById('password');
        const messageDiv = document.getElementById('loginMessage');
        const password = passwordInput.value;
        const storedPassword = localStorage.getItem(this.authKey) || this.defaultPassword;

        if (password === storedPassword) {
            // Set session
            const sessionData = {
                authenticated: true,
                timestamp: new Date().getTime()
            };
            localStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
            
            this.showDashboard();
        } else {
            this.showMessage(messageDiv, 'Incorrect password. Please try again.', 'error');
            passwordInput.value = '';
        }
    }

    // Handle logout
    handleLogout() {
        localStorage.removeItem(this.sessionKey);
        this.showLogin();
    }

    // Show dashboard
    showDashboard() {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('dashboardSection').style.display = 'block';
        this.loadSubscribers();
    }

    // Show login
    showLogin() {
        document.getElementById('loginSection').style.display = 'block';
        document.getElementById('dashboardSection').style.display = 'none';
    }

    // Get all emails
    getEmails() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    }

    // Save emails
    saveEmails(emails) {
        localStorage.setItem(this.storageKey, JSON.stringify(emails));
    }

    // Load and display subscribers
    loadSubscribers() {
        const emails = this.getEmails();
        const totalCount = document.getElementById('totalCount');
        const latestSubscriber = document.getElementById('latestSubscriber');
        const subscribersList = document.getElementById('subscribersList');

        // Update stats
        totalCount.textContent = emails.length;
        
        if (emails.length > 0) {
            const latest = emails[emails.length - 1];
            const date = new Date(latest.subscribedAt);
            latestSubscriber.textContent = date.toLocaleDateString();
        } else {
            latestSubscriber.textContent = 'N/A';
        }

        // Display subscribers list
        if (emails.length === 0) {
            subscribersList.innerHTML = '<div class="empty-subscribers">No subscribers yet.</div>';
        } else {
            // Sort by date (newest first)
            const sortedEmails = [...emails].reverse();
            
            subscribersList.innerHTML = sortedEmails.map((item, index) => {
                const date = new Date(item.subscribedAt);
                const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
                const originalIndex = emails.length - 1 - index;
                
                return `
                    <div class="subscriber-item">
                        <span class="subscriber-email">${this.escapeHtml(item.email)}</span>
                        <span class="subscriber-date">${formattedDate}</span>
                        <button class="btn-delete" data-index="${originalIndex}">Delete</button>
                    </div>
                `;
            }).join('');

            // Add delete event listeners
            const deleteButtons = subscribersList.querySelectorAll('.btn-delete');
            deleteButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(e.target.dataset.index);
                    this.deleteSubscriber(index);
                });
            });
        }
    }

    // Delete subscriber
    deleteSubscriber(index) {
        if (confirm('Are you sure you want to delete this subscriber?')) {
            const emails = this.getEmails();
            emails.splice(index, 1);
            this.saveEmails(emails);
            this.loadSubscribers();
        }
    }

    // Download CSV
    downloadCSV() {
        const emails = this.getEmails();
        
        if (emails.length === 0) {
            alert('No subscribers to download.');
            return;
        }

        // Create CSV content
        let csvContent = 'Email,Subscribed At\n';
        emails.forEach(item => {
            const date = new Date(item.subscribedAt).toISOString();
            csvContent += `"${item.email}","${date}"\n`;
        });

        // Create download link
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', `campustales_subscribers_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Show message
    showMessage(element, message, type) {
        element.textContent = message;
        element.className = `message show ${type}`;
        
        setTimeout(() => {
            element.classList.remove('show');
        }, 5000);
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new AdminPanel();
});
