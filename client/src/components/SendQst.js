import React, { useState, useEffect } from "react";
import '../css/sendQst.css';
import { IoIosSend } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { ImPhone } from "react-icons/im";
import { FaQuestion } from "react-icons/fa";
import { withRouter } from 'react-router-dom';
import {
    nameValidator,
    emailValidator,
    phoneValidator
} from '../validation.js';


export default withRouter(
    function SendQst({ history }) {

        const [state, setState] = useState({
            name: "",
            email: "",
            telephone: "",
            message: ""
        });

        const [btnAble, setBtnAble] = useState(true);

        function onInputChange(field, event) {
            setState({ ...state, [field]: event.target.value });
        }

        const sendEmail = async (data) => {
            await fetch("http://localhost:5000/send-question", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        };

        function send() {
            document.getElementById('input-name').value = "";
            document.getElementById('input-email').value = "";
            document.getElementById('input-phone').value = "";
            document.getElementById('input-qst').value = "";
            window.scrollTo({ top: 0, left: 0 });
            sendEmail(state);
        }


        useEffect(() => {
            if (state.email !== "" && state.name !== "" && state.telephone !== "" && state.message !== "") {
                if (emailValidator(state.email) && nameValidator(state.name) && phoneValidator(state.telephone)) {
                    setBtnAble(false);
                } else {
                    setBtnAble(true);
                }
            }
            else {
                setBtnAble(true);
            }
        })

        return (
            <>
                <form className="formQst">
                    <h2 className="title-qst">יש לכם שאלה?</h2>
                    <BsPersonFill size="2em" className="icon-qst" />
                    <input id="input-name" className={nameValidator(state.name) ? "inputQst" : "inputQst invalid-input"} placeholder="* שם" required type="text" onChange={(event) => onInputChange("name", event)}></input>
                    <SiGmail size="2em" className="icon-qst" />
                    <input id="input-email" className={emailValidator(state.email) ? "inputQst" : "inputQst invalid-input"} placeholder="* כתובת מייל" required type="email" onChange={(event) => onInputChange("email", event)}></input>
                    <ImPhone size="2em" className="icon-qst" />
                    <input id="input-phone" className={phoneValidator(state.telephone) ? "inputQst" : "inputQst invalid-input"} placeholder="* טלפון" required type="tel" onChange={(event) => onInputChange("telephone", event)}></input>
                    <FaQuestion size="2em" className="icon-qst" />
                    <textarea id="input-qst" className="inputQst areaQst" placeholder="* השאלה שלכם" required onChange={(event) => onInputChange("message", event)}></textarea>
                    <button className="btnQst" type="button" disabled={btnAble} onClick={send}><IoIosSend size="1.5em" /></button>
                </form>
            </>
        );
    })