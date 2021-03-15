import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddAppointment from "../pages/AddAppointments";
import App from "../pages/Landing";
import ListAppointments from "../pages/ListAppointments";
import NotFound from "../pages/NotFound";
import SearchAppointments from "../pages/SearchAppointments";

function Routes() {
  return (
    <>
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
    </>
  );
}

export default Routes;
