import React from 'react';
import { useState, useEffect } from 'react';
import {
    nameValidator,
    emailValidator,
    phoneValidator
} from '../validation.js';
import '../css/rangeSlider.css';
import { withRouter } from 'react-router-dom';
import '../css/order.css';
import Calender from './Calender';
import '../css/thanks.css';
import PayPal from './PayPal';
import { TiArrowForward } from 'react-icons/ti';
import EscapeRooms from './EscapeRooms.js';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoPeopleSharp } from 'react-icons/io5';
import { RiPaypalFill } from 'react-icons/ri';
import { GiBalloons } from 'react-icons/gi';


export default withRouter(
    function Order({ type, history }) {
        const [error, setError] = useState({
            name: "",
            email: "",
            telephone: ""
        });

        const [value, onChange] = useState(2);

        const [state, setState] = useState({
            name: "",
            email: "",
            telephone: "",
            date: "",
            party: "",
            num: 2
        });

        const [validAll, setValidAll] = useState(false)

        const [btnAble, setBtnAble] = useState(true);

        const isPrivate = (type === "private");
        const isYear = (type === "year");
        const isWorld = (type === "world");

        function onInputChange(field, event) {
            setState({ ...state, [field]: event.target.value });
        }

        function onDateChange(field, event) {
            setState({ ...state, [field]: event });
        }

        function isNameValid() {
            if (!(nameValidator(state.name))) {
                setError({ ...error, name: "שם לא חוקי!" });
            }
            else {
                setError({ ...error, name: "" });
            }
        }

        function isPhoneValid() {
            if (!(phoneValidator(state.telephone))) {
                setError({ ...error, telephone: "מספר הטלפון לא חוקי!" });
            }
            else {
                setError({ ...error, telephone: "" });
            }
        }

        function isEmailValid() {
            if (!(emailValidator(state.email))) {
                setError({ ...error, email: "כתובת מייל לא חוקית!" });
            }
            else {
                setError({ ...error, email: "" });
            }
        }

        useEffect(() => {
            if (state.email !== "" && state.name !== "" && state.telephone !== "" && (state.date !== "" || isPrivate)) {
                if (error.name === "" && error.telephone === "" && error.email === "") {
                    if (nameValidator(state.name) && emailValidator(state.email) && phoneValidator(state.telephone)) {
                        setBtnAble(false);
                    } else {
                        setBtnAble(true);
                    }
                } else {
                    setBtnAble(true);
                }
            }
            else {
                setBtnAble(true);
            }
        })

        function onRangeChange(radius) {
            onChange(radius);
            setState({ ...state, "num": radius });
        }

        const addOrder = async (data) => {
            await fetch("http://localhost:5000/private-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        };

        function onPrivateOrder() {
            addOrder({
                name: state.name,
                email: state.email,
                telephone: state.telephone,
                party: state.party
            });
            history.push('/thanks-private');
        }

        function goToPay() {
            setValidAll(true);
            document.getElementById("name").disabled = true;
            document.getElementById("phone").disabled = true;
            document.getElementById("email").disabled = true;
        }


        return (
            <>
                <form className="form" id="form">
                    <div className="form-title">
                        <button className="arrow" onClick={() => history.push("/escape-rooms")}>
                            <TiArrowForward />
                        </button>
                        {isPrivate && <label>לשיחת תאום והזמנת "חדר בריחה אישי"</label>}
                        {isWorld && <label >להזמנת חדר בריחה בנושא "בריאת העולם"</label>}
                        {isYear && <label>להזמנת חדר בריחה בנושא "מעגל השנה"</label>}
                        <br />
                        <label>מלאו את הפרטים:</label>
                        <br />
                        {isPrivate && <p className="no-pay">שימו לב בהזמנת חדר בריחה בהתאמה אישית דרך האתר לא תחויבו בתשלום. אנו ניצור אתכם קשר לצורך ההתאמה</p>}
                    </div>
                    <div className="field">
                        <IoPersonSharp className="input-icons" />
                        <input
                            id="name"
                            type="text"
                            className="input"
                            placeholder="שם"
                            onChange={(event) => onInputChange("name", event)}
                            onBlur={isNameValid}>
                        </input>
                        <div className="error">{error.name}</div>
                    </div>

                    <div className="field">
                        <FaPhone className="input-icons" />
                        <input
                            id="phone"
                            type="tel"
                            className="input"
                            placeholder="טלפון"
                            onChange={(event) => onInputChange("telephone", event)}
                            onBlur={isPhoneValid}>
                        </input>
                        <div className="error">{error.telephone}</div>
                    </div>

                    <div className="field">
                        <SiGmail className="input-icons" />
                        <input
                            id="email"
                            type="email"
                            className="input"
                            placeholder="כתובת מייל"
                            onChange={(event) => onInputChange("email", event)}
                            onBlur={isEmailValid}>
                        </input>
                        <div className="error">{error.email}</div>
                    </div>

                    {!isPrivate && <div className="calender-date field ">
                        <FaCalendarAlt className="input-icons date-icon" />
                        {isYear && <Calender
                            id="clender"
                            type="year" onChange={onDateChange}
                            disabled={validAll} />}
                        {isWorld && <Calender
                            id="clender"
                            type="world" onChange={onDateChange}
                            disabled={validAll} />}
                    </div>}

                    {!isPrivate && <div className="range">
                        <IoPeopleSharp className="input-icons" />
                        <label className="name">מספר המשתתפים:</label>
                        <label className="bub">
                            {value}
                        </label>
                        <input
                            id="num"
                            type="range"
                            min="2"
                            max="15"
                            disabled={validAll}
                            value={value}
                            onChange={({ target: { value: radius } }) => {
                                onRangeChange(radius);
                            }}
                        ></input>
                    </div>}

                    {isPrivate && <div className="field">
                        <GiBalloons className="input-icons party-icon" />
                        <textarea
                            id="party"
                            onChange={(event) => onInputChange("party", event)}
                            className="input text-area" placeholder="מה חוגגים?"></textarea>
                    </div>}

                    {btnAble && <div className="fill-all">* יש למלא את כל השדות!</div>}

                    {!validAll && !isPrivate && <button type="button" className="submit" disabled={btnAble} onClick={goToPay}>מעבר לתשלום <RiPaypalFill /></button>}

                    {validAll && <div className="paypal">
                        {!isPrivate && <PayPal history={history} details={state} total={isYear ? 150 : 200} />}
                    </div>}

                    {isPrivate && <button type="submit" id="private-btn" disabled={btnAble} onClick={onPrivateOrder} className="submit" >יצירת קשר</button>}

                </form>

                <EscapeRooms />
            </>
        )
    }
)