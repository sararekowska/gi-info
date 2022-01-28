import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CharList from "./components/CharList/CharList";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import WeaponList from "./components/WeaponList/WeaponList";
import ErrorPage from "./components/Error/Error";
import WeaponPage from "./components/WeaponPage/WeaponPage";
import CharPage from "./components/CharPage/CharPage";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/char-list" component={CharList} />
          <Route path="/weapon-list" component={WeaponList} />
          <Route path="/weapon/:name" component={WeaponPage} />
          <Route path="/character/:name" component={CharPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
