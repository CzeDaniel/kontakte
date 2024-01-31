import { contactList } from "./contactListStore";
import { get } from "svelte/store";

export const storage = {
    read: () => {
        if (localStorage.getItem('kontakte')) {
            const dataString = localStorage.getItem('kontakte');
            contactList.set(JSON.parse(dataString));
        } else {
            contactList.set([]);
        }
    },
    write: () => {
        const dataArray = get(contactList);
        const dataString = JSON.stringify(dataArray);
        localStorage.setItem('kontakte', dataString);
    }
}