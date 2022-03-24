import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Signup from "./pages/Signup";
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
