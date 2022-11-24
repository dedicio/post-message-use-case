<script>
  let count = 0
  const setCount = (value) => {
    count = value
  }

  window.addEventListener('message', (event) => {
    if (event.origin !== 'http://localhost:8080') {
      return;    
    }
    
    setCount(event.data);
    return;
  });
</script>

<button on:click={() => setCount('teste')}>
  count is {count}
</button>
