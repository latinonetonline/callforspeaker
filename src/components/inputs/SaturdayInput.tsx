import { ChangeEvent, useState } from "react";

interface Month {
  name: string;
  number: number;
}

interface SaturdayInputProps {
  value?: Date | null;
  onChange: (date: Date | null) => void;
  error?: boolean;
  unavailableDates?: Date[];
}

const monthNames: Month[] = [
  { name: "Ene", number: 0 },
  { name: "Feb", number: 1 },
  { name: "Mar", number: 2 },
  { name: "Abr", number: 3 },
  { name: "May", number: 4 },
  { name: "Jun", number: 5 },
  { name: "Jul", number: 6 },
  { name: "Ago", number: 7 },
  { name: "Sep", number: 8 },
  { name: "Oct", number: 9 },
  { name: "Nov", number: 10 },
  { name: "Dic", number: 11 },
];

const getCurrentMonth = (): number => new Date().getUTCMonth();
const getCurrentYear = (): number => new Date().getUTCFullYear();

const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month, 0).getUTCDate();

const SaturdayInput: React.FC<SaturdayInputProps> = ({
  onChange,
  value,
  error,
  unavailableDates = [],
}) => {
  const [date, setDate] = useState(value ?? new Date());

  const getMonths = (): Month[] =>
    monthNames.filter(
      (m) =>
        m.number >= getCurrentMonth() ||
        getCurrentYear() != date.getUTCFullYear()
    );

  const getSaturdays = (month: number, year: number): string[] => {
    let sabados: Date[] = [];

    const daysInMonth = getDaysInMonth(month, year);
    // Obtener los sabados del mes
    for (let dia = 1; dia <= daysInMonth; dia++) {
      const fecha = new Date(`${year}-${month}-${dia}`);

      if (fecha.getUTCDay() == 6) {
        let diaStr = "" + dia;
        if (diaStr.length < 2) diaStr = "0" + diaStr;
        sabados.push(fecha);
      }
    }

    //Filtro los sabados que no esten en UnavailableDates y que sean mayor a hoy
    sabados = sabados.filter(
      (s) =>
        unavailableDates.filter(
          (u) =>
            u.getUTCDate() == s.getUTCDate() &&
            u.getUTCMonth() == s.getUTCMonth()
        ).length == 0 && Date.now() < s.getTime()
    );

    // Transformo los días en 2 caracteres. EJ: un 1 en 01, 2 en 02, 23 en 23
    return sabados.map((s) => {
      let diaStr = "" + s.getUTCDate();
      if (diaStr.length < 2) diaStr = "0" + diaStr;

      return diaStr;
    });
  };

  const handleDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name == "month") {
      date.setUTCMonth(parseInt(e.target.value));
    }

    if (e.target.name == "year") {
      date.setUTCFullYear(parseInt(e.target.value));
    }

    if (["month", "year"].includes(e.target.name)) {
      const saturdays = getSaturdays(
        date.getUTCMonth() + 1,
        date.getUTCFullYear()
      );

      if (saturdays[0]) {
        date.setUTCDate(parseInt(saturdays[0]));
      } else {
        date.setUTCDate(0);
        onChange(null);
        return;
      }
    }

    if (e.target.name == "date") {
      date.setUTCDate(parseInt(e.target.value));
    }
    setDate(new Date(date))
    onChange(new Date(date));
  };

  return (
    <div className="form-holder form-holder-2">
      <fieldset className={"saturday-fieldset " + (error ? "error" : "")}>
        <label className="special-label">Elegí tu sábado:</label>
        <select
          name="year"
          id="year"
          defaultValue={date.getUTCFullYear()}
          onChange={handleDateChange}
        >
          <option value={getCurrentYear()}>{getCurrentYear()}</option>
          {getCurrentMonth() >= 9 && (
            <option value={getCurrentYear() + 1}>{getCurrentYear() + 1}</option>
          )}
        </select>
        <select
          name="month"
          id="month"
          onChange={handleDateChange}
          value={date.getUTCMonth()}
        >
          {getMonths().map((m, i) => {
            return (
              <option key={i} value={m.number}>
                {m.name}
              </option>
            );
          })}
        </select>
        <select
          name="date"
          id="date"
          value={date.getUTCDate()}
          onChange={handleDateChange}
        >
          {getSaturdays(date.getUTCMonth() + 1, date.getUTCFullYear()).map(
            (s, i) => {
              return (
                <option key={i} value={parseInt(s)}>
                  {s}
                </option>
              );
            }
          )}
        </select>
      </fieldset>
    </div>
  );
};

export default SaturdayInput;
