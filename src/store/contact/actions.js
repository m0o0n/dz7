const { createAsyncThunk } = require("@reduxjs/toolkit");
const { fetchContacts, createContact, deleteContact } = require("api");

export const fetchContactsThunk = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const data = await fetchContacts()
            return data
        } catch (err){
            return thunkAPI.rejectWithValue(err.message)
        }

    }
)

export const createContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (formData, thunkAPI) => {
        try {
            const data = await createContact(formData)
            return data
        } catch(err){
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const data = await deleteContact(contactId)
            return data
        } catch(err) {
            return thunkAPI.rejectWithValue(err.message)
        }
       
    }
)