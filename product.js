export default class Product {
  constructor(id, name, quantity, cost) {
    this._id = id;
    this._name = name.toUpperCase();
    this._quantity = Number(quantity);
    this._cost = Number(cost);
    this._total = Number(quantity) * Number(cost);
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  getQuantity() {
    return this._quantity;
  }

  getCost() {
    return this._cost;
  }

  setName(name) {
    this._name = name;
  }

  setQuantity(quantity) {
    this._quantity = quantity;
  }

  setCost(cost) {
    this._cost = cost;
  }

  getTotal() {
    return Number(this._total);
  }

  setTotal(total) {
    this._total = total;
  }

  static readProduct() {
    //leer los inputs (la entrada de datos)
    let inpId = document.querySelector("#id");
    let inpName = document.querySelector("#name");
    let inpQuantity = document.querySelector("#quantity");
    let inpCost = document.querySelector("#cost");

    //obtener el valor
    let id = inpId.value; //string
    let name = inpName.value; //string
    let quantity = Number(inpQuantity.value); //número
    let cost = Number(inpCost.value); //número

    //si cada campo tiene un valor ó que tenga info.
    if (id && name && quantity && cost) {
      //se limpia el formulario
      inpId.value = "";
      inpName.value = "";
      inpQuantity.value = "";
      inpCost.value = "";

      //se crea al participante
      return new Product(id, name, quantity, cost);
    }
    //si falta algún campo, entonces regresa false
    return false;
  }
}
