import React, { useEffect, useState } from 'react';
import '../css/showOrders.css';


function ShowOrders() {

    const [all, setAll] = useState(true);
    const [world, setWorld] = useState(false);
    const [year, setYear] = useState(false);
    const [privates, setPrivates] = useState(false);

    const [ordersList, setOrdersList] = useState([]);
    const [privateOrdersList, setPrivateOrdersList] = useState([]);


    const getOrderList = async (isPrivate, res) => {
        let orderList;
        await fetch(`http://localhost:5000/${isPrivate ? "private-" : ""}order`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token")),
            },
            body: JSON.stringify(res),
        }).then(res => res.json())
            .then((res) => {
                orderList = res
            });
        return orderList;
    }

    async function updateLists() {
        let privateList = await getOrderList(true);
        let list = await getOrderList(false);
        setPrivateOrdersList(privateList)
        setOrdersList(list);
    }


    useEffect(() => {
        updateLists();
    })


    return (
        <>
            <div className="filter-buttons">
                <li className={all ? "filter-button active" : "filter-button"}
                    onClick={() => {
                        setAll(true);
                        setWorld(false);
                        setYear(false);
                        setPrivates(false);
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}>
                    כל ההזמנות
                </li>
                <li className={world ? "filter-button active" : "filter-button"}
                    onClick={() => {
                        setAll(false);
                        setWorld(true);
                        setYear(false);
                        setPrivates(false);
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}>
                    בריאת העולם
                </li>
                <li className={year ? "filter-button active" : "filter-button"}
                    onClick={() => {
                        setAll(false);
                        setWorld(false);
                        setYear(true);
                        setPrivates(false);
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}>
                    מעגל השנה
                </li>
                <li className={privates ? "filter-button active" : "filter-button"}
                    onClick={() => {
                        setAll(false);
                        setWorld(false);
                        setYear(false);
                        setPrivates(true);
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}>
                    התאמה אישית
                </li>
            </div>
            <div className="order-list">
                {world &&
                    <div className="orders">
                        <label className="orders-title">הזמנות בריאת העולם:</label>

                        {ordersList.filter(order => order["type"] === "בריאת העולם").map((item, index) =>
                            <div className="order">
                                <label className="order-num">הזמנה #{index + 1}</label>
                                <ul className="order-details">
                                    <li>שם: {item.name}</li>
                                    <li>טלפון: {item.telephone}</li>
                                    <li>אימייל: {item.email}</li>
                                    <li>תאריך: {item.date}</li>
                                    <li>סוג: {item.type}</li>
                                </ul>
                            </div>)}
                    </div>
                }

                {year &&
                    <div className="orders">
                        <label className="orders-title">הזמנות מעגל השנה:</label>
                        {ordersList.filter(order => order["type"] === "מעגל השנה").map((item, index) =>
                            <div className="order">
                                <label className="order-num">הזמנה #{index + 1}</label>
                                <ul className="order-details">
                                    <li>שם: {item.name}</li>
                                    <li>טלפון: {item.telephone}</li>
                                    <li>אימייל: {item.email}</li>
                                    <li>תאריך: {item.date}</li>
                                    <li>סוג: {item.type}</li>
                                </ul>
                            </div>)}
                    </div>}

                {privates &&
                    <div className="orders">
                        <label className="orders-title">הזמנות בהתאמה אישית:</label>
                        {privateOrdersList.map((item, index) =>
                            <div className="order">
                                <label className="order-num">הזמנה #{index + 1}</label>
                                <ul className="order-details">
                                    <li>שם: {item.name}</li>
                                    <li>טלפון: {item.telephone}</li>
                                    <li>אימייל: {item.email}</li>
                                    <li>חגיגה: {item.party}</li>
                                    <li>סוג: התאמה אישית</li>
                                </ul>
                            </div>)}
                    </div>}

                {all &&
                    <div className="orders">
                        <label className="orders-title">כל ההזמנות:</label>

                        {ordersList.map((item, index) =>
                            <div className="order">
                                <label className="order-num">הזמנה #{index + 1}</label>
                                <ul className="order-details">
                                    <li>שם: {item.name}</li>
                                    <li>טלפון: {item.telephone}</li>
                                    <li>אימייל: {item.email}</li>
                                    <li>תאריך: {item.date}</li>
                                    <li>סוג: {item.type}</li>
                                </ul>
                            </div>)
                        }
                        {privateOrdersList.map((item, index) =>
                            <div className="order">
                                <label className="order-num">הזמנה #{index + ordersList.length + 1}</label>
                                <ul className="order-details">
                                    <li>שם: {item.name}</li>
                                    <li>טלפון: {item.telephone}</li>
                                    <li>אימייל: {item.email}</li>
                                    <li>חגיגה: {item.party}</li>
                                    <li>סוג: התאמה אישית</li>
                                </ul>
                            </div>)}
                    </div>}
            </div>
        </>
    )
}

export default ShowOrders;