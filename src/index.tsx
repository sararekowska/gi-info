import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CharList from "./components/CharList";
import Header from "./components/Header";
import Home from "./components/Home";
import WeaponList from "./components/WeaponList";
import ErrorPage from "./components/Error";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <BrowserRouter>
        {/* <Switch> */}
        <Route path="/" component={Home} exact />
        <Route path="/error" component={ErrorPage} />
        <Route path="/char-list" component={CharList} />
        <Route path="/weapon-list" component={WeaponList} />
        {/* </Switch> */}
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
