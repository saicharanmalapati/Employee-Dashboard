import React from "react";
import { Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";
import Routes from "./Routes";

// export const store = configureStore();

function App() {
  return (
    <Provider store={store()}>
      <ConnectedRouter history={history}>
        <Switch>
          <Routes />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
