import "./index.css";
import StateCounter from "./StateCounter";
import { useState } from "react";

export default function App() {

    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(3);
    const [year, setYear] = useState(2020);

    const date = [day, " / ", month, " / ", year];

    // ADD DAY
    const addDay = (value) => {
        setDay(day + value);
        if (day == 30) {
            setMonth(month + 1);
            setDay(1)
        }
        if (day == 30 && month == 12) {
            setYear(year + 1);
            setMonth(1);
        }
    };

    // REDUCE DAY
    const reduceDay = (value) => {
        setDay(day - value);
        if (day == 1) {
            setMonth(month - 1);
            setDay(30);
        }
        if (day == 1 && month == 1) {
            setYear(year - 1);
            setMonth(12)
        }
    };

    // ADD MONTH
    const addMonth = (value) => {
        setMonth(month + value);
        if (month == 12) {
            setYear(year + 1);
            setMonth(1);
        }
        if (day == 30 && month == 12) {
            setYear(year + 1);
            setDay(1);
            setMonth(1);
        }
    };

    // REDUCE MONTH
    const reduceMonth = (value) => {
        setMonth(month - value);
        if (month == 1) {
            setYear(year - 1);
            setMonth(12);
        }
    };

    // ADD YEAR
    const addYear = (value) => {
        setYear(year + value);
    };

    // REDUCE YEAR
    const reduceYear = (value) => {
        setYear(year - value);
    };

    return (
        <StateCounter date={date} day={day} month={month} year={year} aday={addDay} rday={reduceDay} aMon={addMonth} rMon={reduceMonth} aYear={addYear} rYear={reduceYear} />
    );
}
