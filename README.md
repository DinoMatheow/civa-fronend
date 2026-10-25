# CIVA App — Frontend

Aplicación web para buscar viajes interprovinciales de CIVA por ciudad de origen, destino y fecha de salida. Desarrollada con React y TypeScript, consume una API REST para mostrar los viajes disponibles.

## Funcionalidades

- Página de inicio con buscador de viajes, destinos populares y secciones de servicios.
- Selección de origen y destino, con opción para intercambiarlos.
- Búsqueda de viajes mediante parámetros en la URL.
- Tarjetas con categoría del bus, horario de salida, precio, duración aproximada y asientos disponibles.
- Estados de carga, error y búsqueda sin resultados.
- Diseño adaptable a dispositivos móviles y escritorio.

## Tecnologías

| Tecnología | Uso |
| --- | --- |
| React 19 y TypeScript 6 | Interfaz y tipado |
| Vite 8 | Servidor de desarrollo y compilación |
| React Router 7 | Navegación y parámetros de búsqueda |
| TanStack Query 5 | Consultas y caché de datos |
| Axios | Peticiones HTTP |
| Tailwind CSS 3 y DaisyUI 4 | Estilos y componentes visuales |
| Lucide React | Iconos |
| ESLint 10 | Análisis estático del código |

## Requisitos

- Node.js 22.13 o superior dentro de la versión 22, o Node.js 24 o superior, para satisfacer los requisitos de Vite y ESLint.
- npm.
- Backend de CIVA ejecutándose y accesible desde el navegador. La configuración de ejemplo utiliza `http://localhost:8080`.

## Instalación y ejecución

Desde la carpeta del proyecto:

```bash
npm ci
cp .env.template .env
```

Configura la URL del backend en `.env`:

```dotenv
VITE_CIVA_API_URL=http://localhost:8080
```

Usa la URL base del servidor, sin agregar `/api/v1/trip` ni una barra final. El cliente HTTP agrega la ruta del recurso.

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre la dirección que muestra Vite en la terminal; por defecto es `http://localhost:5173`. Si modificas `.env`, reinicia el servidor de desarrollo.

El backend debe permitir mediante CORS el origen desde el que se ejecuta el frontend.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Verifica los tipos con TypeScript y genera la aplicación en `dist/`. |
| `npm run preview` | Sirve localmente la compilación generada; por defecto, en `http://localhost:4173`. |
| `npm run lint` | Ejecuta ESLint. |

Para previsualizar la compilación:

```bash
npm run build
npm run preview
```

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Página de inicio y buscador de viajes. |
| `/search` | Resultados según origen, destino y fecha de salida. |
| `/auth/login` | Pantalla provisional de inicio de sesión. |
| `/auth/register` | Pantalla provisional de registro. |
| `/admin/dashboard` | Pantalla provisional del panel administrativo. |

`/auth` redirige a `/auth/login` y `/admin` a `/admin/dashboard`. Las rutas no reconocidas redirigen al inicio.

## Conexión con la API

La búsqueda consulta `GET /api/v1/trip` con los siguientes parámetros:

| Parámetro | Descripción |
| --- | --- |
| `originCityId` | Identificador de la ciudad de origen. |
| `destinationCityId` | Identificador de la ciudad de destino. |
| `departureDate` | Fecha de salida en formato `YYYY-MM-DD`. |
| `page` | Índice de página; la consulta actual utiliza `0`. |
| `size` | Tamaño de página; por defecto, `10`. |

La búsqueda se ejecuta cuando están presentes origen, destino y fecha de salida. El backend debe devolver una respuesta paginada con los viajes en `content`.

El catálogo de ciudades está definido en `src/GestionApp/constants/cities.ts`. Sus identificadores deben coincidir con los del backend.

El módulo `src/bus/` también contiene clientes, tipos y componentes para consultar buses mediante `/api/v1/bus`, pero actualmente no tiene una página propia en el enrutador. Algunas funciones de este módulo conservan la URL fija `http://localhost:8080`.

## Estructura del proyecto

```text
src/
├── admin/                 # Layout y pantalla provisional de administración
├── api/                   # Cliente HTTP de viajes
├── assets/                # Recursos gráficos locales
├── auth/                  # Layout y pantallas provisionales de autenticación
├── bus/                   # Consultas, componentes y tipos de buses
├── components/custom/     # Navegación, pie de página y controles compartidos
├── GestionApp/
│   ├── actions/           # Consulta paginada de viajes
│   ├── components/        # Buscador, tarjetas y controles de resultados
│   ├── constants/         # Catálogo local de ciudades
│   ├── interfaces/        # Tipos de respuesta de viajes
│   ├── layouts/           # Layout público
│   └── page/              # Inicio y resultados de búsqueda
├── shared/                # Componentes compartidos
├── App.tsx                # Proveedores de consultas y enrutamiento
├── app.route.tsx          # Definición de rutas
├── index.css              # Estilos globales
└── main.tsx               # Punto de entrada
```

## Estado actual

La consulta de viajes está conectada al backend. Las siguientes partes siguen pendientes de integración:

- Inicio de sesión, registro y panel administrativo: muestran pantallas provisionales, sin autenticación ni protección de rutas.
- Compra de pasajes: el botón «Comprar» únicamente escribe el identificador del viaje en la consola.
- Fecha de retorno: aparece en el formulario, pero no se envía en la búsqueda.
- Filtros laterales y ordenamiento: todavía no modifican los resultados.
- Paginación de resultados: muestra cinco páginas fijas y aún no actualiza la consulta de viajes.
- Algunos enlaces de las secciones promocionales utilizan `#` como destino provisional.

## Despliegue

Ejecuta `npm run build` y publica el contenido de `dist/` en un alojamiento para sitios estáticos. Define `VITE_CIVA_API_URL` con la URL del backend antes de compilar: Vite incorpora este valor durante la compilación.

Configura el alojamiento para servir `index.html` al acceder directamente a rutas como `/search`, ya que la aplicación utiliza navegación con `createBrowserRouter`.
