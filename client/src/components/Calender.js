import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/calender.css';
import { format } from 'date-fns';

function Calender({ type , onChange, disabled}) {
    const [startDate, setStartDate] = useState(null);

    const [notAvailYearDates, setNotAvailYearDates] = useState([]);
    const [notAvailWorldDates, setNotAvailWorldDates] = useState([]);


    const isWeekday = date => {
        const day = date.getDay();
        return day !== 6;
    };


    const getDateList = async (type, res) => {
        let dateList;
        await fetch(`http://localhost:5000/` + type + `-date`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(res),
        }).then(res => res.json())
            .then((res) => {
                dateList = res
            });
        return dateList;
    }

    async function updateRespondList(type) {
        let list = await getDateList(type);
        if (type === "world") {
            setNotAvailWorldDates(list.map(item => new Date(item.date)));
        }
        else {
            setNotAvailYearDates(list.map(item => new Date(item.date)))
        }
        
    }


    useEffect(() => {
        updateRespondList(type);
    })

    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={date =>{ setStartDate(date); onChange("date", format(date, "MM-dd-yyyy"))}}
                startDate={new Date()}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                excludeDates={type === "year" ? notAvailYearDates : notAvailWorldDates}
                filterDate={isWeekday}
                className="calender"
                disabled={disabled}
                placeholderText="בחרו תאריך למשחק..."
                withPortal
            />
        </>
    );
};

export default Calender;