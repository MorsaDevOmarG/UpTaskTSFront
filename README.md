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
- React Query