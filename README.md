# Campus Tales

A minimalist black & white comic strip series celebrating college life. New episodes released monthly. Built with pure HTML, CSS, and JavaScript - no frameworks, no dependencies.

**Live Demo:** [https://mohamedalis.github.io/campustales](https://mohamedalis.github.io/campustales)

## Features

### Main Website
- **Responsive Design** - Mobile-first with breakpoints at 320px, 640px, and 1024px
- **Comic Strip Reader** - Swipeable carousel with navigation controls
- **Minimalist Aesthetic** - shadcn-inspired design with black, white, and red accents
- **Touch-Friendly UI** - 44px+ tap targets for mobile devices
- **Archive Grid** - Browse past comic strips

### Email Subscription System
- Simple email input form in footer
- Real-time email format validation
- Duplicate prevention
- Success/error message feedback
- LocalStorage-based data persistence (works on GitHub Pages)
- Mobile-optimized form layout

### Admin Panel
- **Password Protection** - Simple localStorage authentication
- **Dashboard Stats** - View total subscriber count and last update time
- **Email Management** - View all subscribed emails with search functionality
- **Delete Emails** - Remove individual subscribers
- **Bulk Actions** - Clear all subscribers with confirmation
- **CSV Export** - Download subscriber list for backup/migration
- **Auto-Refresh** - Stats update every 30 seconds
- **Mobile-Responsive** - Full functionality on all devices

## Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohamedaliS/campustales.git
   cd campustales
   ```

2. **Open in browser**
   ```bash
   # Option 1: Using Python
   python -m http.server 8000
   
   # Option 2: Using Node.js
   npx serve
   
   # Option 3: Using PHP
   php -S localhost:8000
   ```

3. **Visit** `http://localhost:8000`

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` → `/ (root)`
   - Click Save

3. **Access your site**
   - Visit: `https://yourusername.github.io/campustales`
   - Updates deploy automatically on push to main

## Project Structure

```
campustales/
├── index.html          # Main website
├── admin.html          # Admin panel (password: admin123)
├── styles.css          # Site styling
├── script.js           # Subscription form logic
├── admin.js            # Admin dashboard logic
├── emails.json         # Subscriber data structure
├── images/             # UI assets (logos, presentation image)
├── assets/             # Production assets (characters, backgrounds, props, panels, lettering)
├── episodes/           # Working episode folders created by the workflow script
├── exports/            # Final outputs the site references (web + social variants; placeholder.svg lives in exports/web/ until real strips are exported)
├── data/               # Optional JSON data (e.g., comics.json)
├── scripts/            # Utility scripts (e.g., new_episode.sh)
└── README.md           # Documentation
```

### Linux drawing workflow
1. Create a new episode workspace: `./scripts/new_episode.sh 001 first_day` → generates `episodes/ep001_first_day/` with script, thumbnails, and layout checklist.
2. Draw and iterate inside `episodes/epNNN_slug/` (scripts, thumbnails, layered files).
3. Export the final PNG strip to `exports/web/epNNN_slug_strip.png` so the site can reference it directly.
4. Add or update the comics metadata in `index.html` (or in `data/comics.json` for a future JSON-driven approach).

## How to Use

### For Visitors

1. **Browse Comics** - Scroll through the latest comic strips
2. **Navigate** - Use arrow buttons or swipe gestures on mobile
3. **Subscribe** - Enter your email in the footer to get updates
4. **Archive** - Click any thumbnail to jump to that comic

### For Admins

1. **Access Admin Panel**
   - Click the small "Admin" link in the footer
   - Or visit `/admin.html` directly
   
2. **Login**
   - Default password: `admin123`
   - Change it by modifying localStorage in browser console:
     ```javascript
     localStorage.setItem('campusTalesAdminPassword', 'your-new-password');
     ```

3. **Manage Subscribers**
   - View total count
   - Search emails
   - Delete individual subscribers
   - Download CSV backup
   - Clear all (with confirmation)

## Design System

### Color Palette
- **Primary:** Black (#000000)
- **Background:** White (#ffffff)
- **Accent:** Red (#ef4444)
- **Muted:** Gray (#71717a)
- **Border:** Light Gray (#e4e4e7)

### Typography
- **Font Stack:** Inter, system-ui, -apple-system, sans-serif
- **Mobile:** 16px base, 1.375rem-1.5rem headings
- **Desktop:** Scales proportionally

### Breakpoints
- **Mobile:** 320px - 639px
- **Tablet:** 640px - 1023px
- **Desktop:** 1024px+

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks
- **LocalStorage** - Data persistence
- **GitHub Pages** - Static hosting

## Customization

### Change Branding
Edit `index.html` and `admin.html`:
```html
<!-- Logo emoji -->
<div class="logo-icon"></div>

<!-- Title -->
<div class="logo-text">Campus Tales</div>

<!-- Author -->
<div class="author-name">by Mohammed Ali Sharafuddin</div>
```

### Add New Comics
Edit the `comics` array in `index.html`:
```javascript
const comics = [
    {
        title: "Your Comic Title",
        date: "Month DD, YYYY",
        image: "path/to/image.png",
        caption: "Your caption here"
    },
    // Add more...
];
```

### Change Admin Password
In browser console after setting:
```javascript
localStorage.setItem('campusTalesAdminPassword', 'your-secure-password');
```

### Modify Color Scheme
Update CSS variables in `index.html` and `admin.html`:
```css
:root {
    --accent: #your-color;
    --primary: #your-color;
}
```

## Security Notes

**Important:** This is a client-side implementation suitable for low-security applications:

- Admin password stored in localStorage (not secure for sensitive data)
- Subscriber data stored client-side (no server-side validation)
- Anyone with browser access can view/modify localStorage

For production use with sensitive data, implement:
- Server-side authentication (e.g., Firebase, Supabase)
- Database for subscriber storage
- API endpoints with proper authorization
- HTTPS encryption

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android)

## Contributing

Contributions welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## License

MIT License - feel free to use for personal or commercial projects.

## Author

**Mohammed Ali Sharafuddin**
- GitHub: [@MohamedaliS](https://github.com/MohamedaliS)

## Acknowledgments

- Design inspired by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Font Awesome](https://fontawesome.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)

---

Made with love for college students everywhere
