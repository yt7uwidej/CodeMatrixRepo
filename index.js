function trapRainWater(heightMap) {
  if (heightMap.length === 0) return 0;
  const rows = heightMap.length;
  const cols = heightMap[0].length;
  const visited = Array.from(Array(rows), () => Array(cols).fill(false));
  const heap = new MinHeap();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
        heap.insert([heightMap[i][j], i, j]);
        visited[i][j] = true;
      }
    }
  }
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let waterTrapped = 0;
  while (heap.size() > 0) {
    const [height, row, col] = heap.pop();
    for (const dir of dirs) {
      const newRow = row + dir[0];
      const newCol = col + dir[1];
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        !visited[newRow][newCol]
      ) {
        visited[newRow][newCol] = true;
        waterTrapped += Math.max(0, height - heightMap[newRow][newCol]);
        heap.insert([
          Math.max(height, heightMap[newRow][newCol]),
          newRow,
          newCol,
        ]);
      }
    }
  }
  return waterTrapped;
}
