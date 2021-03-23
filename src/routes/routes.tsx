import React from "react";
import { Switch, Route } from "react-router-dom";
import AddAppointment from "../pages/AddAppointments";
import App from "../pages/Landing";
import ListAppointments from "../pages/ListAppointments";
import NotFound from "../pages/NotFound";


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
