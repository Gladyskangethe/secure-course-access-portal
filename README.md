 Simple Student Learning Platform

A simple and clean frontend system for a learning platform with a login page and course selection interface.

 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Usage](#-usage)
- [Configuration](#-configuration)
- [Project Structure](#-project-structure)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

Features
Login Page
- Simple email and password form with validation
- Clean, responsive design using modern CSS
- Password visibility toggle
- Form validation with error messages
- Redirects to courses page on successful login

Course Page
- Display of 6 available courses in a responsive grid
- Course cards with title, description, and price
- Interactive enroll buttons for each course
- Logout functionality to return to login page
- Responsive design that works on mobile and desktop

Technologies Used

- HTML5: Structure and content
- CSS3: Styling and responsive design
- JavaScript: Interactive functionality
- Font Awesome: Icons for enhanced UI

Installation

 Prerequisites
- A web server (Apache, Nginx, or similar)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- XAMPP (recommended for local development)

Setup Instructions

1. Clone or Download the Project
   ```
   Download all files to your web server directory
   For XAMPP: Place files in C:\xampp\htdocs\aiproject\
   ```

2. Start Your Web Server
   - If using XAMPP: Start Apache from the XAMPP control panel
   - For other servers: Ensure the web server is running and serving the project directory

3. Access the Application
   - Open your browser and navigate to: `http://localhost/aiproject/`
   - Or directly open `index.html` in your browser (may have CORS restrictions)

Usage

Basic Usage

1. Login Process
   - Open `index.html` in your browser
   - Enter any valid email address and password
   - Click the "Login" button
   - You'll be automatically redirected to the courses page

2. Course Selection
   - Browse the available courses displayed in cards
   - Each course shows title, description, and price
   - Click "Enroll" on any course to enroll (currently shows an alert)
   - Use the "Logout" button to return to the login page

 Advanced Usage

- The application uses local storage to maintain login state
- Form validation prevents submission of invalid data
- Responsive design adapts to different screen sizes

 Configuration

Customization Options

- Styling: Modify `styles.css` and `courses-styles.css` to change colors, fonts, and layout
- Courses Data: Edit `courses.html` to add/remove courses or modify course information
- Validation Rules: Update `script.js` and `courses-script.js` to change form validation logic

Environment Variables

No environment variables are required for this frontend-only application.

 Project Structure

```
aiproject/
├── index.html              # Main login page
├── courses.html            # Course selection page
├── styles.css              # Login page styling
├── courses-styles.css      # Course page styling
├── script.js               # Login page JavaScript functionality
├── courses-script.js       # Course page JavaScript functionality
└── README.md               # Project documentation
```

File Descriptions

- `index.html`: Entry point with login form
- `courses.html`: Course browsing and enrollment interface
- `styles.css`: CSS for login page layout and design
- `courses-styles.css`: CSS for course page grid and cards
- `script.js`: Handles login form validation and navigation
- `courses-script.js`: Manages course enrollment and logout functionality

 Troubleshooting

Common Issues

Page not loading correctly
- Ensure all files are in the same directory
- Check that your web server is running
- Verify file permissions allow reading

Login not working
- Check browser console for JavaScript errors
- Ensure JavaScript is enabled in your browser
- Try clearing browser cache and cookies

Styling issues
- Confirm CSS files are linked correctly in HTML
- Check for CSS syntax errors
- Ensure Font Awesome CDN is accessible

Mobile responsiveness problems
- Test on different screen sizes
- Check CSS media queries in style files
- Verify viewport meta tag is present

Debug Mode

To enable debug logging, open browser developer tools (F12) and check the console for any error messages.

 Contributing

We welcome contributions to improve the Simple Student Learning Platform!

How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

 Guidelines

- Follow the existing code style and structure
- Test changes on multiple browsers
- Ensure responsive design works on mobile devices
- Add comments for complex logic
- Update documentation if needed

 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Note: This is a frontend-only demonstration project. For a production learning platform, consider adding backend authentication, database integration, and payment processing.

 Customization

Change Courses
Edit `courses.html` to add or modify courses:
```html
<div class="course">
    <h3>Course Name</h3>
    <p>Course description</p>
    <p class="price">$99.99</p>
    <button onclick="enrollCourse('Course Name')">Enroll</button>
</div>
```

Change Colors
Modify the color codes in `styles.css` and `courses-styles.css`

 Browser Support

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

 Files Overview

- index.html: Login form with email/password fields
- courses.html: Course listing with enroll buttons
- styles.css: Simple CSS for login page
- courses-styles.css: Simple CSS for course page
- script.js: Basic login form handling
- courses-script.js: Enroll and logout functionality

---

Version: 1.0
Status: Ready to use

