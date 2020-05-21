import React, { useEffect } from "react";
import "./App.css";
import Container from "./Components/Container";

// Redux
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Container />
    </>
  );
};

export default App;
