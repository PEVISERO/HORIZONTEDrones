# InspectDron 2.0

Sitio estático profesional para InspectDron S.A.S., orientado a empresas instaladoras de sistemas fotovoltaicos, ingenieros y propietarios de cubiertas industriales.

## Enfoque

InspectDron no se presenta como una empresa de drones. El sitio reposiciona la marca como una empresa de información técnica para proyectos fotovoltaicos. El dron aparece como herramienta de captura, no como el producto principal.

## Estructura

- `index.html`: contenido semántico, SEO, OpenGraph y datos estructurados.
- `style.css`: estilos base personalizados, sin Bootstrap, Tailwind ni plantillas.
- `responsive.css`: reglas mobile, tablet, desktop y ultrawide.
- `app.js`: JavaScript vanilla para menú móvil, header dinámico, formulario WhatsApp e Intersection Observer.
- `robots.txt` y `sitemap.xml`: indexación para GitHub Pages.
- `assets/img`: imágenes propias optimizadas.
- `favicon.ico`, `favicon.png`, `apple-touch-icon.png`: identidad básica del sitio.

No se introducen frameworks ni dependencias externas. La tipografía usa Inter cuando está disponible en el sistema y cae a fuentes sans-serif nativas.

## Secciones del home

1. Hero
2. Problema que resolvemos
3. Entregables
4. Método InspectDron
5. Casos reales
6. Ventajas
7. Preguntas frecuentes
8. Contacto
9. Footer

## Publicación en GitHub Pages

Subir estos archivos a la raíz del repositorio configurado para GitHub Pages. La URL esperada por los metadatos es:

`https://pevisero.github.io/InspectDron/`

Si la URL final cambia, actualizar:

- `link rel="canonical"` en `index.html`
- Metadatos `og:url` y rutas OpenGraph
- `robots.txt`
- `sitemap.xml`

## Notas de rendimiento

Las imágenes originales fueron reutilizadas como fotografías propias y exportadas a WebP/JPEG comprimidos. Las imágenes fuera del primer viewport usan `loading="lazy"` y el hero está precargado.
