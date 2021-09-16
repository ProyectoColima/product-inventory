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

  //checar que el participante no esté previamente registrado
  /* _find(product) {
    for (let i = 0; i < this._inventory.length; i++) {
      if (this._inventory[i].getId() === product.getId()) {
        return i;
      } else {
        return -1;
      }
    }
  }*/

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

  delete(idDelete) {
    let search = this.search(idDelete);
    if (search != null) {
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
