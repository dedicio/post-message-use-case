<script setup>
import { ref } from 'vue'

defineProps({
  title: String
})

let message = ref(' ');
let count = 0;
let source = '';
let origin = '';

function setMessage(value) {
  message.value = value;
}

function emitCountIncrement() {
  if (!source) {
    return setMessage('É necessário receber uma messagem antes');
  }
  
  count++;
  source.postMessage(count, origin);
}

window.addEventListener('message', (event) => {
  if (event.origin !== 'http://localhost:8080') {
    return;    
  }

  source = event.source;
  origin = event.origin;
  
  setMessage(event.data);
  return;
})
</script>

<template>
  <h1>{{ title }}</h1>

  <div class="card">
    <div>
      {{ message }}
    </div>
    <br>
    <button type="button" @click="emitCountIncrement">
      Soma +1
    </button>
  </div>
</template>
