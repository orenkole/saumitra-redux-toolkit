import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Contact} from "../model/contact.model";

export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    tagTypes: ["Contact"],
    endpoints: (builder) => ({
        contacts: builder.query<Contact[], void>({
            query: () => "/contacts",
            providesTags: ["Contact"]
        }),
        addContact: builder.mutation<{}, Contact>({
            query: (contact) => ({
                url: '/contacts',
                method: 'POST',
                body: contact
            }),
            invalidatesTags: ["Contact"]
        }),
        deleteContact: builder.mutation<void, string>({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Contact"],
        }),
    })
})

export const {
    useContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
} = contactsApi;
