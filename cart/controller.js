const cart = require("./service");
class Actions {
  static getAllProducts(req, res) {
    const { id } = req.params
    res.send(cart.listOfProducts(id));
  }

  static add(req, res) {
    res.json(cart.create(req.body));
  }

  static addProduct(req, res) {
    const { id: cartId } = req.params
    const { productId } = req.body

    res.json(cart.addProduct(cartId, productId));
  }

  static deleteProduct(req, res) {
    const { id: cartId, id_prod: productId } = req.params

    res.json(cart.deleteProduct(cartId, productId));
  }

  static deleteCart(req, res) {
    const { id: cartId } = req.params

    res.json(cart.deleteCart(cartId));
  }

}

module.exports = Actions;