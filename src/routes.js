const { Router } = require('express');

const routes = Router();
const ProductController = require('./Controllers/ProductController');

routes.get('/health', (req, res) => {
  return res.status(200).json({ message: 'Server esta online' });
});

routes.post('/products', ProductController.create);
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;
