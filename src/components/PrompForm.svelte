<script>
  import debounce from 'lodash.debounce'
  export let search

  const onInputChange = debounce((event) => {
    const prompt = event.target.value
    console.log(prompt)
  }, 500)
</script>

<form method="POST">
  <label class="grid grid-flow-col">
    Consulta
    <input
      type="text"
      class="black w-80 h-9 px-3 rounded"
      placeholder="Enter your search..."
      on:change={onInputChange}
      bind:value={search}
    />
    <button>Log in</button>
  </label>
</form>
