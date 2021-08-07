import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { withRouter } from 'react-router-dom';


export default withRouter(
    class PayPal extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: this.props.details.name,
                telephone: this.props.details.telephone,
                email: this.props.details.email,
                date: this.props.details.date,
                num: this.props.details.num,
                type: this.props.total === 150 ? "מעגל השנה" : "בריאת העולם"
            }
        }

        render() {

            const ID = 0;
            const date = { id: ID, date: this.state.date };
            const { history } = this.props;

            const onSuccess = (payment) => {
                if (this.props.total === 200) {
                    addWorldDate(date);
                    history.push("/thanks-world");
                }
                else {
                    addYearDate(date);
                    history.push("/thanks-year");
                }
                addOrder(this.state);
                window.scrollTo(0, 0);
            }

            const addWorldDate = async (date) => {
                await fetch("http://localhost:5000/world-date", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(date),
                });
            };

            const addYearDate = async (date) => {
                await fetch("http://localhost:5000/year-date", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(date),
                });
            };

            const addOrder = async (data) => {
                await fetch("http://localhost:5000/order", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
            };

            const onCancel = () => {

            }

            const onError = (err) => {
                console.log("Error!", err);
            }

            let env = 'sandbox';
            let currency = 'ILS';
            let total = this.props.total;

            const client = {
                sandbox: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                production: 'YOUR-PRODUCTION-APP-ID',
            }

            const style = {
                color: 'blue',
            }

            return (
                <>
                    <PaypalExpressBtn
                        env={env}
                        client={client}
                        currency={currency}
                        total={total}
                        onError={onError}
                        onSuccess={onSuccess}
                        onCancel={onCancel}
                        style={style} />
                </>
            );
        }
    })