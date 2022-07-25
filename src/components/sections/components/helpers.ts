export const getSpanishDate = (date: Date) => {
  // Creamos array con los meses del año
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  // Creamos array con los días de la semana
  const dias_semana = [
    "Domingo",
    "Lunes",
    "martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
 
  
  // Construimos el formato de salida
  return (
    dias_semana[date.getUTCDay()] +
    ", " +
    date.getUTCDate() +
    " de " +
    meses[date.getUTCMonth()] +
    " de " +
    date.getUTCFullYear()
  );
};
