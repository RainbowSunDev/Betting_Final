import * as React from "react";

import { Provider } from "react-redux";
import Navigation from "./src/navigators";
// import store from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import Toast from "./src/components/Toast.com";
import LoadingSpinner from "./src/components/LoadingSpinner.com";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Toast />
        <LoadingSpinner />
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
