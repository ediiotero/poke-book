import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="content-wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SearchPage} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
