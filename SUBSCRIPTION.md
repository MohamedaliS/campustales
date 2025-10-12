# Email Subscription System

This document explains how to use the email subscription feature for Campus Tales.

## For Visitors

### Subscribing to Updates

1. Visit the Campus Tales website
2. Scroll to the footer section
3. Enter your email address in the subscription form
4. Click "Subscribe"
5. You'll see a success message confirming your subscription

**Note:** Each email can only subscribe once. If you try to subscribe again with the same email, you'll receive a message indicating the email is already subscribed.

## For Administrators

### Accessing the Admin Panel

1. Navigate to `/admin.html` or click the "Admin" link in the footer
2. Enter the admin password (default: `campustales2025`)
3. Click "Login"

### Admin Panel Features

#### View Subscribers
- See total subscriber count
- View latest subscriber date
- Browse complete list of subscribers with timestamps

#### Delete Subscribers
- Click the "Delete" button next to any subscriber
- Confirm the deletion when prompted
- The subscriber will be removed immediately

#### Download Subscriber List
- Click "Download CSV" to export all subscribers
- The file will include email addresses and subscription dates
- File format: CSV (comma-separated values)

#### Session Management
- Sessions expire after 1 hour of inactivity
- Click "Logout" to end your session manually
- You'll be redirected to the login page

### Security Notes

- The default password is stored in localStorage
- For production use, consider implementing server-side authentication
- Change the default password by modifying `localStorage.setItem('campustales_auth', 'your-new-password')`

## Technical Details

### Data Storage
- Subscriber data is stored in browser's localStorage
- Key: `campustales_emails`
- Format: JSON array of objects with `email` and `subscribedAt` properties

### Authentication
- Password is stored in localStorage (key: `campustales_auth`)
- Session data is stored in localStorage (key: `campustales_session`)
- Sessions expire after 1 hour

### Email Validation
- Uses standard regex pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Validates format before accepting subscription
- Prevents duplicate subscriptions (case-insensitive)

## Files Structure

```
campustales/
├── index.html          # Main page with subscription form
├── admin.html          # Admin panel login and dashboard
├── styles.css          # Shared styles for all pages
├── script.js           # Subscription form logic
├── admin.js            # Admin panel logic
└── emails.json         # Placeholder (data stored in localStorage)
```

## Browser Compatibility

This system works in all modern browsers that support:
- localStorage
- ES6 JavaScript (classes, arrow functions, template literals)
- CSS Grid and Flexbox

## GitHub Pages Deployment

This system is fully compatible with GitHub Pages as it:
- Uses only client-side JavaScript
- Stores data in localStorage (no server required)
- Has no build step or dependencies
- Works with static file hosting
