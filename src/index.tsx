import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import "bulma/css/bulma.css";
import 'antd/dist/antd.css';
import HeaderMenu from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import AddAppointment from "./pages/AddAppointments";
import ListAppointments from "./pages/ListAppointments";
import SearchAppointments from "./pages/SearchAppointments";

ReactDOM.render(
  <>
    <Router>
      <HeaderMenu />
      <div className="p-2">
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
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
