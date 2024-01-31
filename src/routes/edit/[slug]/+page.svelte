<script>
    import { goto } from "$app/navigation";
    import { model } from "$lib/contactListStore.js";

    export let data; // kommt von +page.js

    let vorname = data.vorname;
    let nachname = data.nachname;
    let telefonnummer = data.telefonnummer;

    const buttonSaveClick = () => {
        // Neuen Daten speichern
        const updatedContact = {
            id: data.id,
            vorname: vorname,
            nachname: nachname,
            telefonnummer: telefonnummer,
        };
        model.updateContact(updatedContact);

        // zu Liste springen
        goto("../");
    };
    const buttonCancelClick = () => {
        // zu Liste springen
        goto("../");
    };
</script>

<div class="p-2">
    <h2>Kontakt bearbeiten</h2>
    <div class="border p-2 mb-2">
        <label class="form-label" for="inputVorname">Vorname</label>
        <input
            bind:value={vorname}
            id="inputVorname"
            class="form-control"
            type="text"
        />
    </div>
    <div class="border p-2 mb-2">
        <label class="form-label" for="inputNachname">Nachname</label>
        <input
            bind:value={nachname}
            id="inputNachname"
            class="form-control"
            type="text"
        />
    </div>
    <div class="border p-2 mb-2">
        <label class="form-label" for="inputTelefon">Telefon</label>
        <input
            bind:value={telefonnummer}
            id="inputTelefon"
            class="form-control"
            type="tel"
        />
    </div>
    <button on:click={buttonSaveClick} class="btn btn-success mb-2"
        >Speichern</button
    >
    <button on:click={buttonCancelClick} class="btn btn-secondary mb-2"
        >Abbrechen</button
    >
</div>
