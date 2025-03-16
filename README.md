# Amazon Clone Project

A full-stack Express.js clone of Amazon's product search and details pages, created with the assistance of AI (Claude). This project demonstrates modern web development practices and responsive design principles.

## Project Creation Process

This project was created through a collaborative process with AI (Claude), following these steps:

1. **Initial Setup**
   - Created basic Express.js application structure
   - Set up necessary dependencies
   - Implemented core middleware configuration

2. **Frontend Development**
   - Designed responsive product search page
   - Created detailed product view page
   - Implemented error handling pages
   - Added shared components (header, footer)
   - Styled with modern CSS using Grid and Flexbox

3. **Backend Development**
   - Set up Express.js routes
   - Implemented search functionality
   - Created product details endpoint
   - Added error handling middleware

4. **Documentation**
   - Created comprehensive documentation structure
   - Documented frontend and backend separately
   - Provided both high-level and low-level technical details

## Project Structure

```
amazon-clone/
├── app.js                 # Main application file
├── public/               # Static assets
│   └── css/
│       └── styles.css    # Main stylesheet
├── views/                # EJS templates
│   ├── partials/        # Shared components
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── products.ejs     # Product search page
│   ├── product-details.ejs
│   └── error.ejs
├── data/                # Mock database
│   └── products.json
└── docs/                # Documentation
    ├── Frontend-high-level.md
    ├── Frontend-low-level.md
    ├── Backend-high-level.md
    └── Backend-low-level.md
```

## Features

- 🔍 Product search functionality
- 📱 Responsive design
- ⭐ Dynamic rating system
- 🛍️ Amazon-like UI/UX
- 🚀 Performance optimized
- 📦 Mock product database
- 🛡️ Error handling

## Running Locally

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd amazon-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   node app.js
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

### Dependencies

- express: Web application framework
- ejs: Template engine
- dotenv: Environment configuration
- morgan: HTTP request logger
- cors: Cross-origin resource sharing

## Documentation

The project includes detailed documentation split into four main files:

- `Frontend-high-level.md`: Overview of frontend pages and components
- `Frontend-low-level.md`: Detailed frontend technical specifications
- `Backend-high-level.md`: Overview of backend architecture
- `Backend-low-level.md`: Detailed API and implementation specifications

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Add user authentication
- [ ] Implement shopping cart functionality
- [ ] Add product filtering
- [ ] Integrate with a real database
- [ ] Add product reviews system
- [ ] Implement checkout process

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Created with assistance from Claude AI
- Inspired by Amazon's web interface
- Uses Express.js and modern web development practices 