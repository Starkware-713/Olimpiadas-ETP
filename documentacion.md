# 📚 Documentación del Proyecto Olimpiadas ETP

## 📖 Índice
1. [Introducción](#introducción)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Componentes Principales](#componentes-principales)
4. [Guía de Navegación](#guía-de-navegación)
5. [Configuración](#configuración)

## 🎯 Introducción
Esta aplicación está construida con Angular, un framework moderno para crear aplicaciones web. El proyecto está organizado de manera que sea fácil de mantener y escalar.

## 📁 Estructura del Proyecto

### Archivos Principales
- `angular.json` - Configuración principal de Angular
- `package.json` - Lista de dependencias y scripts
- `tsconfig.json` - Configuración de TypeScript
- `README.md` - Información general del proyecto

### Carpetas Importantes

#### 📂 src/ (Código Fuente)
- `index.html` - Página principal
- `main.ts` - Punto de entrada de la aplicación
- `styles.css` - Estilos globales

#### 📂 src/app/ (Componentes de la Aplicación)
##### Páginas (pages/)
1. **Autenticación** (auth/)
   - `login/` - Inicio de sesión
   - `register/` - Registro de usuarios

2. **Principal** (home/)
   - `home/` - Página principal
   - `about/` - Información sobre el proyecto

3. **Panel de Control** (dashboard/)
   - Vista general y estadísticas

##### Compartidos (shared/)
- `header/` - Barra de navegación superior
- `footer/` - Pie de página

## 🔍 Componentes Principales

### 🔐 Sistema de Autenticación
- **Login**: Permite a los usuarios acceder a su cuenta
- **Registro**: Permite crear nuevas cuentas

### 🏠 Área Principal
- **Home**: Centro de la aplicación
- **About**: Información detallada del proyecto

### 📊 Dashboard
- Panel principal para visualización de datos
- Interfaz de usuario intuitiva

## 🧭 Guía de Navegación

### Rutas Principales
```
/login     → Página de inicio de sesión
/register  → Página de registro
/home      → Página principal
/home/about → Información del proyecto
```

### Estructura de Archivos por Componente
Cada componente sigue esta estructura:
- `*.html` - Plantilla visual
- `*.css` - Estilos específicos
- `*.ts` - Lógica del componente
- `*.spec.ts` - Pruebas unitarias

## ⚙️ Configuración

### Archivos de Configuración
1. **angular.json**
   - Configuración del proyecto Angular
   - Rutas de archivos
   - Configuración de construcción

2. **tsconfig.json**
   - Configuración de TypeScript
   - Opciones de compilación

3. **package.json**
   - Dependencias del proyecto
   - Scripts disponibles

### Scripts Disponibles
- `ng serve` - Inicia el servidor de desarrollo
- `npm test` - Ejecuta las pruebas unitarias

## 🚀 Comenzando

1. **Instalación**
   ```
   npm install
   ```

2. **Desarrollo**
   ```
   npm start
   ```

3. **Pruebas**
   ```
   npm test
   ```

## 📝 Notas Adicionales
- La aplicación utiliza Angular como framework principal
- Sigue una estructura modular para fácil mantenimiento
- Incluye sistema de autenticación completo
- Diseño responsive para todos los dispositivos

## 🤝 Contribución
Para contribuir al proyecto:
1. Revisar la estructura de carpetas
2. Seguir los estándares de código establecidos
3. Crear pruebas para nuevas funcionalidades
4. Documentar los cambios realizados

---
