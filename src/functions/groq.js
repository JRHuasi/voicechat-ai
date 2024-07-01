// @ts-ignore
import { models } from '@/functions/utils'

// respuesta a voz
export const obtenerCompletions = async (prompt) => {
  // const response = await getCompletion(prompt);
  // const responseData = await getCompletion(prompt)

  // Aquí puedes manejar la respuesta como desees
  // const texto = responseData.choices[0].message.content;
  const texto = await getCompletion(prompt)
  console.log(texto)

  const decirTexto = (texto) => {
    window.speechSynthesis.cancel() // Cancelar cualquier habla anterior
    let utterance = new SpeechSynthesisUtterance(texto)
    utterance.lang = 'es-ES' // Configurar el idioma a español

    const voces = window.speechSynthesis.getVoices()
    const vozEspañol = voces.find((voz) => voz.lang.includes('es')) // Encontrar una voz que soporte español

    if (vozEspañol) {
      utterance.voice = vozEspañol
    }
    utterance.volume = 1.0 // 0.0 to 1.0
    utterance.voice = window.speechSynthesis.getVoices()[2]

    window.speechSynthesis.speak(utterance)
  }

  // Asegurarse de que las voces estén cargadas antes de hablar
  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.onvoiceschanged = () => decirTexto(texto)
  } else {
    console.log('Voces', speechSynthesis.getVoices())
    decirTexto(texto)
  }

  return texto
}

// texto a AI
import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
})
const getCompletion = async (prompt) => {
  let response
  const completion = await groq.chat.completions
    .create({
      messages: [
        {
          role: 'system',
          content: 'Responde de manera sintética y acertiva',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: models.LLaMA3_8b,
    })
    .then((chatCompletion) => {
      response = chatCompletion.choices[0]?.message?.content || ''
      console.log({ response })
    })
  return response
}
