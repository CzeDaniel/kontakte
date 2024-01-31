import { writable, get } from "svelte/store";
import { storage } from "./localStorage";
import { browser } from "$app/environment";

export const contactList = writable([]);

// Beim Starten der App Daten von localStorage einlesen
if (browser) {
    storage.read();
}

export const model = {
    // CREATE
    addContact: (contact) => {
        contact.id = crypto.randomUUID();
        let list = get(contactList);
        list.push(contact);
        contactList.set(list);
        storage.write();
    },

    // READ
    getContact: (id) => {
        let list = get(contactList);
        const contact = list.find(contact => contact.id === id);
        return contact;
    },

    // UPDATE
    updateContact: (contactToUpdate) => {
        let list = get(contactList);
        const index = list.findIndex(contact => contact.id === contactToUpdate.id);
        list[index] = contactToUpdate;
        contactList.set(list);
        storage.write();
    },

    // DELETE
    deleteContact: (id) => {
        let list = get(contactList);
        list = list.filter(contact => contact.id !== id);
        contactList.set(list);
        storage.write();
    }
};
