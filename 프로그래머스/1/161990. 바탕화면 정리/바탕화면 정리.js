function solution(wallpaper) {
    let answer = [];
    
    let rowMin = wallpaper.length;;
    let colMin = wallpaper[0].length;;
    let rowMax = 0;
    let colMax = 0;
    
     wallpaper.forEach((row, rowIdx) => {
        for (let colIdx = 0; colIdx < row.length; colIdx++) {
            if (row[colIdx] === '#') {
                rowMin = Math.min(rowMin, rowIdx);
                colMin = Math.min(colMin, colIdx);
                rowMax = Math.max(rowMax, rowIdx);
                colMax = Math.max(colMax, colIdx);
            }
        }
    });
    answer = [rowMin, colMin, rowMax+1, colMax+1]
    
    return answer;
}