# Escáner Mons

Web-app gratuita para escanear códigos de barra con la cámara del teléfono y guardarlos en la planilla de inventario de Mons.
Reemplaza a las apps de escaneo de pago.

- Corre en el navegador (probado para iPhone/Safari y Android/Chrome), sin instalar nada. En iPhone: Compartir → "Agregar a pantalla de inicio".
- Lector: [html5-qrcode](https://github.com/mebjas/html5-qrcode) (Apache 2.0), incluido en `lib/` para que funcione sin descargar nada.
- Cada escaneo se envía a un receptor (Apps Script) con una clave. La clave y la dirección **no están en este repositorio**: llegan una sola vez en un enlace de configuración `#u=...&t=...` y se guardan en el teléfono.
- Si no hay internet, los códigos quedan en cola y se envían solos.
- Muestra el lugar actual (lo elige la app de inventario) y avisa si el conteo está cerrado.

Sin datos de clientas ni claves en este repositorio.
