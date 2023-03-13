import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import toastReducer from "./toastReducer";
import loadingSpinnerReducer from "./loadingSpinnerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import roomReducer from "./roomReducer";
import lotteriesReducer from "./lotteriesReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authState", "roomsState"],
};
//whitelist , blacklist

const rootReducer = combineReducers({
  authState: authReducer,
  roomsState: roomReducer,
  toastState: toastReducer,
  loadingSpinnerState: loadingSpinnerReducer,
  lotteriesState: lotteriesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  },
  composeWithDevTools
);

const persistor = persistStore(store);

export { store, persistor };
