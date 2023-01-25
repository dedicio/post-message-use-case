import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState(' ')
  const [source, setSource] = useState('')
  const [origin, setOrigin] = useState('')
  const [count, setCount] = useState(0)

  window.addEventListener('message', (event) => {
    if (event.origin !== 'http://localhost:8080') {
      return
    }

    setSource(event.source)
    setOrigin(event.origin)
    setMessage(event.data)
  })

  const emitCountIncrement = () => {
    if (!source) {
      return setMessage('É necessário receber uma messagem antes')
    }
    
    const value = count + 1
    source.postMessage(value, origin)
    setCount(value)
  }

  return (
    <div className="App">
      <h1>Popup React</h1>
      <div className="card">
        <p>
          {message}
        </p>
        <button onClick={emitCountIncrement}>
          Soma +1
        </button>
      </div>
    </div>
  )
}

export default App
