<script>
  let recognizing = false
  let transcript = ''
  let recognition
  let isSilent = false

  import { obtenerCompletions } from '@/functions/groq'

  let respuesta = ''
  // const respuesta = prompt.length ? obtenerCompletions(prompt):"NADA"

  const consultarAI = async (prompt) => {
    // @ts-ignore
    respuesta = await obtenerCompletions(prompt)
    // @ts-ignore
    console.log({ prompt }, { respuesta })
    prompt = ''
  }

  // Comprobar si el navegador soporta la API de reconocimiento de voz
  if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'es-ES'

    recognition.onstart = () => {
      recognizing = true
      isSilent = false
    }

    recognition.onerror = (event) => {
      console.error(event.error)
      recognizing = false
      isSilent = false
    }

    recognition.onend = () => {
      recognizing = false
      isSilent = true
    }

    recognition.onresult = (event) => {
      let interimTranscript = ''
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          transcript += event.results[i][0].transcript
        } else {
          interimTranscript += event.results[i][0].transcript
        }
      }
      transcript = transcript.trim()
      const ultimos = transcript.split(' ')
      const ultimo = ultimos[ultimos.length - 1]
      console.log({ ultimo })

      switch (ultimo) {
        case 'Stop':
          stopRecognition()
          transcript = cutLastWord(transcript)
          break
        case 'borrar':
          transcript = ''
          // cutLastWord()
          break
        case 'enviar':
          transcript = cutLastWord(transcript)
          consultarAI(transcript)
          stopRecognition()
          transcript = ''
          break

        default:
          break
      }
    }

    // Detectar el final del habla
    recognition.onspeechend = () => {
      isSilent = true
      // recognition.stop();
      stopRecognition()
    }
  } else {
    console.error('El navegador no soporta el reconocimiento de voz')
  }

  function cutLastWord(texto) {
    const ultimos = texto.split(' ')
    // Elimina la última palabra del array
    ultimos.pop()
    // Une las palabras restantes de nuevo en una frase
    texto = ultimos.join(' ')
    return texto
  }

  function startRecognition() {
    if (!recognizing) {
      recognition.start()
      isSilent = false
    }
  }

  function stopRecognition() {
    if (recognizing) {
      recognition.stop()
    }
  }
</script>

<div class="controls">
  <div class="state">
    {#if recognizing}
      <button class="no" on:click={stopRecognition} disabled={!recognizing}>STOP</button>
    {:else}
      <button class="si" on:click={startRecognition} disabled={recognizing}>START</button>
    {/if}
  </div>
</div>

<div class="transcript">{transcript}</div>

<div class="contenedor">
  <div class="respuesta">
    {#await respuesta then resp}
      <!-- {@html resp} -->
    {:catch error}
      {error}
    {/await}
  </div>
</div>

<style>
  /* Text to AI */
  .contenedor {
    display: blok;
    width: 500px;
    float: left;
    border-radius: 15px;
    background-color: bisque;
    padding: 20px;
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

  /* Voice to text */
  .controls {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .transcript {
    border: 1px solid #ccc;
    padding: 10px;
    min-height: 100px;
  }

  button {
    margin: 0 10px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .state {
    margin-top: 10px;
    display: flex;
  }

  button.si {
    background-color: green;
  }
  button.no {
    background-color: red;
  }
</style>
