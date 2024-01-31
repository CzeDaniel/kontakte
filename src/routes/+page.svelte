<script>
    import { goto } from "$app/navigation";
    import { contactList, model } from "$lib/contactListStore.js";
    import DeleteConfirm from "./DeleteConfirm.svelte";

    let visibleWindow = "liste";
    // liste
    // deleteConfirm

    //-------------------------
    // Hauptfenster (Liste)
    //-------------------------
    const buttonListEditClick = (contact) => {
        // Formular Edit Kontakt anzeigen
        goto(`./edit/${contact.id}`);
    };

    const buttonListDeleteClick = (contact) => {
        contactToDelete = contact;
        visibleWindow = "deleteConfirm";
    };

    const buttonNewClick = () => {
        // Formular Neuer Kontakt anzeigen
        goto("./new");
    };

    //-------------------------
    // Fenster: Löschen bestätigen
    //-------------------------
    let contactToDelete = {};

    const buttonDeleteConfirmClick = () => {
        // Kontakt löschen
        model.deleteContact(contactToDelete.id);

        // Liste anzeigen
        visibleWindow = "liste";
    };

    const buttonDeleteCancelClick = () => {
        visibleWindow = "liste";
    };
</script>

<main class="p-2">
    {#if visibleWindow === "liste"}
        <h2>Liste</h2>
        <table class="table">
            <thead>
                <tr>
                    <!--<th>id</th>-->
                    <th>Vorname</th>
                    <th>Nachname</th>
                    <th>Telefon</th>
                    <th>-</th>
                </tr>
            </thead>
            <tbody>
                {#each $contactList as contact}
                    <tr>
                        <!--<td>{contact.id}</td>-->
                        <td>{contact.vorname}</td>
                        <td>{contact.nachname}</td>
                        <td>
                            <a href="tel:{contact.telefonnummer}"
                                >{contact.telefonnummer}</a
                            >
                        </td>
                        <td>
                            <button
                                class="btn btn-sm btn-warning"
                                on:click={() => {
                                    buttonListEditClick(contact);
                                }}>Edit</button
                            >
                            <button
                                on:click={() => {
                                    buttonListDeleteClick(contact);
                                }}
                                class="btn btn-sm btn-danger">-</button
                            >
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <button on:click={buttonNewClick} class="btn btn-primary mb-2">+</button
        >
    {/if}

    {#if visibleWindow === "deleteConfirm"}
        <DeleteConfirm
            vorname={contactToDelete.vorname}
            nachname={contactToDelete.nachname}
            on:delete={buttonDeleteConfirmClick}
            on:cancel={buttonDeleteCancelClick}
        />
    {/if}
</main>
