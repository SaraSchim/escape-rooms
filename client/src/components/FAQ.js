import React from "react";
import Faq from "react-faq-component";
import '../css/faq.css';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { withRouter } from 'react-router-dom';



const data = {
    title: "",
    rows: [
        {
            title: "לאילו גילאים הפעילות מתאימה?",
            content: `הפעילות מיועדת למבוגרים ולילדים מגיל 12 ומעלה, אך ילדים מגיל 6 ייהנו לצפות ולהשתתף בחיפושים ובביצועים`,
        },
        {
            title: "כמה זמן לוקח לארגן את הפעילות?",
            content:
                "ארגון הבית לפעילות אורך 10 דקות",
        },
        {
            title: "האם החידות נושאות אופי של תשבצים ותפזורות?",
            content: `לא, החידות ברובן פיזיות בשילוב אביזרים וחפצים. 
            הן דורשות אינטלגנציות שונות - ידע עולם, ידע יהודי, הגיון, פתרון בעיות ולאו דוקא שפה וכתיבה`,
        },
        {
            title: "האם צריך שיהיה מפעיל שלא יכול להשתתף במשחק?",
            content: <p>יש צורך באדם שיחביא את החפצים בבית בהתאם להוראות. הוא מקבל דף פתרונות למקרה שיצטרכו רמזים אבל הוא כמובן לא חייב להסתכל בפתרונות ויכול להשתתף במשחק</p>,
        },
        {
            title: "האם יש שירות משלוחים?",
            content: <p>לא. ניתן לשלוח מונית שתאסוף ותחזיר את הערכה (על חשבונכם כמובן...)</p>,
        },
        {
            title: "מאיפה באים לקחת?",
            content: <p>
                כתובת: אגסי 12 הר נוף ירושלים
                <br />
                <a className="show-map" href="https://goo.gl/maps/TGTpEYrU8SpwpzJr5" target="_blank" rel="noopener" aria-describedby="new-window-0">
                    <BsBoxArrowUpRight />
                    הצג מפה
                </a>
            </p>,
        },
        {
            title: "הזמנתי ואני מתחרט, איך אפשר לבטל?",
            content: <p> ניתן לפנות אלינו בטלפון
                <a className="kit-link" href="tel:+972583240653" target="_blank" rel="noreferrer noopener" data-ctm-watch-id="1" data-ctm-tracked="1" data-observe="1" data-observer-id="0"> 058-3240653 </a>
                או במייל
                <a className="kit-link" href="mailto:escapehome3@gmail.com" target="_blank" rel="noreferrer noopener"> escapehome3@gmail.com </a>
            ולבקש לבטל את העיסקה. ניתן לבטל הזמנה עד 24 שעות מהתאריך אליו הזמנתם את הערכה. במידה והביטול אכן יאושר תקבלו החזר כספי באופן שבו שילמתם.
            </p>
            ,
        },
        {
            title: "באילו אמצעי תשלום אפשר לשלם באתר?",
            content: "ניתן לשלם באתר בכרטיס אשראי או ב PayPal"
        },
        {
            title: "מה המטרה של המשחק?",
            content: "בתחילת הפעילות המשתתפים מקבלים קופסא נעולה. המשימה שלהם היא לגלות את קוד המנעול ולפתוח את הקופסא. בתוך הקופסא יש הפתעה. אם המפעיל רוצה הוא יכול להכניס לקופסא משהו אחר לפני הפעילות."
        },
        {
            title: "פרטים ליצירת קשר",
            content: <p>צ'אט באתר - הכי מהיר והכי מדויק!
            הקליקו על סמל הצ'אט הכחול בתחתית המסך...
                <br />
                טלפון: <a className="kit-link" href="tel:+972583240653" target="_blank" rel="noreferrer noopener" data-ctm-watch-id="1" data-ctm-tracked="1" data-observe="1" data-observer-id="0">058-3240653</a>

                <br />
                אימייל: <a className="kit-link" href="mailto:escapehome3@gmail.com" target="_blank" rel="noreferrer noopener">escapehome3@gmail.com</a>

                <br />
                ניתן למלא את הטופס שבתחתית הדף ולקבל מענה תוך 3 ימים
            </p>
        },
    ],
};

const styles = {
    bgColor: 'none',
    titleTextColor: "rgb(0, 238, 255)",
    rowContentColor: 'white',
    arrowColor: "white",
    rowTitleColor: 'white',
    rowTitleTextSize: '1.4vw',
    rowContentTextSize: '1.2vw',
    rowContentPaddingTop: '1%',
    rowContentPaddingBottom: '1%',
    rowContentPaddingRight: '5%',
};


export default withRouter(
    function FAQ({ history }) {

        return (
            <div>
                <h1 className="main-title">עזרו לנו לברוח...</h1>
                <Faq
                    data={data}
                    styles={styles}
                />
                <button
                    type="button"
                    className=" order-now "
                    onClick={() => {
                        history.push("/escape-rooms"); window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        })
                    }}>
                    הזמינו עכשיו
                </button>
            </div>
        );
    }
)