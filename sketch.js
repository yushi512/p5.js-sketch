let img;
let rows = 25;  // 縦（行）数
let cols = 20;  // 横（列）数
let cellSize = 20;  // セルの初期サイズ
let minCellSize = 1;  // セルサイズの最小値
let p = 0.05;               // 確率
let grid = new Array(rows);  // 行数分の配列を作成
let maxCanvasWidth = 500;
let maxCanvasHeight = 600;

let showText = true;  // テキストを表示するかどうかのフラグ
let textStartTime = 0;  // テキスト表示開始時刻を記録
let displayDuration = 10000;  // テキストを表示する時間（10秒 = 10000ミリ秒）

for (let i = 0; i < rows; i++) {
    grid[i] = new Array(cols);  // 各行に列数分の配列を追加
}

for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
        grid[y][x] = 0;  // 各要素の初期値を0（円の半径）
    }
}

// setup()より先に呼び出される
function preload() {
    img = loadImage("girl.jpg");  // 画像をロード
}

function setup() {
    // キャンバスサイズは一定
    createCanvas(maxCanvasWidth, maxCanvasHeight);
    noStroke();
    setupGrid();  // 初期のグリッドをセットアップ
}

function draw() {
    background(255);  // 背景を白に設定

    let allCellsMaxed = true;  // 全てのセルが最大サイズに達したかのフラグ

    for (let y = 0; y < rows; y++) {  // 縦方向のループ
        for (let x = 0; x < cols; x++) {  // 横方向のループ

            // 元の画像から対応するピクセルの色を取得
            let imgX = floor(map(x, 0, cols, 0, img.width));
            let imgY = floor(map(y, 0, rows, 0, img.height));
            let c = img.get(imgX, imgY);  // 画像のピクセルカラーを取得

            // 配列の値を半径とする
            let r = grid[y][x];

            // セルが最大サイズに達していない場合、pの確率で半径を増加
            if (r < cellSize && random(1) < p) {
                grid[y][x] += random(1, 5);  // 半径の増加を調整
            }

            // fillで円をそのピクセルの色に設定して描画
            fill(c);

            // セルいっぱいに円を描画（最小でもcellSize/2になるように描画）
            circle(x * (maxCanvasWidth / cols) + (maxCanvasWidth / cols) / 2,
                y * (maxCanvasHeight / rows) + (maxCanvasHeight / rows) / 2,
                r);  // x, yの座標に円を描画。サイズはcellSizeで制限

            // まだ最大半径に達していないセルがあるかチェック
            if (grid[y][x] < cellSize) {
                allCellsMaxed = false;
            }

            // 最大半径をセルサイズに制限
            if (grid[y][x] > cellSize) {
                grid[y][x] = cellSize;  // 最大半径をセルサイズに制限
            }
        }
    }

    // 全てのセルが最大サイズに達したら、セルサイズを縮小
    if (allCellsMaxed) {
        cellSize -= 3;  // セルサイズを減らす
        if (cellSize <= 11) {
            p = 0.1;
        } else if (cellSize <= 8) {
            p = 0.2;
        } else if (cellSize <= 5) {
            p = 0.4;
        } else if (cellSize <= 2) {
            p = 0.8;
        }
        
        if (cellSize < minCellSize) {
            cellSize = 20;  // セルサイズが最小値を下回ったら再度20にリセット
            p = 0.05  // pを初期値に戻す
        }

        // rows と cols の更新
        rows = floor(maxCanvasHeight / cellSize);
        cols = floor(maxCanvasWidth / cellSize);

        // グリッドの行数と列数を更新し、再初期化
        setupGrid();
    }
    if (cellSize <= 2) {
        textSize(32);  // テキストサイズを設定
        fill(255, 0, 0);  // 青で描画
        textAlign(CENTER, TOP);  // 上中央にテキストを配置
        text("真珠の耳飾りの少女", width / 2, 20);  // テキストを表示
    }
}

function setupGrid() {
    grid = new Array(rows);  // 行数に基づいて新しい配列を作成
    for (let i = 0; i < rows; i++) {
        grid[i] = [];  // 各行を空配列として初期化
        for (let j = 0; j < cols; j++) {
            grid[i][j] = 0;  // 各セルの初期値を0に設定（円の初期半径）
        }
    }
}



