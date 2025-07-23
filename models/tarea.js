const { v4: uuidv4 } = require('uuid');

class Tarea {
  constructor(descripcion, id = uuidv4(), completadoEn = null) {
    this.id = id;
    this.descripcion = descripcion;
    this.completadoEn = completadoEn;
  }
}

module.exports = Tarea;

