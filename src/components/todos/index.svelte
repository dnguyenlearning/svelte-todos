<script>
    import TodoList from "./list.svelte";
    import TodoForm from "./form.svelte";
    import {todo} from "../../store/todos.js";

</script>

<div class="container mt-5">
    <TodoForm />
    <TodoList todos={$todo}/>
</div>