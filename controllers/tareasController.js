const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const _ = require('lodash');
const { guardarArchivo, leerArchivo } = require('../utils/archivo');
const Tarea = require('../models/tarea');

let tareas = [];

const cargarTareasDesdeArchivo = () => {
  const datos = leerArchivo();
  if (datos) {
    tareas = datos.map(t => new Tarea(t.descripcion, t.id, t.completadoEn));
  }
};

const crearTarea = async () => {
  const { desc } = await inquirer.prompt({
    type: 'input',
    name: 'desc',
    message: 'Descripción:',
    validate(value) {
      if (_.isEmpty(value.trim())) {
        return 'La descripción no puede estar vacía.';
      }
      return true;
    }
  });

  const nueva = new Tarea(desc.trim());
  tareas.push(nueva);
  guardarArchivo(tareas);
  console.log('✅ Tarea creada con éxito'.green);
};

const listarTareas = () => {
  const ordenadas = _.orderBy(tareas, ['completadoEn'], ['asc']);
  console.log();
  ordenadas.forEach((tarea, i) => {
    const idx = `${i + 1}.`.green;
    const estado = tarea.completadoEn ? 'Completada'.green : 'Pendiente'.red;
    console.log(`${idx} ${tarea.descripcion} :: ${estado}`);
  });
};

const listarTareasPorEstado = (completadas = true) => {
  const filtradas = tareas.filter(t => !!t.completadoEn === completadas);
  console.log();
  filtradas.forEach((tarea, i) => {
    const idx = `${i + 1}.`.green;
    const estado = tarea.completadoEn ? tarea.completadoEn.green : 'Pendiente'.red;
    console.log(`${idx} ${tarea.descripcion} :: ${estado}`);
  });
};

const completarTareas = async () => {
  const opciones = tareas.map((t, i) => ({
    value: t.id,
    name: `${(i + 1 + '.').green} ${t.descripcion}`,
    checked: !!t.completadoEn
  }));

  const { ids } = await inquirer.prompt({
    type: 'checkbox',
    name: 'ids',
    message: 'Selecciona tareas a marcar como completadas:',
    choices: opciones
  });

  tareas.forEach(t => {
    if (ids.includes(t.id)) {
      t.completadoEn = new Date().toISOString();
    } else {
      t.completadoEn = null;
    }
  });

  guardarArchivo(tareas);
  console.log('✅ Tareas actualizadas'.green);
};

const borrarTarea = async () => {
  const opciones = tareas.map((t, i) => ({
    value: t.id,
    name: `${(i + 1 + '.').green} ${t.descripcion}`
  }));

  const { id } = await inquirer.prompt({
    type: 'list',
    name: 'id',
    message: 'Seleccione tarea a eliminar:',
    choices: opciones
  });

  const { ok } = await inquirer.prompt({
    type: 'confirm',
    name: 'ok',
    message: '¿Estás seguro?'
  });

  if (ok) {
    tareas = _.reject(tareas, { id });
    guardarArchivo(tareas);
    console.log('🗑️  Tarea eliminada'.yellow);
  }
};

module.exports = {
  crearTarea,
  listarTareas,
  listarTareasPorEstado,
  completarTareas,
  borrarTarea,
  cargarTareasDesdeArchivo
};


