# Campus Tales - Quick Start Guide

## 🚀 Getting Started

### For GitHub Pages Deployment

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select branch: `copilot/add-email-subscription-feature` (or merge to main)
   - Select folder: `/ (root)`
   - Click Save

2. **Access the Site:**
   - Main page: `https://yourusername.github.io/campustales/`
   - Admin panel: `https://yourusername.github.io/campustales/admin.html`

### Default Admin Credentials
- **Password:** `campustales2025`

### Changing the Admin Password

Run this in the browser console on the admin page:
```javascript
localStorage.setItem('campustales_auth', 'your-new-password');
```

## 📋 Features Checklist

### Subscription Form ✅
- [x] Email input in footer
- [x] Format validation
- [x] Stored in localStorage (GitHub Pages compatible)
- [x] Prevents duplicates
- [x] Success/error messages

### Admin Panel ✅
- [x] Password protected
- [x] View all subscribers
- [x] Delete subscribers
- [x] Subscriber count
- [x] Download CSV

### Design ✅
- [x] Mobile-first responsive
- [x] Minimalist black/white/red theme
- [x] Matches existing UI aesthetic

### Technical ✅
- [x] Vanilla JavaScript only
- [x] localStorage authentication
- [x] GitHub Pages compatible
- [x] No build step required

## 🎨 Color Scheme

- **Primary:** Black (#000000)
- **Secondary:** White (#FFFFFF)
- **Accent:** Red (#FF0000)
- **Gray tones:** #F5F5F5, #666666

## 📱 Browser Support

Works on all modern browsers supporting:
- localStorage
- ES6 JavaScript
- CSS Grid & Flexbox

## 📄 File Structure

```
campustales/
├── index.html          # Main landing page with subscription form
├── admin.html          # Admin panel for managing subscribers
├── styles.css          # All styles (mobile-first, responsive)
├── script.js           # Subscription form logic
├── admin.js            # Admin panel logic
├── emails.json         # Placeholder (data in localStorage)
├── README.md           # Project overview
└── SUBSCRIPTION.md     # Detailed documentation
```

## 🔒 Security Notes

- **Client-side only:** All data stored in browser's localStorage
- **Password storage:** Stored in localStorage (not production-grade security)
- **For production:** Consider implementing server-side authentication
- **XSS protection:** HTML is escaped when displaying user data

## 🧪 Testing

### Test Subscription:
1. Visit the main page
2. Scroll to footer
3. Enter email and click Subscribe
4. Verify success message appears
5. Try same email again to test duplicate prevention

### Test Admin Panel:
1. Visit `/admin.html`
2. Enter password: `campustales2025`
3. View subscriber list
4. Test delete functionality
5. Test CSV download
6. Test logout

## 📊 Data Format

Subscriber data is stored as JSON in localStorage:
```json
[
  {
    "email": "user@example.com",
    "subscribedAt": "2025-10-12T17:51:34.123Z"
  }
]
```

## 🆘 Troubleshooting

**Problem:** Subscribers not showing in admin panel
- **Solution:** Check browser's localStorage for key `campustales_emails`

**Problem:** Can't login to admin panel
- **Solution:** Reset password via browser console:
  ```javascript
  localStorage.setItem('campustales_auth', 'campustales2025');
  ```

**Problem:** Session expired
- **Solution:** Sessions expire after 1 hour. Simply login again.

## 📝 License

See main repository for license information.

---

Built with ❤️ for Campus Tales
