### To install package, run the following command:

```bash
npm install
```

### Start server, run the following command:

```bash
npm run build && npm run start
```

### API Endpoints

- GET "/api/products", 
- POST "/api/products"
- GET "/api/products/:id"
- PUT "/api/products/:id"
- DELETE "/api/products/:id"

### Testing API
POST "/api/products"

Body: 
```json
{
  "name": "thang test",
  "description": "thang test",
  "price": "112"
}
```

GET "/api/products"

Filter by name:
```bash
/api/products?name=test
```

Filter by price range:
```bash
/api/products?minPrice=100&maxPrice=500
```