<script>
    import {todo} from "../../store/todos.js";
    const {removeTodo,toggleStatus } = todo;
    export let item = {};

    const handleDelete = (todoId) => {
        removeTodo(todoId);
    }
    const toggleTodo = (todoId) => {
        toggleStatus(todoId)
    }
</script>

<ul class="list-group">
  <li class="list-group-item">{item.title}
  <span class={`badge badge-${item.done? 'primary' : 'warning'} text-white`}>
  {item.done ? 'completed': 'pending'}
  </span>
  <div class="float-right">
    <button class="btn-sm btn btn-primary" on:click={e=>toggleTodo(item.id)}>toogleStatus</button>
    <button class="btn-sm btn btn-danger" on:click={e=> handleDelete(item.id)}>delete</button>
  </div>
  </li>
</ul>