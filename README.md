# 🧠 Gestor de Tareas - CLI

Sistema de gestión de tareas por consola hecho con Node.js, usando persistencia en archivos y potenciación con la librería Lodash.

---

## 🚀 Características

- Crear tareas con descripciones únicas
- Marcar tareas como completadas o pendientes
- Eliminar tareas con confirmación
- Listar tareas agrupadas u ordenadas
- Guardado permanente en archivo `.json`
- Interfaz amigable por consola (`inquirer`)
- Colores y validaciones visuales (`chalk`, `colors`)
- Potenciado con Lodash para orden, filtros y control de duplicados

---

## 📁 Estructura del Proyecto


```text
gestor-tareas/
├── controllers/
│ └── tareasController.js
├── data/
│ └── tareas.json (se genera automáticamente)
├── helpers/
│ └── menu.js
├── models/
│ └── tarea.js
├── utils/
│ └── archivo.js
├── index.js
├── package.json
└── README.md
```


---

## 📦 Instalación

1. Clona el repositorio o descomprime el ZIP.
2. Abre una terminal dentro de la carpeta del proyecto.
3. Ejecuta:

```bash
npm install
```

## 📦 Dependencias utilizadas

Estas son las librerías que debes instalar con `npm install`:

| Librería   | Versión recomendada | Propósito                                  |
|------------|---------------------|--------------------------------------------|
| `inquirer` | ^8.2.4              | Menús y formularios en la consola          |
| `chalk`    | ^4.1.2              | Colores en la consola                      |
| `colors`   | ^1.4.0              | Alternativa para colorear textos           |
| `lodash`   | ^4.17.21            | Manipulación de datos (ordenar, agrupar...)|
| `uuid`     | ^8.3.2              | Crear identificadores únicos para tareas   |

- Si por alguna razón no se instalan, puedes hacerlo manualmente:

```bash
npm install inquirer chalk colors lodash uuid
```

## ▶️ Ejecución

```bash
npm start
```

---

## 🧪 Comandos disponibles

El menú te permitirá:

- ✅ Crear tareas  
- 📋 Listar todas, completadas o pendientes  
- ✔️ Marcar tareas como completadas  
- ❌ Eliminar tareas con confirmación  
- 💾 Guardar todo automáticamente en `/data/tareas.json`

---

## 📜 Licencia

MIT © Manuel para Don Brian 😎

