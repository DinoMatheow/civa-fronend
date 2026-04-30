#  Civa App — Frontend
 
Interfaz web para consultar y buscar buses de la empresa Civa. Permite listar todos los buses disponibles y buscar uno específico por ID.
 
---
 
## Tecnologías
 
- React 19 + TypeScript
- Vite 8
- Tailwind CSS + DaisyUI
- React Router v7
---
 
## Estructura del proyecto
 
```
src/
├── bus/
│   ├── api/          ← Llamadas HTTP (getBusById, getListBus)
│   ├── components/   ← SearchById
│   ├── interfaces/   ← Tipos TypeScript (CivaResponse)
│   ├── layouts/      ← BusLayouts
│   └── page/
│       ├── home/     ← HomePage
│       └── search/   ← SearchPage
├── components/
│   └── custom/       ← CustomMenu
├── router/           ← Configuración de rutas
└── shared/           ← BannerCiva
```
 
---
 
## Requisitos previos
 
- Node.js 18+
- Backend corriendo en `http://localhost:8080`
---
 
## Instalación
 
```bash
npm install
```
 
## Ejecución
 
```bash
npm run dev
```
 
La app estará disponible en `http://localhost:5173`
 
