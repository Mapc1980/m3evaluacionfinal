# Proyecto Final - Bootstrap 5 + Sass + AOS

Este proyecto implementa una interfaz responsiva utilizando Bootstrap 5, animaciones AOS y estilos personalizados escritos con Sass y organizados bajo la metodología 7-1.

## ✅ Características

- ✔️ 6 productos con efecto `hover`
- ✔️ Navbar y footer con degradado animado usando Sass
- ✔️ Secciones:
  - Quiénes Somos
  - Comentarios
  - Contacto con formulario
- ✔️ Animaciones con AOS al hacer scroll
- ✔️ Compilación automática de Sass con `npm run watch-css`

## 📁 Estructura del Proyecto

```
proyecto-final-bootstrap5/
├── src/
│   ├── index.html              # Página principal
│   ├── js/script.js            # Lógica JS (vacía)
│   ├── sass/                   # Carpeta Sass (estructura 7-1)
│   │   ├── abstracts/          # Variables y mixins
│   │   ├── components/         # Partes: navbar, footer, etc.
│   │   └── main.scss           # Importa todo
│   ├── package.json            # Configuración de scripts npm
│   └── netlify.toml            # Configuración para Netlify
├── dist/
│   └── css/styles.css          # Archivo compilado por Sass
```

## 🚀 Instalación y uso

### 1. Instala las dependencias

```bash
npm install
```

### 2. Compila Sass manualmente

```bash
npm run build-css
```

### 3. O compila automáticamente en segundo plano

```bash
npm run watch-css
```

### 4. Abre el archivo HTML

Abre `src/index.html` directamente en el navegador o con Live Server desde VSCode.

## 🎨 Personalización rápida

Cambia colores y fuentes desde:

`src/sass/abstracts/_variables.scss`

```scss
$primary: #16a085;
$gradient-start: #0f2027;
$font-family-base: 'Segoe UI', sans-serif;
```

## 🌐 Despliegue

Puedes desplegar este proyecto en Netlify fácilmente:
- Sube el proyecto
- Netlify ejecutará `npm run build-css`
- Publicará desde la carpeta `dist/`

---

✍️ Desarrollado como parte del módulo de Interfaz Web — Bootcamp Frontend.