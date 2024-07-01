export const textToSpeech = (texto) => {
  console.log('Hablando', texto.toString)
  let utterance = new SpeechSynthesisUtterance()
  utterance.text = texto
  utterance.voice = window.speechSynthesis.getVoices()[0]
  console.log('text to speech', texto)
  window.speechSynthesis.speak(utterance)
}

export const getVoices = () => {
  // let voces = new SpeechSynthesisUtterance();
  const voices = speechSynthesis.getVoices()
  return voices
}

export const models = {
  LLaMA3_8b: 'llama3-8b-8192',
  Mixtral_8x7b: 'mixtral-8x7b-32768',
}

export const languages = {
  es: 'es-ES',
  en: 'en-US',
  pt: 'pt-BR',
  fr: 'fr-FR',
  de: 'de-DE',
  it: 'it-IT',
  ja: 'ja-JP',
  ko: 'ko-KR',
  zh: 'zh-CN',
  ru: 'ru-RU',
  hi: 'hi-IN',
  ar: 'ar-AR',
  tr: 'tr-TR',
  th: 'th-TH',
  vi: 'vi-VN',
  id: 'id-ID',
  ms: 'ms-MY',
  nl: 'nl-NL',
  pl: 'pl-PL',
  hu: 'hu-HU',
  cs: 'cs-CZ',
  sk: 'sk-SK',
}
