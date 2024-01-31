import { error } from '@sveltejs/kit';
import { model } from '$lib/contactListStore';

export function load({ params }) {
    const id = params.slug;
    const contact = model.getContact(id);

    if (contact) {
        return contact; // -> data
    } else {
        error(404);
    }
}