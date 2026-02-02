# Proyecto UpTask - Front End

- **_npm i create vite@latest_**

## Herramientas y/o Tecnologías

- Vite
- React
- TypeScript
- TailwindCSS
  - **_npm i -D tailwindcss@3 postcss autoprefixer_**
  - **_npx tailwindcss init -p_**
  - Esto  es para los estilos y clases de **TAILWDINCSS**
    - **_npm i @tailwindcss/forms_**
    - Es necesario agregar configuracíón en el archivo:
      - **tailwindcss.config.js**
      - El apartado de: _plugins_:
        - ```
          /** @type {import('tailwindcss').Config} */
          export default {
            content: [
              "./index.html",
              "./src/**/*.{js,ts,jsx,tsx}"
            ],
            theme: {
              extend: {},
            },
            plugins: [
              require('@tailwindcss/forms')
            ],
          }
        ```
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
- TOKENS
  - **_npm i @chakra-ui/pin-input_**
  - Es para poner los recuadros e ingresar los digítos del PIN

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

### AUTENTICACIÓN

- Hoy en día no hay solo sitio web que sea utilizado por miles de usuarios que no tenga autenticación y registro de usuarios.
- Sitios de bancos, tiendas virtuales, aplicaciones de celular, todos tiene algún sistema de autenticación integrado.
- La autenticación nos permitirá identificar a nuestros usuarios y darles ciertos accesos a su información.

  ## PRINCIPIOS
    - Un usuario se puede autenticar con algo que él recuerda (Email y Password).
    - Se puede autenticar con un dispositivo físico (Mensaje SMS o alerta).
    - Se puede autenticar con algo físico (Huella Digital, Voz o Cara).

  ### ALGORITMO PARA CREAR CUENTA
    - Los usuarios deberán ser únicos, usualmente para crear una cuenta se pide el e-mail del usuario.
    - Los _password_ siempre deben estar **hasheados**.
    - Una buena forma de evitar llenarte de usuarios es enviar un enlace de verificación al e-mail y entonces el usuario deberá realizar alguna acción (también posible con tarjeta de crédito o número celular).
    - Una vez que el usuario crea su cuenta y la confirma, puede usar la app.

  ### ALGORITMO PARA INICIAR SESIÓN
    - La primer comprobación que debemos realizar es saber si el usuario existe o no.
    - La segunda es revisar si su cuenta ya ha sido confirmada.
    - La última es revisar si el _password_ es correcto, en caso de que si lo sea, el usuario es autenticado.

  ### ALGORITMO PARA REESTABLECER PASSWORD
    - La primer comprobación que debemos realizar es saber si el usuario existe o no.
    - Si el usuario existe se el envía un _Token_ que expira en 15 minutos.
    - El _Token_ es enviado vía e-mail y el usuario deberá visitar un enlace e ingresar ese _token_; si el _token_ es válido le permitimos reestablecer su _password_.

## JSON WEB TOKEN

  - **JWT** es un estándar abierto que define un formato compacto y seguro para transmitir información entre dos partes de manera segura como un objeto _JSON_.
  - ### VENTAJAS

    - **SEGURIDAD**
      - Utiliza algoritmos de firma digital para asegurar que los datos no han sido alterados durante la transmisión.
      - Esto garantiza la integridad de la información y permite a las partes confiar en su válidez.
    - **AUTENTICACIÓN Y AUTORIZACIÓN**
      - Se utiliza comúnmente para autenticar usuarios y permitirles acceder a recursos protegidos.
      - Una vez que un usuario ha sido autenticado correctamente, se le proporciona un _JWT_ que contiene información sobre sus permisos y roles.
      - El servidor puede verificar la válidez del _token_ y autorizar o reestringir el acceso.
    - **TRANSFERENCIA EFICIENTE DE DATOS**
      - _JWT_ es un formato compacto que se puede transmitir fácilmente a través de diferentes medios, como encabezados: _HTTP, URL_ o incluso en el cuerpo de una solicitud _HTTP_.
      - Esto lo hace adecuado para su uso en aplicaciones _Web_ y servicios de _API_.
    - **STATELESS (sin estado)**
      - Los _JWT_ son "sin estado", lo que significa que la información necesaria para autenticar y autorizar a un usuario se encuentre directamente en el _token_.
      - Esto elimina la necesidad de almacenar información de sesión en el servidor, lo que facilita la escalabilidad de las aplicaciones distribuidas.
      - Proporcionan un mecanismo seguro y eficiente para transmitir información entre dos partes, autenticar usuarios y autorizar el acceso a recursos protegidos en aplicaciones _web_ y servicios _API_.
      - Su naturaleza compacta, seguridad y facilidad de uso lo convierten en una opción popular para la implementación de sistemas de autenticación y autorización.

### COOKIES & LOCALSTORAGE

- # LOCALSTORAGE
  - ## VENTAJAS
    - **Facilidad de uso**: _LocalStorage_ es fácil de utilizar y no requiere configuración adicional para almacenar y recuperar datos.
    - **Persistencia**: Los datos almacenados en _LocalStorage_ permanecen en el navegador incluso después de cerrarlo y reiniciar la computadora.
    - **Rendimiento**: Puede ser más rápido acceder a los datos en _LocalStorage_ que en las _Cookies_ debido a que no se envían con cada solicitud _HTTP_.
  - ## DESVENTAJAS
    - **Vulnerabilidad a ataques _XSS_**: Los datos en _LocalStorage_ son vulnerables a ataques de _Scripts_ entre sitios (_XSS_) sino se implementan adecuadas medidas de seguridad.
    - **Capacidad limitada**: El almacenamiento en _LocalStorage_ está limitado a un tamaño máximo de 5-10 _MB_ por dominio.
    - **No compatible con solicitudes cruzads (_CORS_)**: Los datos almacenados en _LocalStorage_ no se envían automáticamente con las solicitudes _CORS_ a otros dominios.

- # COOKIES
  - ## VENTAJAS
    - **Seguridad**: Las _Cookies_ pueden configurarse con la sbanderas: _HttpOnly_ y _Secure_ para aumentar la seguridad y proteger contra ataques _XSS_ y _CSRF_.
    - **Soporte para _CORS_**: Las _Cookies_ se envían automáticamente con las solicitudes _CORS_, lo que facilita el manejo de autenticación en aplicaciones distribuidas.
    - **Control de expiración**: Puede configurar una fecha de expiración para las _Cookies_, y estas se eliminan automáticamente.
  - ## DESVENTAJAS
    - **Sobrecarga de red**: Las _Cookies_ se envían con cada solicitud _HTTP_, lo que puede aumentar el tráfico de red si los _tokens_ son grandes.
    - **Capacidad limitada**: Al igual que _LocalStorage_, las _Cookies_ también tienen un tamaño máximo de almacenamiento por dominio (generalmente 4KB por _Cookie_).
    - **Menos persistencia**: Las _Cookies_ pueden ser eliminadas por el usuario o expirar automáticamente después de un período de tiempo, lo que puede requerir una renovación periódica de los _tokens_.


