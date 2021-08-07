import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import Instructions from './components/Instructions.js';
import Responds from './components/Responds.js';
import EscapeRooms from './components/EscapeRooms.js';
import React, { useEffect, useState } from 'react';
import Order from './components/Order';
import Thanks from './components/Thanks';
import Login from './components/Login';
import ShowOrders from './components/ShowOrders';
import FAQ from './components/FAQ';
import Chat from './components/Chat';
import ScrollUpBtn from './components/ScrollUpBtn';
import { IoPersonSharp } from "react-icons/io5";
import SendQst from './components/SendQst';
import { Redirect } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';


function App() {
  const [manager, setManager] = useState(false);

  function setManagerHdl(manHdl) {
    setManager(manHdl);
  }

  function loginOrOut() {
    if (manager) {
      localStorage.removeItem('token');
      setManager(false);
    }
  }


useEffect(() => {
  if(!manager) {
    localStorage.removeItem('token')
  }
})



  return (
    <div className="App">
      <Router>
        <div className="header">
          <nav class="nav">
            <ul className="list">
              <Link to="/" className="link">
                <li className="li"> בית  </li>
              </Link>
              <Link to="/instructions" className="link">
                <li className="li"> איך זה עובד? </li>
              </Link>
              <Link to="/escape-rooms" className="link">
                <li className="li"> לאן תרצו לברוח? </li>
              </Link>
              <Link to="/respond" className="link">
                <li className="li"> תגובות </li>
              </Link>
              <Link to="/faq" className="link">
                <li className="li"> שאלות נפוצות </li>
              </Link>
              {manager && <Link to="/showOrders" className="link">
                <li className="li"> לצפייה בהזמנות </li>
              </Link>}
            </ul>

            {manager ? <Link to="/" className="man-link" onClick={loginOrOut}>
              <div className="man"><IoPersonSharp /> התנתקות </div>
            </Link>
              : <Link to="/login" className="man-link" onClick={loginOrOut}>
                <div className="man"><IoPersonSharp /> התחברות כמנהל</div>
              </Link>
            }

          </nav>
        </div>

        <Switch>
          <Route exact path='/' >
            <HomePage key="home" isManager={manager} />
          </Route>
          <Route path='/instructions'>
            <Instructions key="insructions" />
          </Route>
          <Route path='/escape-rooms' exact>
            <EscapeRooms key="rooms" />
          </Route>
          <Route path='/respond'>
            <Responds key="responds" />
          </Route>
          <Route path='/year' exact>
            <Order type="year" />
          </Route>
          <Route path='/world'  >
            <Order type="world" />
          </Route>
          <Route path='/private' >
            <Order type="private" />
          </Route>
          <Route path='/thanks-world'>
            <Thanks type="world" />
          </Route>
          <Route path='/thanks-year'>
            <Thanks type="year" />
          </Route>
          <Route path='/thanks-private'>
            <Thanks type="private" />
          </Route>
          <Route path='/login'>
            <Login user={setManagerHdl} />
          </Route>
          <PrivateRoute condition={manager} path='/showOrders'>
            <ShowOrders />
          </PrivateRoute >
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/faq'>
            <FAQ />
          </Route>
          <Route component={Error} />
        </Switch>
        {!manager && <SendQst />}

        <footer className="bottom">
          <div class="bottom-nav">
            <ul className="bottom-list">
              <Link to="/" className="btm-link">
                <li className=" btm-li">לדף הבית | </li>
              </Link>
              <Link to="/about" className="btm-link">
                <li className=" btm-li">עלינו | </li>
              </Link>
              <Link to="/contact" className="btm-link">
                <li className="btm-li  ">צור קשר </li>
              </Link>
            </ul>
          </div>
          <div className="all-rights-reserved">© 2021 escapehome3@gmail.com</div>
        </footer>

      </Router>
      <ScrollUpBtn />
      {!manager && <Chat />}
    </div>
  );
}

export default App;

function PrivateRoute(props) {
  const { condition, path } = props
  return (
    <>  {condition ?
      <Route path={path}>
        {props.children}
      </Route >
      : <Redirect to='/' />
    }
    </>)
}