<script>
  import { obtenerCompletions } from '@/functions/groq'

  // @ts-ignore
  let prompt = 'Cuál es el día más largo del año'
  let respuesta = ''
  // const respuesta = prompt.length ? obtenerCompletions(prompt):"NADA"

  const responder = async () => {
    // @ts-ignore
    respuesta = await obtenerCompletions(prompt)
    // @ts-ignore
    console.log({ prompt }, { respuesta })
    prompt = ''
  }
</script>

<div class="contenedor">
  <div class="formulario">
    <form method="POST" on:submit|preventDefault={responder}>
      <label class="">
        <p>Consulta</p>
        <p>
          <input name="prompt" type="text" bind:value={prompt} autocomplete="off" placeholder="tu consulta..." />
        </p>
        <button>Enviar</button>
      </label>
    </form>
  </div>

  <div class="respuesta">
    {#await respuesta then resp}
      <!-- {@html resp} -->
    {:catch error}
      {error}
    {/await}
  </div>
</div>

<style>
  .contenedor {
    display: blok;
    width: 500px;
    float: left;
    border-radius: 15px;
    background-color: bisque;
    padding: 20px;
  }
  .formulario {
    display: flex;
    border-radius: 15px;
    border: 1px solid black;
    padding: 10px;
  }

  input {
    border: solid black 1px;
    margin: 10px 0 10px 0;
    padding: 4px;
  }
  button {
    border-radius: 15px;
    border: 1px solid black;
    padding: 5px 10px;
    font-weight: bold;
  }

  .respuesta {
    /* display: hidden; */
    display: flex;
    border-radius: 15px;
    border: 1px solid bisque;
    padding: 10px;
    color: bisque;
  }
</style>
