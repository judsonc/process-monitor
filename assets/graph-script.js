const socket = io('http://localhost:8000/graph');
let graph;

socket.on('list-cores', (data) => {
  graph = '';

  for (let i = 0; i < data.length; i++) {
    const value = data[i];

    graph += `<div class="nes-container full-size">
      <span class="title">Core ${i} - ${value.toFixed(1)}%</span>
      <progress class="nes-progress is-pattern" value="${value}" max="100"></progress>
    </div>`;
  }

  document.getElementById('content').innerHTML = graph;  
})
