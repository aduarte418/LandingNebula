# LandingNebula
Repo para la actividad de Interfaces de crear una Landing Page para Nébula.

El  proyecto contiene los diferentes elementos de la página web, una Landing Page diseñada específicamente para una artista digital llamada Nébula.

Además de los imprescindibles archivos HTML y CSS, la carpeta assets contiene todos los recursos multimedia empleados en la web, organizados por categoría en función de si son imágenes, audio o vídeo. En sus respectivas carpetas se podrá acceder a ellos.

A continuación, se presenta una tabla que lista los recursos utilizados en esta landing junto a sus enlaces, así como sus respectivas licencias.

| Recurso | Enlace | Licencia |
|:--------:|:--------:|:--------:|
| Imagen Hero | https://pixabay.com/es/illustrations/espacio-galaxia-universo-nebulosa-10443904/ | CC0 BY-NC-ND 4.0 |
| Imagen Proyecto 1 | https://pixabay.com/es/photos/fondo-de-navidad-nebula-de-ori%C3%B3n-11107/ | CC0 BY-NC-ND 4.0 |
| Imagen Proyecto 2 | https://pixabay.com/es/photos/nebulosa-roseta-nebulosa-universo-7616742/ | CC0 BY-NC-ND 4.0 |
| Imagen Proyecto 3 | https://pixabay.com/es/illustrations/part%C3%ADcula-polvo-flotador-navidad-10066583/ | CC0 BY-NC-ND 4.0 |
| Imagen Proyecto 4 | https://pixabay.com/es/illustrations/universo-persona-silueta-estrellas-1044107/ | CC0 BY-NC-ND 4.0 |
| Logo de Nébula | https://pixabay.com/es/vectors/planeta-espacio-universo-naturaleza-9598022/ | CC0 BY-NC-ND 4.0 |
| Video | Ejemplo | CC0 BY-NC-ND 4.0 |
| Imagen Animación 1 | https://pixabay.com/es/illustrations/ai-generado-lineas-digitales-digital-9110642/ | CC0 BY-NC-ND 4.0 |
| Imagen Animación 2 | https://pixabay.com/es/illustrations/retro-fondo-el-env%C3%ADo-paisaje-4237850/ | CC0 BY-NC-ND 4.0 |
| Imagen Animación 3 | https://pixabay.com/es/illustrations/ciudad-atardecer-noche-paisaje-5848267/ | CC0 BY-NC-ND 4.0 |
| Imagen Animación 4 | https://pixabay.com/es/illustrations/futurista-t%C3%BAnel-ciencia-ficci%C3%B3n-4544119/ | CC0 BY-NC-ND 4.0 |
| Vídeo | https://www.pexels.com/es-es/video/cielo-noche-espacio-estrellas-12354568/ | CC0 BY-NC-ND 4.0 |
| Imagen Miniatura Vídeo | assets/img/video-1.webp | CC0 BY-NC-ND 4.0 |
| Audio Ambiente | https://pixabay.com/es/sound-effects/musical-interstellar-science-fiction-sounds-8239/ | CC0 BY-NC-ND 4.0 |


Por último, se incluye en el presente ReadMe la documentación y justificación de los procedimientos seguidos y las decisiones tomadas en cuanto a la gestión de los recursos de la Landing Page.

En primer lugar, la imagen de la Zona Hero fue redimensionada para que su ancho exacto fuese de 1920px mantiendo el aspect ratio, especificando que siendo un archivo .jpg se convirtió a formato webp para reducir su peso sin perder calidad (ocupa tan sólo 93 kB).

Se siguió el mismo procedimiento para las imágenes que constituyen los trabajos de la artista y que están dispuestos en el grid. Se convirtieron a formato webp para reducir su peso manteniendo calidad, redimensionándose y asegurándose en el propio HTML que las miniaturas tenían un tamaño de 400px x 250px.

Por su parte, el icono seleccionado como logo de Nébula y su sitio web se importó en formato vectorial (svg), siendo una elección ideal para su propósito al no limitar su escalabilidad y permitirle mantener su resolución y calidad al cambiar de tamaño, pudiéndose además insertar en línea (inline) en el propio HTML.

Para la animación, se ha utilizado un webp animado a partir de 4 imágenes acordes a la temática de la landing, para así ofrecer mejor relación de compresión y rendimiento, así como una mayor compatibilidad.

Para el vídeo, se ha utilizado un clip de unos 10 segundos en formato mp4 con Códec de compresión *

Para el audio ambiente, se ha seleccionado un clip de audio recortado que dure 15 segundos y que se ha exportado a formato mp3, el más universal y reconocido por todos los navegadores, con una tasa de bits de 256 kbps que ofrece calidad suficiente y en estéreo.

