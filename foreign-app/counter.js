export function setupMessage(element) {
  const message = 'Aguardando mensagem...'
  const setMessage = (message) => {
    element.innerHTML = message
  }
  
  setMessage(message)

  window.addEventListener('message', (event) => {
    setMessage(event.data)
  })
}
