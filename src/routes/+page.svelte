<script lang="ts">
    import SuperDebug, { superForm, fileProxy } from 'sveltekit-superforms';
    import type { PageData } from './$types';

    export let data: PageData;

    const { form, message, enhance } = superForm(data.form);

    const formFile = fileProxy(form, 'image');

    function handleInput() {
        formFile.set(
            new File(['1234566'], 'test1.txt', { type: 'text/plain' })
        );
    }
</script>

{#if $message}<h3>{$message}</h3>{/if}
<SuperDebug data={$form} />
<form method="POST" enctype="multipart/form-data" use:enhance>
    <input
        type="file"
        name="image"
        bind:files={$formFile}
        on:change={handleInput}
    />
    <button>Submit</button>
</form>
