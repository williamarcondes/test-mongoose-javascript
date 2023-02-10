const ProductModel = require('../Models/ProductModel');

class ProductController {
  async create(req, res) {
    const { title, description, price } = req.body;
    const productAlreadtExists = await ProductModel.findOne({ title });

    if (productAlreadtExists) {
      return res.status(400).json({ message: 'Este produto já esta cadastrado' });
    }

    const createdProduct = await ProductModel.create(req.body);
    return res.status(200).json(createdProduct);
  }

  async index(req, res) {
    const products = await ProductModel.find();
    return res.status(200).json(products);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductModel.findById(id);

      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }

      return res.status(200).json(product);
    } catch {
      return res.status(404).json({ message: 'Id de Produto não é valida' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      await ProductModel.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ message: 'Produto atualizado' });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const productDeleted = await ProductModel.findByIdAndDelete(id);
      return res.status(200).json({ message: `Produto ${productDeleted.title} foi excluído com Sucesso` });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new ProductController();
