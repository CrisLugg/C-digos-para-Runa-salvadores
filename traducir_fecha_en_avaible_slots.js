let entrada = `{{disponibilidad_calendario}}`;

function diaSemana(year, month, day) {
  // Algoritmo de Zeller
  if (month < 3) {
    month += 12;
    year--;
  }

  let k = year % 100;
  let j = Math.floor(year / 100);

  let h = (
    day +
    Math.floor((13 * (month + 1)) / 5) +
    k +
    Math.floor(k / 4) +
    Math.floor(j / 4) +
    (5 * j)
  ) % 7;

  let dias = [
    "sábado",
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes"
  ];

  return dias[h];
}

function formatearDisponibilidad(texto) {
  if (!texto || typeof texto !== "string") {
    return "";
  }

  texto = texto.trim();

  // Si no empieza con "Available slots", devolver el texto original.
  if (texto.indexOf("Available slots") !== 0) {
    return texto;
  }

  let meses = [
    "",
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ];

  let regex = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2}) (AM|PM)/g;

  let resultado = [];
  let match;

  while ((match = regex.exec(texto)) !== null) {
    let year = Number(match[1]);
    let month = Number(match[2]);
    let day = Number(match[3]);
    let hour = Number(match[4]);
    let minute = match[5];
    let ampm = match[7];

    if (ampm === "PM" && hour !== 12) hour += 12;
    if (ampm === "AM" && hour === 12) hour = 0;

    let horaFinal =
      String(hour).padStart(2, "0") +
      ":" +
      minute;

    let linea =
      diaSemana(year, month, day) +
      " " +
      day +
      " de " +
      meses[month] +
      " de " +
      year +
      " a las " +
      horaFinal;

    resultado.push(linea);
  }

  // Si por algún motivo no encontró fechas, devolver el texto original.
  if (resultado.length === 0) {
    return texto;
  }

  return resultado.join(", ");
}

return formatearDisponibilidad(entrada);