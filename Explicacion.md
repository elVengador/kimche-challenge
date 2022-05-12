/* spell-checker: disable */
# Explicacion

## Mejoras en la UX/UI

- Diseño del challenge definiendo la paleta de colores y los estilos del texto
- Diseño de los componentes reusables
- Diseño de la pagina mas simple y bonita

[link figma](https://www.figma.com/file/PJH2dbcKebBW6qOCvwECD5/Kimche-Challenge?node-id=0%3A1)

## Configuracion del projecto
- Cambio de CRA a Vite, para mejorar la velocidad a  la hora de compilar
- Uso de TS para tipado y mejorar el autocompletado
- Se configuro commitlint con husky
- Se configuro el los labes de github similares a los types de comventional-commits
- Se cambio apollo-boost y @apollo/react-hooks a @apollo/client, por que apollo/client es una libreria mas moderna, tambien trae el provider y el client juntas
- Se configuro Codegen para generar los schemas automaticamente, tengo un [tutorial](https://blog.jimynicanor.com/posts/angular-graphql) sobre eso pero con angular, es lo mismo para react
- Se configuro eslint con las reglas de default, no se configuro prettier ya que yo escribire el codigo limpio
- Se agrego fontawesome para los iconos

## Arquitecture
### Para proyectos pequeños
Se crea una carpeta components, hooks, pages
### Para proyectos grandes se usa arquitectura limpia
recordando arquitectura limpia pide como minimo 3 capas (dominio, aplicacion, infraestructure) yo lo configuro creando 4 carpetas:
- Domain: aqui va la logica del negocio
- Aplication: aqui van  las funciones que definen los casos de uso o requerimientos
- Infraestructure: aqui van los servicios externos como API, frameworks, otras librerias...
- Presentation: pertenece a Infraestructure ya que definimos todo sobre nuestro framework para el frontend, aqui se organiza de la siguiente forma:
  - Atomic: hacemos uso de atomic design y storybook y defninimos nuestros componentes reusables
  - Pages: hacemos uso de nuestros componentes armamos las paginas
  - Styles: hacemos uso de Itcss y definimos los estilos

Ahora si queremos cambiar de framework solo se toca la capa de presentacion, la idea es que sea mantenible y escalable, el arbol de nuestros archivos deve crecer en anchura no en profundidad.


    