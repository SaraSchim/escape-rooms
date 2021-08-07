import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/escapeRooms.css';
import { useState } from 'react';
import { FiBarChart } from "react-icons/fi";
import { IoPricetags } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import heart from '../images/heart.jpg';
import year from '../images/year.jpg';
import world from '../images/world.jpg';


export default withRouter(
    function EscapeRooms(props) {
        const [inOrder, setInOrder] = useState(false);
        const [onYearHover, setOnYearHover] = useState(false);
        const [onWorldHover, setOnWorldHover] = useState(false);
        const [onPrivateHover, setOnPrivateHover] = useState(false);


        function roomClick(type) {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            setInOrder(type);
            props.history.push(`/${type}`);
        }

        return (
            <div >
                {!inOrder && <h1 className="choose">הערכות שלנו:</h1>}
                {!inOrder && <ul className="room-list">
                    <li className="room room-link" onClick={() => roomClick("year")} onMouseOver={() => setOnYearHover(true)} onMouseLeave={() => setOnYearHover(false)} >
                        <div className="top-room">
                            <img className="world-img" src={year}></img>
                            <span className="tag">משפחות</span>
                        </div>
                        <div className="text-room">
                            <label className="room-type">מעגל השנה</label>
                            <br />
                            <label className="price"><IoPricetags /> 150 ש"ח </label>
                            <label className="price"> <FiBarChart /> בינוני </label>
                            {onYearHover && <div>
                                <p className="about-room">
                                    בחדר בריחה בנושא מעגל השנה
                                <br />
                                 החידות סובבות סביב מעגל השנה
                                <br />
                                  כל חידה מובילה לחג הבא מחגי ישראל
                                </p>
                                <div className="bottom-room" onClick={() => roomClick("year")}>אני רוצה להזמין   <IoIosArrowBack /></div>
                            </div>
                            }
                        </div>
                    </li>

                    <li className="room room-link" onClick={() => roomClick("world")} onMouseOver={() => setOnWorldHover(true)} onMouseLeave={() => setOnWorldHover(false)} >
                        <div className="top-room">
                            <img className="world-img" src={world}></img>
                            <span className="tag">מבוגרים ונוער</span>
                        </div>
                        <div className="text-room">
                            <label className="room-type">בריאת  העולם</label>
                            <br />
                            <label className="price"> <IoPricetags /> 200 ש"ח </label>
                            <label className="price"> <FiBarChart /> קשה </label>
                            {onWorldHover &&
                                <div>
                                    <p className="about-room">
                                        בחדר בריחה בנושא בריאת העולם
                                <br />
                                 החידות סובבות סביב בריאת העולם
                                 <br />
                                  כל חידה מובילה ליום הבא מששת ימי בראשית
                            </p>
                                    <div className="bottom-room" onClick={() => roomClick("world")}>אני רוצה להזמין   <IoIosArrowBack /></div>
                                </div>
                            }
                        </div>
                    </li>

                    <li className="room room-link" onClick={() => roomClick("private")} onMouseOver={() => setOnPrivateHover(true)} onMouseLeave={() => setOnPrivateHover(false)} >
                        <div className="top-room">
                            <img className="world-img" src={heart}></img>
                            <span className="tag">ארועים</span>
                        </div>
                        <div className="text-room">
                            <label className="room-type">להתאמה אישית</label>
                            <br />
                            <label className="price"><IoPricetags /> 1000 ש"ח </label>
                            <label className="price"> <FiBarChart /> על פי בקשתכם... </label>
                            {onPrivateHover &&
                                <div>
                                    <p className="about-room">
                                        חדר בריחה בהתאמה אישית
                                        <br />
                                        מתאים לארוע משפחתי כגון
                                        <br />
                                        יום הולדת או יום נישואין עגול
                                        <br />
                                        אנחנו נתאים לכם חידות
                                        <br />
                                        שמתאימות במיוחד לארוע שלכם
                                    </p>
                                    <div className="bottom-room" onClick={() => roomClick("private")}>אני רוצה להזמין   <IoIosArrowBack /></div>
                                </div>
                            }
                        </div>
                    </li>
                </ul>}

            </div>
        )
    }
)

