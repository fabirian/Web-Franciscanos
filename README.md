## Web Franciscanos

**Sistema integral de gestión y visualización de contenidos para la comunidad Franciscana**

## 📌 Descripción del Proyecto

Web Franciscanos es una plataforma moderna que combina:

- **Frontend dinámico** desarrollado con React.js y Vite
- **CMS robusto** construido con Strapi (Node.js)
- **Diseño adaptable** implementado con Tailwind CSS

El sistema permite:

✔️ Publicación y gestión centralizada de contenidos espirituales, eventos y noticias  
✔️ Administración de usuarios y permisos para la comunidad Franciscana  
✔️ Visualización optimizada para dispositivos móviles y desktop  
✔️ Integración con redes sociales y plataformas de donaciones  

**Objetivo principal**: Digitalizar y modernizar la presencia online de la comunidad Franciscana, facilitando la comunicación con sus miembros y el público en general.

## 🎯 Características Clave

### Para Administradores
- Panel de control intuitivo para gestión de contenidos
- Sistema de publicación programada
- Moderación de comentarios
- Estadísticas de visitas

### Para Usuarios
- Acceso a recursos espirituales
- Calendario de eventos interactivo
- Galería multimedia
- Formularios de contacto

**Tecnologías principales**: 
`React 18` `Strapi 4` `Tailwind CSS 3` `JWT Auth` `REST API`

### Versiones alternativas:

## 🖥️ Arquitectura Técnica

Solución fullstack con separación clara de capas:
- **Frontend**: Single Page Application con React + Vite
- **Backend**: API RESTful con Strapi (Node.js/Express)
- **Base de datos**: PostgreSQL (en producción)
- **Autenticación**: JWT con roles personalizados
- **CI/CD**: Despliegue automático con GitHub Actions

## ✝️ Misión Franciscana Digital

Este proyecto busca llevar la espiritualidad Franciscana al mundo digital mediante:
- Publicación diaria de reflexiones
- Transmisión en vivo de misas
- Plataforma de oración comunitaria
- Recursos para formación espiritual
- Conexión con obras sociales
```

## 🚀 Tecnologías

**Frontend**  
[![React](https://img.shields.io/badge/React-18.2-%2361DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0-%646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.3-%2338B2AC?logo=tailwind-css)](https://tailwindcss.com/)

**Backend**  
[![Strapi](https://img.shields.io/badge/Strapi-4.5-%232F2E8B?logo=strapi)](https://strapi.io/)

## ✨ Características

- CMS completo con Strapi
- Diseño responsive con Tailwind CSS
- Autenticación JWT
- Panel de administración personalizado
- API RESTful

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/fabirian/Web-Franciscanos.git
cd Web-Franciscanos
```

2. Configura el backend (Strapi):
```bash
cd backend
npm install
cp .env.example .env
# Configura las variables en .env
npm run develop
```

3. Configura el frontend (React):
```bash
cd ../frontend
npm install
cp .env.example .env
npm run dev
```

## 🌐 Variables de Entorno

`backend/.env`:
```ini
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

`frontend/.env`:
```ini
VITE_API_URL=http://localhost:1337
```

## 📂 Estructura del Proyecto

```
Web-Franciscanos/
├── backend/          # API Strapi
│   ├── src/          # Modelos y controladores
│   └── config/       # Configuraciones
├── frontend/         # Aplicación React
│   ├── public/       # Assets estáticos
│   └── src/          # Componentes y páginas
├── .github/          # Workflows CI/CD
└── README.md
```

## 🤝 Contribución

1. Haz fork al proyecto
2. Crea tu branch (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

MIT © [Fabián Galindez Rivera](https://github.com/fabirian)

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
```

### Para personalizar:
1. Reemplaza las imágenes placeholder con capturas reales
2. Añade badges específicos de tus herramientas
3. Incluye instrucciones para:
   - Primer despliegue
   - Creación de usuario admin
   - Configuración de la base de datos
4. Agrega enlaces a tu demo en vivo si está disponible
