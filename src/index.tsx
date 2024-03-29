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
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ReactQueryDevtools } from "react-query/devtools";

library.add(fas);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 } },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/gi-info" component={Home} exact />
          <Route path="/gi-info/char-list" component={CharList} exact />
          <Route path="/gi-info/weapon-list" component={WeaponList} exact />
          <Route path="/gi-info/weapon/:name" component={WeaponPage} />
          <Route path="/gi-info/character/:name" component={CharPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
