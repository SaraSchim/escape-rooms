import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/login.css';
const axios = require('axios')


function Login(props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    function validateForm() {
        if (name === "s" && password === "6") {
            getToken();
            props.user(true);
            props.history.push('/');
            setTimeout(() => {
                console.log("push")
                props.history.push('/');
                window.location.reload();
                alert("דרושה כניסה מחדש כמנהל")
              }, 1000*60*60);

        }
        else {
            alert("...כנראה שאתה לא המנהל");
        }
    }

    function getToken() {
        const body = {
            name: name,
            password: password
        }
        axios.post('http://localhost:5000/login', body)
            .then(function (response) {
                localStorage.setItem("token", JSON.stringify(response.data.token))
            })
    };


    return (
        <>
            <form className="login-form">
                <input
                    className="login-input"
                    placeholder="שם משתמש"
                    onChange={(e) => { setName(e.target.value) }}>
                </input>
                <input
                    className="login-input"
                    type="password"
                    placeholder="סיסמה"
                    onChange={(e) => { setPassword(e.target.value) }}>
                </input>
                <div>
                    <button onClick={validateForm} className="login-btn">התחבר</button>
                </div>
                {error && <div>פרטי הזדהות שגויים! כנראה שאתה לא המנהל...</div>}
            </form>
        </>
    )
}


export default withRouter(Login);