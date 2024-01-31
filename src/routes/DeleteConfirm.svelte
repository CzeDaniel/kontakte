<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let vorname = "";
    export let nachname = "";

    const buttonDeleteClick = () => {
        dispatch("delete");
    };

    const buttonCancelClick = () => {
        dispatch("cancel");
    };
</script>

<h2>Löschen</h2>
<p>
    Wollen Sie wirklich <strong
        >{vorname}
        {nachname}</strong
    >
    löschen?
</p>
<button on:click={buttonDeleteClick} class="btn btn-danger mb-2">Löschen</button
>
<button on:click={buttonCancelClick} class="btn btn-secondary mb-2"
    >Abbrechen</button
>
