import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bulma/css/bulma.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import AddAppointment from './components/AddAppointments';
import ListAppointments from './components/ListAppointments';
import SearchAppointments from './components/SearchAppointments';

ReactDOM.render(
  <>
  <Router>
  <Header/>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/add_appointment">
        <AddAppointment />
      </Route>
      <Route path="/search_appointment">
        <SearchAppointments />
      </Route>
      <Route path="/list_appointment">
        <ListAppointments />
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
  </Router>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
