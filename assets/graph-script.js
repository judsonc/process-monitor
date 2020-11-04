const socket = io('http://localhost:8000/graph');
let graph;

socket.on('list-cores', data => {
  graph = '';

  for (let i = 0; i < data.length; i++) {
    const value = data[i];

    graph += `<progress class="nes-progress is-pattern" value="${value}" max="100"></progress>`;
  }

  document.getElementById('graph').innerHTML = graph;  
})
