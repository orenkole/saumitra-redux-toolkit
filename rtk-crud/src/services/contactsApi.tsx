import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Contact} from "../model/contact.model";

export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    endpoints: (builder) => ({
        contacts: builder.query<Contact[], void>({
            query: () => "/contacts",
        }),
        addContact: builder.mutation<{}, Contact>({
            query: (contact) => ({
                url: '/contacts',
                method: 'POST',
                body: contact
            })
        })
    })
})

export const {
    useContactsQuery,
    useAddContactMutation
} = contactsApi;
