//clase para agregar los pasrticipantes a la "tabla"

export default class Inventory {
  constructor() {
    //vector para agregar a todos los participantes
    this._inventory = new Array();

    //tabla
  }

  //agrega los participantes
  add(product) {
    let pos = this._find(product);

    //si ya está registrado, no lo agrega
    if (pos >= 0) {
      return false;
    }

    //se muestra en la tabla

    //si no lo encuentra, lo agrega
    this._inventory.push(product);
    console.log(this._inventory);

    return true;
  }

  _find(product) {
    let pos = -1;
    let pos2 = -1;
    this._inventory.forEach((p) => {
      if (p.getId() === product.getId()) {
        pos++;
        pos2 = pos;
        return;
      } else {
        pos++;
      }
    });

    return pos2;
  }

  search(id) {
    for (let i = 0; i < this._inventory.length; i++) {
      if (id == this._inventory[i].getId()) {
        return i;
      }
    }
    return null;
  }
  searchProduct(idFind) {
    let find = this.search(idFind);
    if (find != null) {
      document.getElementById("elementFind").innerHTML =
        "Producto encontrado ID: " +
        this._inventory[find].getId() +
        " Nombre: " +
        this._inventory[find].getName() +
        " Cantidad existente: " +
        this._inventory[find].getQuantity() +
        " Costo: $" +
        this._inventory[find].getCost();
      return true;
    }
    document.getElementById("elementFind").innerHTML = " ";
    return false;
  }

  delete(idDelete) {
    let search = this.search(idDelete);
    if (search != null) {
      document.getElementById("elementDelete").innerHTML =
        "Se ELIMINO este producto de su inventario  ID = " +
        this._inventory[search].getId() +
        " NOMBRE = " +
        this._inventory[search].getName();
      for (let i = search; i < this._inventory.length; i++) {
        this._inventory[i] = this._inventory[i + 1];
      }

      this._inventory.pop();

      console.log(this._inventory);
      return true;
    }
    console.log(this._inventory);
    return false;
  }
}
