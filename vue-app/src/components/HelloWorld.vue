<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

let count = ref('');

function setCount(value) {
  count.value = value;
}

window.addEventListener('message', (event) => {
  if (event.origin !== 'http://localhost:8080') {
    return;    
  }
  
  setCount(event.data);
  return;
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="setCount('teste')">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>
