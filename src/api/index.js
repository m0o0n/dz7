import axios from "axios";

const baseInstance = axios.create({
    baseURL: 'https://65325302d80bd20280f5578e.mockapi.io/phonebook/api/'
})

export const fetchContacts = async () => {
    const { data } = await baseInstance.get('contacts')
    return data
}

export const createContact = async (formData) => {
    const { data } = await baseInstance.post('contacts', formData)
    return data
}

export const deleteContact = async (id) => {
    const { data } = await baseInstance.delete(`contacts/${id}`)
    return data
}