let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input.shift());
let index = 0;

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

const bfs = (graph, visited, x, y) => {
  let queue = [];
  visited[x][y] = true;
  queue.push([x, y]);
  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let dir = 0; dir < 4; dir++) {
      let nx = cx + dx[dir];
      let ny = cy + dy[dir];
      if (nx < 0 || nx >= graph.length || ny < 0 || ny >= graph[0].length) continue;
      if (graph[nx][ny] === 0 || visited[nx][ny] === true) continue;
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
};

for (let t = 0; t < T; t++) {
  let wormCnt = 0;
  const [m, n, k] = input[index++].split(' ').map(Number);
  const graph = Array.from(Array(m), () => Array(n).fill(0));
  const visited = Array.from(Array(m), () => Array(n).fill(false));

  for (let i = 0; i < k; i++) {
    const [x, y] = input[index++].split(' ').map(Number);
    graph[x][y] = 1;
  };

  for (let j = 0; j < m; j++) {
    for (let z = 0; z < n; z++) {
      if (graph[j][z] === 1 && visited[j][z] === false) {
        bfs(graph, visited, j, z);
        wormCnt++;
      }
    }
  };
  console.log(wormCnt);
}



