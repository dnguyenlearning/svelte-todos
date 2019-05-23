<script>
    import TodoItem from "./item.svelte";

    export let todos = [];

</script>

{#each todos as item (item.id)}
    <TodoItem item={item}/>
{/each}