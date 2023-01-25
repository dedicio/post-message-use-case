<script>
// @ts-nocheck

  let message = ' '
  let count = 0
  let source = ''
  let origin = ''


  const setMessage = (value) => {
    message = value
  }

  const emitCountIncrement = () => {
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

    source = event.source
    origin = event.origin
    
    setMessage(event.data);
    return;
  });
</script>

<div>
  { message }
</div>
<br>
<button on:click={emitCountIncrement}>
  Soma +1
</button>
