# Escáner Mons

Web-app gratuita para escanear códigos de barra con la cámara del teléfono y guardarlos en la planilla de inventario de Mons.
Reemplaza a las apps de escaneo de pago.

- Corre en el navegador (probado para iPhone/Safari y Android/Chrome), sin instalar nada. En iPhone: Compartir → "Agregar a pantalla de inicio".
- Lector: [zxing-wasm](https://github.com/Sec-ant/zxing-wasm) (ZXing en WebAssembly, Apache 2.0), incluido en `lib/zxing/` para que funcione sin descargar nada.
- Cada escaneo se envía a un receptor (Apps Script) con una clave. La clave y la dirección **no están en este repositorio**: llegan una sola vez en un enlace de configuración `#u=...&t=...` y se guardan en el teléfono.
- Si no hay internet, los códigos quedan en cola y se envían solos.
- Muestra el lugar actual (lo elige la app de inventario) y avisa si el conteo está cerrado.

Sin datos de clientas ni claves en este repositorio.

## Deuda técnica conocida
1. **Sin pruebas en el teléfono real:** el decodificador se prueba con imágenes generadas; la calidad real depende de luz, foco y de cómo imprime Mons sus etiquetas.
2. **Lectura en el hilo principal:** ZXing corre en la página; si un teléfono es lento, se nota. Pasarlo a un Web Worker.
3. **Foco y zoom:** iPhone/Safari no deja controlar el enfoque; si el código está muy cerca, se ve borroso.
4. **Sin cola persistente robusta:** la cola de envíos vive en `localStorage`; si el navegador la borra, se pierden los pendientes.
5. **Clave en el teléfono:** la clave del receptor se guarda en `localStorage` y en el QR de configuración. Rotarla si se pierde el teléfono.
6. **Lector solo de códigos de barras lineales** (decisión del 19-nov): los QR se ignoran.
7. **Librería incluida (zxing-wasm 3.1.7):** actualizar a mano.
