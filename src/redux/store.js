// import { configureStore , getDefaultMiddleware} from "@reduxjs/toolkit";
// import phonebookReducer from "./phonebook/phonebookReducer";
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const store = configureStore({
//   reducer: phonebookReducer,
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export { store };

import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook/phonebookReducer";

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
});

export default store;