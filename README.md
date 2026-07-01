# C-digos-para-Runa-salvadores

# traducir_fecha_en_available_slots

## Descripción

Este script procesa el contenido del campo `{{disponibilidad_calendario}}`.

### Funcionamiento

- Si el contenido comienza con `Available slots:`, convierte cada fecha al formato legible en español (Argentina).

**Ejemplo de entrada:**

```text
Available slots: 2026-07-02 09:30:00 AM, 2026-07-02 09:40:00 AM
```

**Resultado:**

```text
jueves 2 de julio de 2026 a las 09:30, jueves 2 de julio de 2026 a las 09:40
```

- Si el contenido **no** comienza con `Available slots:`, devuelve el texto exactamente como fue recibido, sin realizar modificaciones.

## Campo de entrada

- `{{disponibilidad_calendario}}`

## Salida

Un texto listo para utilizar en las respuestas del asistente.
