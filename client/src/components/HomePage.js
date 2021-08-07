import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/homePage.css';
import door from '../images/door3.png';
import key from '../images/key5.png';
import EscapeRooms from './EscapeRooms';
import { useState, useEffect, useRef } from 'react';


export default withRouter(
    function HomePage({ history, isManager }) {

        const [showBanner, setShowBanner] = useState(true);

        const scrollRef = useRef()

        useEffect(() => {
            window.scrollTo({ top: 0, left: 0 })
            window.addEventListener('scroll', handleScroll);
        }, []);

        function handleScroll() {
            if (window.pageYOffset > 50 && window.pageYOffset < 900) {
                setShowBanner(false);
            } else {
                setShowBanner(true);
            }
        };

        return (
            <>
                <div className="home">
                    {isManager ? <img src={key} alt="key" style={showBanner ? { opacity: "1" } : { opacity: "0" }} className="door-img" />
                        : <img src={door} alt="door" style={showBanner ? { opacity: "1" } : { opacity: "0" }} className="door-img" />}
                    <h1 className="lock-text">נראה אתכם מצליחים לפצח את קוד המנעול ולפתוח את הקופסא הנעולה!!</h1>

                    {isManager ?
                        <button
                            type="button"
                            className="order-now show-orders"
                            onClick={() => history.push('/showOrders')}>
                            לצפייה בהזמנות
                        </button>
                        :
                        <button
                            type="button"
                            className="order-now"
                            onClick={
                                () => {
                                    scrollRef.current.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }
                            }>
                            הזמינו עכשיו
                        </button>
                    }
                </div>
                <div ref={scrollRef} ><EscapeRooms /></div>
            </>
        )
    }
)
