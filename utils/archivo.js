const fs = require('fs');
const path = './data/tareas.json';

const guardarArchivo = (data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

const leerArchivo = () => {
  if (!fs.existsSync(path)) return null;
  const info = fs.readFileSync(path, { encoding: 'utf-8' });
  return JSON.parse(info);
};

module.exports = {
  guardarArchivo,
  leerArchivo
};

