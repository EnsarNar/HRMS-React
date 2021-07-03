import React from "react";
import { Route } from "react-router";
import Login from "../pages/Login";
export default function Auth() {
  return (
    <div>
      <Route path="/login" component={Login} />
      {/* REGISTER ROUTE */}
    </div>
  );
}
