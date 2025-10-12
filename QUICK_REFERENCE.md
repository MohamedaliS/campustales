# Campus Tales - Quick Reference Card

## Deployment Commands

```bash
# Commit and push to GitHub
git add .
git commit -m "Deploy Campus Tales"
git push origin main

# Enable GitHub Pages:
# Settings → Pages → Branch: main → Save
```

## Admin Access

**URL:** `/admin.html`  
**Default Password:** `admin123`

**Change Password (in browser console):**
```javascript
localStorage.setItem('campusTalesAdminPassword', 'new-password');
```

## Email Subscription Features

- Real-time validation
- Duplicate prevention
- Success/error feedback
- LocalStorage persistence
- Mobile-optimized

## Color Scheme

- Primary: `#000000` (Black)
- Accent: `#ef4444` (Red)
- Background: `#ffffff` (White)
- Muted: `#71717a` (Gray)

## Breakpoints

- Mobile: 320px - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px+

## Admin Panel Features

1. **View Subscribers** - See all emails with count
2. **Search** - Filter emails in real-time
3. **Delete** - Remove individual subscribers
4. **Clear All** - Bulk delete with confirmation
5. **Export CSV** - Download subscriber list
6. **Auto-refresh** - Updates every 30 seconds

## File Structure

```
campustales/
├── index.html      # Main website
├── admin.html      # Admin panel
├── emails.json     # Data structure
├── README.md       # Full docs
└── SETUP.html      # Setup guide
```

## Test Checklist

**Subscription Form:**
- [ ] Invalid email shows error
- [ ] Valid email shows success
- [ ] Duplicate email shows warning
- [ ] Data persists in localStorage

**Admin Panel:**
- [ ] Wrong password blocked
- [ ] Correct password grants access
- [ ] Subscriber count accurate
- [ ] Search filters correctly
- [ ] Delete removes email
- [ ] CSV downloads properly
- [ ] Clear all works with confirm
- [ ] Logout returns to login

## Browser DevTools

**View localStorage:**
```javascript
// View subscribers
JSON.parse(localStorage.getItem('campusTalesSubscribers'))

// View password
localStorage.getItem('campusTalesAdminPassword')

// Check session
sessionStorage.getItem('campusTalesAuth')
```

## Customization Quick Edits

**Change Logo Emoji:**
```html
<div class="logo-icon"></div>  <!-- Change logo here -->
```

**Update Title:**
```html
<div class="logo-text">Campus Tales</div>
```

**Modify Author:**
```html
<div class="author-name">by Your Name</div>
```

**Add Comic:**
```javascript
const comics = [
    {
        title: "Title",
        date: "Month DD, YYYY",
        image: "image.png",
        caption: "Caption"
    }
];
```

## Local Development

**Python:**
```bash
python3 -m http.server 8000
```

**Node.js:**
```bash
npx serve
```

**PHP:**
```bash
php -S localhost:8000
```

**Access:** `http://localhost:8000`

## Known Limitations

- Client-side storage only (no server)
- Password in localStorage (not secure)
- No email sending capability
- No real-time sync across devices
- Browser-dependent data

## Security Recommendations

For production:
- Use Firebase/Supabase for auth
- Implement server-side validation
- Store data in real database
- Add email verification
- Enable HTTPS

## Support

- **Documentation:** `README.md`
- **Setup Guide:** `SETUP.html`
- **GitHub Issues:** [Create Issue](https://github.com/MohamedaliS/campustales/issues)

## Production Ready Checklist

- [ ] Custom branding added
- [ ] Admin password changed
- [ ] Social links updated
- [ ] Comic images uploaded
- [ ] Tested on mobile
- [ ] Tested on desktop
- [ ] Subscription form working
- [ ] Admin panel functional
- [ ] GitHub Pages enabled
- [ ] Custom domain configured (optional)

---

**Version:** 1.0  
**Last Updated:** October 2025  
**Author:** Mohammed Ali Sharafuddin
