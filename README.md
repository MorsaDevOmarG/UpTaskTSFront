# Proyecto UpTask - Front End

- **_npm i create vite@latest_**

## Herramientas y/o Tecnologías

- Vite
- React
- TypeScript
- TailwindCSS
  - **_npm i -D tailwindcss@3 postcss autoprefixer_**
  - **_npx tailwindcss init -p_**
- React Router DOM
  - **_npm i react-router-dom_**
- **IMPORT** de archivos
  - **_npm i -D @types/node_**
  - Configuramos en los archivos:
    - **vite.config.ts**
      - ```
        import { defineConfig } from 'vite';
        import react from '@vitejs/plugin-react-swc';
        import { fileURLToPath, URL } from 'node:url'; // Se importaron para los IMPORT

        // https://vite.dev/config/
        export default defineConfig({
          plugins: [react()],
          // Se agrega esto para los IMPORT
          resolve: {
            alias: {
              "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
          },
        });
      ```
    - **tsconfig.app.json**
      - ```
        {
          "compilerOptions": {
            "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
            "target": "ES2022",
            "useDefineForClassFields": true,
            "lib": ["ES2022", "DOM", "DOM.Iterable"],
            "module": "ESNext",
            "types": ["vite/client"],
            "skipLibCheck": true,

            // Se agregaron estas líneas para los IMPORT
            "baseUrl": "src",
            "paths": {
              "@/components/*": ["components/*"]
            },

            /* Bundler mode */
            "moduleResolution": "bundler",
            "allowImportingTsExtensions": true,
            "verbatimModuleSyntax": true,
            "moduleDetection": "force",
            "noEmit": true,
            "jsx": "react-jsx",

            /* Linting */
            "strict": true,
            "noUnusedLocals": true,
            "noUnusedParameters": true,
            "erasableSyntaxOnly": true,
            "noFallthroughCasesInSwitch": true,
            "noUncheckedSideEffectImports": true
          },
          "include": ["src"]
        }
      ```
  - Con estas configuraciones, los **import** se mandarán a llamar de la siguiente manera:
    - Antes de la configuración: _import Logo from "../components/Logo";_
    - Después de la configuración: _import Logo from "@/components/Logo";_
- Menú Hamburguesa:
  - _https://headlessui.com/_
  - **_npm i @headlessui/react @heroicons/react_**
- React Hook Form
  - **_npm i react-hook-form_**
- ZOD
  - **_npm i zod_**
- AXIOS
  - **_npm i axios_**
  - Se crea la carpeta:
    - **lib**
  - Se genera el archivo:
    - _axios.ts_
  - Dentro de él se realiza la configuración para apuntar a la _URL_ de la _API_.
- Toast
  - **_npm i react-toastify_**
  - Mostrar alertas o mensajes.
- React Query
  - **_npm i @tanstack/react-query_**
  - **_npm i @tanstack/react-query-devtools_**
- Traducción es contenido
  - **_npm i react-i18next_**

### REACT QUERY

- Ó también: _TanStack Query_ es una librería para obtener datos del servidor.
- Sus ventajas principales son que obtiene los datos de forma optimizada y rápida; además cachea las consultas, sincroniza y actualiza los datos del servidor de forma muy simple.
- Se puede utilizar con: _FETCH API o Axios_.
- Introduce una gran cantidad de conceptos nuevos; pero hay 2 que son los más importantes.
- **QUERIES**
  - Se utilizan para obtener datos de un servidor o una _API (GET)_.
  - _useQuery_
- **MUTATIONS**
  - Se utilizan para **crear / actualizar / eliminar** datos en el servidor: _(POST, PUT, PATCH, DELETE)_.
- Instalación:
  - **_npm i @tanstack/react-query_**
  - _useMutation_
