import {contactsApi} from "./services/contactsApi";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware)
})
