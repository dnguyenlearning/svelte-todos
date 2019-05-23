<script>
  import { todo } from "../../store/todos.js";

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  let value = "";

  const formSubmit = () => {
    todo.addTodo({
      title: value,
      done: false,
      id: getRandomArbitrary(100000, 99999999)
    });
    value = "";
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      formSubmit();
    }
  };
</script>

<div class="input-group mb-3">
  <input
    type="text"
    class="form-control"
    on:keydown={handleKeyDown}
    bind:value
    placeholder="Input your value"
    aria-label="Recipient's username"
    aria-describedby="button-addon2" />
  <div class="input-group-append">
    <button
      disabled={!value}
      class="btn btn-outline-primary"
      type="button"
      on:click={formSubmit}
      id="button-addon2">
      Submit
    </button>
  </div>
</div>
