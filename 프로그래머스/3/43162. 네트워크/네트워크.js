function solution(n, computers) {
    const visited = new Array(n).fill(0);
    let count = 0;
    
    for (let i = 0; i < visited.length; i++) {
        if (visited[i] === 1) continue;
        
        count += 1;
        dfs(computers, visited, i);
    }
    return count;
}
function dfs(graph, visited, node) {
    visited[node] = 1;
    
    for (let j = 0; j < graph[node].length; j++) {
        if (graph[node][j] && visited[j] === 0) {
            dfs(graph, visited, j)
        }
    }
}