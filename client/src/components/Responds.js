import React, { useState, useEffect } from 'react';
import '../css/responds.css';
import ReactStars from "react-rating-stars-component";
import { BsPeopleCircle } from 'react-icons/bs';


function Responds() {
    const [value, setValue] = useState({
        name: "",
        val: "",
        rate: ""
    });

    const [email, setEmail] = useState("");

    const [error, setError] = useState(true);

    const [respondList, setRespondList] = useState([]);

    function addRes() {
        if (!error) {
            addRespond(value);
            window.location.reload();
        }
    }

    const addRespond = async (res) => {
        await fetch("http://localhost:5000/respond", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(res),
        });
    };


    const getRespondList = async (res) => {
        let respondList;
        await fetch("http://localhost:5000/respond", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(res),
        }).then(res => res.json())
            .then((res) => {
                respondList = res
            });
        return respondList;
    }


    function onInputChange(field, event) {
        setValue({ ...value, [field]: event.target.value });
    }

    function ratingChanged(newRating) {
        setValue({ ...value, "rate": newRating });
    }

    async function updateRespondList() {
        let list = await getRespondList();
        setRespondList(list);
    }


    useEffect(() => {
        if (value.val !== "" && value.name !== "" && email !== "" && value.rate !== "" && email !== "") {
            setError(false)
        }
        else {
            setError(true);
        }
        updateRespondList();
    })

    

    return (
        <>
            <button type="button" onClick={() => document.getElementById("form").reset()} className="add-res butn " data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">להוספת תגובה</button>
            <div>
                {respondList.map(item =>
                    <div>
                        <p className="respond">
                            <BsPeopleCircle
                                className="profile"
                                size='2em'
                            />
                            <span className="respond-name respond-det ">{item.name}:</span>
                            <div className="respond-det"> {item.val}</div>
                            <ReactStars
                                value={item.rate}
                                edit={false}
                                size={25}
                                activeColor="#b2008c"
                            />
                        </p>
                    </div>)}
            </div>

            <div className="res modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form id="form">
                                <label className="res-title">נשמח לשמוע ממכם</label>
                                <ReactStars
                                    className="rate"
                                    count={5}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    onChange={ratingChanged}
                                    size={40}
                                    activeColor="#b2008c"
                                />
                                <input
                                    required
                                    type="text"
                                    placeholder="שם"
                                    className="name-res form-control"
                                    onChange={(event) => onInputChange("name", event)}
                                />
                                <input
                                    required
                                    type="email"
                                    placeholder="מייל"
                                    className="name-res form-control"
                                    onChange={(e) => { setEmail(e) }}
                                />
                                <div className="form-group">
                                    <textarea
                                        required
                                        className="area form-control"
                                        id="message-text"
                                        onChange={(event) => onInputChange("val", event)}
                                        placeholder="נהניתם? ספרו לנו איך היתה החוויה">
                                    </textarea>
                                </div>
                            </form>
                        </div>
                        {error && <label className="fill-all-fields">* יש למלא את כל השדות</label>}
                        <div className="modal-footer">
                            <button type="button" className="butn not-now" data-dismiss="modal">לא עכשיו</button>
                            <button type="submit" className="butn" data-dismiss={error ? "" : "modal"} onClick={addRes}>שלח</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Responds;