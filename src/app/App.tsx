import React from "react";
import "app/App.css";
import { Router } from "app/Router";
import { store } from "app/bll/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router />;
    </Provider>
  );
}

export default App;
