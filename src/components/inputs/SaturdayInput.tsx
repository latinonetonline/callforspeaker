import { useEffect, useState } from "react";
import { useAppContext } from "../../data/AppContext";

interface Month {
  name: string;
  number: number;
}

interface SaturdayInputProps {
  onChange: (date: Date) => void;
}

const monthNames: Month[] = [
  { name: "Ene", number: 1 },
  { name: "Feb", number: 2 },
  { name: "Mar", number: 3 },
  { name: "Abr", number: 4 },
  { name: "May", number: 5 },
  { name: "Jun", number: 6 },
  { name: "Jul", number: 7 },
  { name: "Ago", number: 8 },
  { name: "Sep", number: 9 },
  { name: "Oct", number: 10 },
  { name: "Nov", number: 11 },
  { name: "Dic", number: 12 },
];

const getCurrentMonth = (): number => new Date().getUTCMonth() + 1;
const getCurrentYear = (): number => new Date().getFullYear();

const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month, 0).getUTCDate();

const SaturdayInput: React.FC<SaturdayInputProps> = ({ onChange }) => {
  const { state } = useAppContext();
  const [date, setDate] = useState<number>(0);
  const [month, setMonth] = useState<number>(getCurrentMonth());
  const [year, setYear] = useState<number>(getCurrentYear());
  const [saturdays, setSaturdays] = useState<Date[]>([]);

  useEffect(() => {
    mesOnChange(month);
  }, []);

  useEffect(() => {
    filtrarFechas();
  }, [year, month]);

  useEffect(() => {
    onChange(new Date(`${year}-${month}-${date}`));
  }, [date]);

  const getMonths = (): Month[] =>
    monthNames.filter(
      (m) => m.number >= getCurrentMonth() || getCurrentYear() != year
    );

  const filtrarFechas = () => {
    let dates: Date[] = state.callForSpeakers.unavailableDates ?? [];

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    let sabados: string[] = [];

    for (let dia = 1; dia <= getDaysInMonth(year, month); dia++) {
      const fecha = new Date(`${year}-${month}-${dia}`);

      if (fecha.getUTCDay() == 6) {
        let diaStr = "" + dia;
        if (diaStr.length < 2) diaStr = "0" + diaStr;
        sabados.push(diaStr);
      }
    }

    const saturdaysTemp: Date[] = [];
    for (let index = 0; index < sabados.length; index++) {
      const fecha = new Date(`${year}-${month}-${sabados[index]}`);

      if (
        dates.filter(
          (date) =>
            date.getUTCDate() == parseInt(sabados[index]) &&
            getCurrentMonth() == month
        ).length == 0 &&
        hoy.getTime() < fecha.getTime()
      ) {
        saturdaysTemp.push(fecha);
      }
    }

    setSaturdays(saturdaysTemp);

    if (saturdaysTemp[0]) {
      setDate(saturdaysTemp[0].getUTCDate());
    }
  };

  const mesOnChange = (month: number) => {
    setMonth(month);
    setSaturdays([]);
  };

  const dateOnChange = (day: number) => {
    setDate(day);
    
  };

  return (
    <div className="form-holder form-holder-2">
      <fieldset className="saturday-fieldset">
        <label className="special-label">Elegí tu sábado:</label>
        <select
          name="year"
          id="year"
          defaultValue={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
        >
          <option value={getCurrentYear()}>{getCurrentYear()}</option>
          {getCurrentMonth() >= 9 && (
            <option value={getCurrentYear() + 1}>{getCurrentYear() + 1}</option>
          )}
        </select>
        <select
          name="month"
          id="month"
          onChange={(e) => mesOnChange(parseInt(e.target.value))}
          value={month}
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
          value={date}
          onChange={(e) => dateOnChange(parseInt(e.target.value))}
        >
          {saturdays.map((s, i) => {
            return (
              <option key={i} value={s.getUTCDate()}>
                {s.getUTCDate()}
              </option>
            );
          })}
        </select>
      </fieldset>
    </div>
  );
};

export default SaturdayInput;
