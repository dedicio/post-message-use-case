import './style.css'
import { setupMessage } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Foreign App</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupMessage(document.querySelector('#counter'))
