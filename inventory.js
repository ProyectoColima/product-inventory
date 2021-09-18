//clase para agregar los pasrticipantes a la "tabla"

export default class Inventory {
  constructor() {
    //vector para agregar a todos los participantes
    this._inventory = new Array();
    this._table = document.querySelector("#table");
    this._table2 = document.querySelector("#table2");

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
    if (this._inventory.length < 20) {
      this._inventory.push(product);

      return true;
    }
    return;
  }

  addPos(product) {
    let inpPos = document.querySelector("#pos");
    let posInto = inpPos.value;

    if (posInto < this._inventory.length + 2) {
      let pos = this._find(product);

      //si ya está registrado, no lo agrega
      if (pos >= 0) {
        return false;
      }

      //se muestra en la tabla

      //si no lo encuentra, lo agrega
      if (this._inventory.length < 20) {
        this._inventory.push(product);
        for (let i = this._inventory.length - 1; i >= posInto; i--) {
          this._inventory[i] = this._inventory[i - 1];
        }
        this._inventory[posInto - 1] = product;

        console.log(this._inventory);
        return true;
      }

      return 1;
    } else {
      return 0;
    }
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

  list() {
    document.getElementById("table").innerHTML =
      "<table><tr><td><b>Id de Producto</b></td><td><b>Nombre</b></td><td><b>Cantidad</b></td><td><b>Costo por Unidad</b></td><td><b>Valor de Mercancía</b></td></tr></table>";
    this._inventory.forEach((s) => {
      let row = this._table.insertRow(-1);

      let colId = row.insertCell(0);
      let colName = row.insertCell(1);
      let colQuantity = row.insertCell(2);
      let colCost = row.insertCell(3);
      let colTotalValue = row.insertCell(4);

      colId.innerHTML = s.getId();
      colName.innerHTML = s.getName();
      colQuantity.innerHTML = s.getQuantity();
      colCost.innerHTML = "$ " + s.getCost();
      colTotalValue.innerHTML = "$ " + s.getTotal();
    });
    return;
  }
  listReverse() {
    document.getElementById("table2").innerHTML =
      "<table><tr><td><b>Id de Producto</b></td><td><b>Nombre</b></td><td><b>Cantidad</b></td><td><b>Costo por Unidad</b></td><td><b>Valor de Mercancía</b></td></tr></table>";

    for (let i = this._inventory.length; i > 0; i--) {
      let row = this._table2.insertRow(-1);

      let colId = row.insertCell(0);
      let colName = row.insertCell(1);
      let colQuantity = row.insertCell(2);
      let colCost = row.insertCell(3);
      let colTotalValue = row.insertCell(4);

      colId.innerHTML = this._inventory[i - 1].getId();
      colName.innerHTML = this._inventory[i - 1].getName();
      colQuantity.innerHTML = this._inventory[i - 1].getQuantity();
      colCost.innerHTML = "$ " + this._inventory[i - 1].getCost();
      colTotalValue.innerHTML = "$ " + this._inventory[i - 1].getTotal();
    }
    return;
  }
}
