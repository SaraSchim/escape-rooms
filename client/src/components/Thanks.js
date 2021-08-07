import React from 'react';
import '../css/thanks.css';
import { withRouter } from 'react-router-dom';

export default withRouter(
    function Thanks({ type, history }) {

        return (
            <>
                <div className="thank-you">
                    <div className="thanks-text">
                        {type !== "private" && <div>  <h2>תודה שהזמנתם חדר בריחה בנושא
                    {type === "world" && " בריאת העולם"}
                            {type === "year" && " מעגל השנה"}
                        </h2>
                            <h3>
                                בדקות הקרובות תקבלו מייל עם פרטי ההזמנה
                            </h3>
                        </div>}
                        {type === "private" && <div>
                            <h2>בקשתכם התקבלה!</h2>
                            <h3>אנו ניצור איתכם קשר בקרוב</h3>
                        </div>}

                        <h2>בהנאה רבה!!</h2>
                    </div>
                    <button
                        type="button"
                        className="order-more order-now "
                        onClick={() => {
                            history.push("/escape-rooms"); window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth"
                            })
                        }}>
                        רוצים להזמין עוד?
                    </button>
                </div>
            </>
        )
    })
