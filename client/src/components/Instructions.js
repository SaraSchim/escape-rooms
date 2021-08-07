import React from 'react';
import '../css/instructions.css';
import { withRouter } from 'react-router-dom';

export default withRouter(

    function Instructions({ history }) {
        return (
            <>
                <div className="instruct">
                    <h3 className="glow title">איך זה עובד?</h3>
                    <p className="text">
                        מקבלים ערכה של הפעילות אותה יש להחזיר בתום המשחק
                <br />
                כל מה שנדרש ממכם הוא לבחור משתתף אחד שיהיה המפעיל. הוא מקבל דף הוראות מפורטות היכן להניח בבית כל חפץ מחלקי הערכה ודף פתרונות אם יהיה צורך ברמזים
                <br />
                בתחילת הפעילות הקבוצה מקבלת קופסא נעולה. במהלך המשחק הקבוצה מופנית לחפצים שונים ומוזרים. הם יצטרכו להבין מתי ולשם מה כל אחד מהם משמש במהלך המשחק
                <br />
                כל שלב מוביל לחידה או לקוד של מנעול עד למציאת הפרס
                <br />
                החידות מגוונות - עיוניות, ביצועיות, אינטראקטיביות ומפתיעות! כולן משלבות חשיבה, אינטליגנציה, יכולת  פתרון בעיות ושיתוף פעולה בין המשתתפים
            </p>
                    <h3 className="glow title">אורך הפעילות</h3>
                    <p className="text">
                        כשעה (לא כולל ארגון הבית לפעילות)
            </p>
                    <h3 className="glow title">למי זה מתאים?</h3>
                    <ul className="text lis">
                        <li>למשפחות בבידוד</li>
                        <li>לבילוי משפחתי בחול המועד בלי לצאת מהבית הממוזג</li>
                        <li>למפגש חברים או חברות בגילאי העשרה</li>
                        <li>למשחק גיבוש במפגש משפחתי בבית או באולם</li>
                        <li>למסיבת יומולדת או בת מצווה</li>
                        <li>ניתן לקבל 2 עותקים ולערוך תחרות בין 2 קבוצות (אפילו בבתים שונים)</li>
                    </ul>
                    <h3 className="glow title">לאיזה גילאים? </h3>
                    <p className="text">
                        הפעילות מיועדת למבוגרים ולילדים מגיל 12 ומעלה, אך ילדים מגיל 6 ייהנו לצפות ולהשתתף בחיפושים ובביצועים
                    </p>
                    <h3 className="glow title">מהיכן אוספים את הערכה?</h3>
                    <p className="text">
                        כתובת:
                        אגסי 12 ירושלים
                    <br />
                        <iframe
                            width="600"
                            height="300"
                            loading="lazy"
                            allowfullscreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.475638302418!2d35.176838885362244!3d31.784784741218974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7abbb7fee15%3A0x7807f1abc7d4dbb6!2z15TXqNeRINep157XoteV158g15DXkteh15kgMTIsINeZ16jXldep15zXmded!5e0!3m2!1siw!2sil!4v1618701074930!5m2!1siw!2sil">
                        </iframe>
                        <br />
                        שימו ❤ לכתובת זו יש להחזיר את הערכה בסיום הפעילות!
                        <br />
                    </p>
                    <h3 className="glow title">המליצו, אך שמרו בסוד!</h3>
                    <p className="text">
                        המליצו לחברים, אך אל תגלו להם שום דבר מראש כדי שגם הם יוכלו להנות!!!
                    </p>
                </div>
                <button
                    type="button"
                    className="order-now"
                    onClick={() => {
                        history.push("/escape-rooms"); window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        })
                    }}>
                    הזמינו עכשיו
                </button>
            </>
        )
    });
