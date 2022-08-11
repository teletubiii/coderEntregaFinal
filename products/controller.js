const products = require("./service");
class Actions {
  static getAll(req, res) {
    res.send(products.listOfProducts());
  }

  static getOne(req, res) {
    const { id } = req.params;
    const product = products.getProduct(id)
    if(!product){
      res.json({error: `No se encontro el producto con id ${id}`})
    }
    res.send(products.getProduct(id));
  }

  static add(req, res) {
    res.send(products.addProduct(req.body));
  }

  static update(req, res) {
    const { id } = req.params
    const body = req.body
    res.send(products.updateProduct(id, body));
  }

  static delete(req, res) {
    res.send(products.deleteProduct(req.params.id));
  }

}

module.exports = Actions;