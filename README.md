```markdown
## Web Franciscanos

<p align="center">
  <img src="https://via.placeholder.com/800x400.png?text=Web+Franciscanos+Preview" alt="Preview">
</p>

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
