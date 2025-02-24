### To install package, run the following command:

```bash
npm install
```

### Start server, run the following command:

```bash
npm run build && npm run start
```

### API Endpoints
```json
GET "/api/products", 
POST "/api/products"
GET "/api/products/:id"
PUT "/api/products/:id"
DELETE "/api/products/:id"
```
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