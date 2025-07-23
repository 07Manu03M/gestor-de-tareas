const menu = require('./helpers/menu');
const {
  crearTarea,
  listarTareas,
  listarTareasPorEstado,
  completarTareas,
  borrarTarea,
  cargarTareasDesdeArchivo
} = require('./controllers/tareasController');

const main = async () => {
  let opt = '';
  do {
    opt = await menu.mostrarMenu();

    switch (opt) {
      case '1':
        await crearTarea();
        break;
      case '2':
        listarTareas();
        break;
      case '3':
        listarTareasPorEstado(true);
        break;
      case '4':
        listarTareasPorEstado(false);
        break;
      case '5':
        await completarTareas();
        break;
      case '6':
        await borrarTarea();
        break;
    }

    if (opt !== '0') await menu.pausa();

  } while (opt !== '0');
};

cargarTareasDesdeArchivo();
main();
