<script>
  import { goto } from '@roxi/routify'
</script>

<div class="container">
  <div>
    <button on:click={() => $goto('/')}>INICIO</button>
  </div>
  <div>
    <button on:click={() => $goto('/voiceToText')}>Voz a Texto</button>
  </div>
  <div>
    <button on:click={() => $goto('/textToAI')}>Texto a IA</button>
  </div>
</div>

<style>
  .container {
    padding: 20px;
    background-color: beige;
    box-shadow: 3px 3px 3px 0px gray;
    border-radius: 10px;
    margin-bottom: 20px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .container button {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 15px;
  }
</style>
