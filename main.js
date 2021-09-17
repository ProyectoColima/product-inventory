import Product from "./product.js";
import Inventory from "./inventory.js";

class App {
  constructor() {
    this._inventory = new Inventory();
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", this._addProduct);

    let btnFind = document.querySelector("#btnFind");
    btnFind.addEventListener("click", this._search);

    let btnDelete = document.querySelector("#btnDelete");
    btnDelete.addEventListener("click", this._delete);
  }
  _addProduct = () => {
    let product = Product.readProduct();

    if (!product) {
      Swal.fire("Error", "Todos los campos son requeridos", "error");
      return;
    }
    let added = this._inventory.add(product);

    if (added === false) {
      Swal.fire("Error", "Participante ya registrado", "error");
      return;
    }
    Swal.fire("Correcto", "Se agregó un nuevo participante", "success");
  };

  _delete = () => {
    let inpIdDelete = document.querySelector("#idDelete");
    let idDelete = inpIdDelete.value;

    let del = this._inventory.delete(idDelete);

    if (del === false) {
      Swal.fire("Error", "Producto no existe", "error");
      return;
    }
    Swal.fire("Producto eliminado", "Eliminado", "success");
  };

  _search = () => {
    let inpIdFind = document.querySelector("#idFind");
    let idFind = inpIdFind.value;

    let find = this._inventory.searchProduct(idFind);

    if (find === false) {
      Swal.fire("Error", "Producto no existe", "error");
      return;
    }
    Swal.fire("Producto encontrado", "Encontrado", "success");
  };
}

new App();
