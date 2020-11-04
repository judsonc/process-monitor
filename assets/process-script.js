const socket = io('http://localhost:8000/process');
let process, search;

socket.on('list-process', data => {
  process = '';

  for (let i = 0; i < data.length; i++) {
    const value = data[i];

    if (search && !value.name.includes(search)) continue;

    process += `<tr>
      <td>${value.pid}</td>
      <td>${value.user}</td>
      <td>${value.name}</td>
      <td>${value.pcpu.toFixed(2)}</td>
      <td>${value.pmem.toFixed(2)}</td>
      <td>${value.priority}</td>
      <td>${value.state}</td>
    </tr>`;
  }

  document.getElementById('table-body').innerHTML = process;
})

document.getElementById('search-text').oninput = function () {
  search = this.value;
}