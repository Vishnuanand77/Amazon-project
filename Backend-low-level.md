# Backend Low-Level Documentation

## API Routes

### 1. Home Route
```javascript
GET /
Response: Redirect to /products
Status: 302 Found
```

### 2. Product Search
```javascript
GET /products
Query Parameters:
  - q (string, optional): Search query for product name or description

Response Format:
  - Template: products.ejs
  - Data: {
      products: Product[],
      searchQuery: string
    }

Processing:
  - Loads products from JSON database
  - Filters products based on search query (case-insensitive)
  - Renders products template with filtered results
```

### 3. Product Details
```javascript
GET /products/:id
URL Parameters:
  - id (string, required): Product identifier

Response Format:
  - Template: product-details.ejs
  - Data: {
      product: Product
    }
  - Error: {
      template: error.ejs,
      message: string
    }

Processing:
  - Loads products from JSON database
  - Finds product by ID
  - Returns 404 if product not found
```

### 4. Error Handler
```javascript
404 Handler
Response Format:
  - Template: error.ejs
  - Data: {
      message: string
    }
Status: 404 Not Found
```

## Data Models

### Product Model
```javascript
{
  id: string,
  name: string,
  price: number,
  description: string,
  image: string,
  rating: number,
  reviews: number,
  category: string
}
```

## Middleware Configuration

### 1. Logger
```javascript
morgan('dev')
Purpose: HTTP request logging
Output: Method URL Status ResponseTime
```

### 2. CORS
```javascript
cors()
Purpose: Enable cross-origin requests
Configuration: Default settings
```

### 3. Body Parsers
```javascript
express.json()
express.urlencoded({ extended: true })
Purpose: Parse request bodies
Supported formats: JSON, URL-encoded
```

### 4. Static Files
```javascript
express.static(path.join(__dirname, 'public'))
Purpose: Serve static assets
Directory: /public
```

## View Engine Configuration
```javascript
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
Purpose: Template rendering
Engine: EJS
```

## Data Operations

### Search Implementation
```javascript
function searchProducts(query) {
  return products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
}
```

### Product Retrieval
```javascript
function getProductById(id) {
  return products.find(p => p.id === id);
}
```

## Error Handling
- 404 errors for non-existent routes
- 404 errors for non-existent products
- Generic error handler for unexpected errors

## Performance Considerations
- In-memory product data for fast retrieval
- Case-insensitive search for better UX
- Efficient filtering algorithms
- Static file caching enabled 