# Conversor de Divisas

Este proyecto es una aplicación web interactiva para convertir tasas de cambio utilizando una API gratuita.

## Descripción

El Conversor de Divisas permite al usuario ingresar un monto en una moneda y convertirlo a otra utilizando las tasas de cambio actuales obtenidas de la API de [ExchangeRate-API](https://www.exchangerate-api.com/). La interfaz es intuitiva, con diseño limpio y visualmente atractivo.

## Funcionalidades

1. **Conversión entre monedas:**
   - Soporta una amplia variedad de monedas internacionales.
2. **Validación de formularios:**
   - Garantiza que el usuario ingrese un monto válido y seleccione las monedas correctamente.
3. **Intercambio rápido de monedas:**
   - Incluye un botón que permite intercambiar la moneda de origen con la de destino fácilmente.
4. **Diseño responsive:**
   - Adaptado para su uso en dispositivos móviles y pantallas de escritorio.
5. **Resultados interactivos:**
   - Muestra los resultados de manera clara y precisa.
6. **Actualización de tasas en tiempo real:**
   - Las tasas de cambio son obtenidas directamente desde la API.

## Archivos del Proyecto

- **index.html:** Contiene la estructura principal del sitio web.
- **styles.css:** Define los estilos visuales para la aplicación.
- **script.js:** Gestiona la lógica, la interacción con la API y la manipulación del DOM.
- **env (opcional):** Puede usarse para guardar la clave API en sistemas más avanzados.
- **README.md:** Instrucciones y detalles del proyecto.

## Instrucciones de Uso

1. Abre el archivo `index.html` en tu navegador.
2. Selecciona las monedas de origen y destino en los menús desplegables.
3. Ingresa el monto que deseas convertir.
4. Haz clic en el botón "Convertir" para ver el resultado.
5. Si deseas intercambiar rápidamente las monedas seleccionadas, haz clic en el botón con el ícono de flechas.

## Configuración de la Clave API

Para usar la API, asegúrate de que el archivo `script.js` tenga configurada la clave API proporcionada. La clave está incrustada directamente en este caso:

```javascript
const API_URL = "https://v6.exchangerate-api.com/v6/ba1b273119db4a8f606fe5a4/latest/USD";
