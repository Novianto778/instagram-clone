import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { FieldValue, firebase } from "./lib/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// client side render app: react
// database: firebase
// react-loading-skeleton
// tailwind

// architecture
// components
// constants
// context
// helpers
// hooks
// pages
// lib (firebase)
// services (firebase functions)
// styles (tailwind's folder app/tailwind)
