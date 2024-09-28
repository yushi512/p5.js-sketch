<<<<<<< HEAD
let lines = [];
let lifespan = 1000;  // 線の持続時間（ミリ秒）

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    //background(255, 255, 255, 50); // 背景をわずかに透明にしてトレイル効果
    for (let i = lines.length - 1; i >= 0; i--) {
        let lineData = lines[i];

        // 線を描く
        stroke(255);
        strokeWeight(lineData.w);
        line(lineData.px, lineData.py, lineData.x, lineData.y);

        // 線の終点を更新して枝を伸ばす
        lineData.x += lineData.v;  // X方向への変位
        lineData.y += lineData.u;  // Y方向への変位

        if (abs(lineData.x - lineData.x0) > width / 3) {
            lineData.lifespan = 0
        }

        // 線の始点を更新
        lineData.px = lineData.x;
        lineData.py = lineData.y;

        // 線の変位の更新
        if (lineData.lifespan > lifespan / 2) {
            // 初期段階では変位を小さくして直線的にする
            lineData.v += random(-0.5, 0.5);  // X方向の揺れを抑える
        } else {
            // 寿命が半分を過ぎたら枝が広がるように揺れを大きくする
            lineData.v += random(-2, 2);
        }
        lineData.u *= 0.98;           // Y方向は徐々に減速（重力のような効果）

        // 線の太さを徐々に細くする
        lineData.w *= 0.98;

        // 寿命を減少させ、寿命が0以下なら配列から削除
        lineData.lifespan -= 16; // 1フレームあたりの時間（約60fpsなので16ms）
        if (lineData.lifespan <= 0) {
            lines.splice(i, 1); // 寿命が切れたら削除
        }
    }

    frameRate(60);
}

// マウスがクリックされたときに線を追加
function mousePressed() {
    // 新しい線をクリックした位置に追加
    let branchCount = 30; // 分岐数
    for (let j = 0; j < branchCount; j++) {
        lines.push({
            x: mouseX,            // 線のX座標(終点)
            y: height,            // 線のY座標(終点)
            px: mouseX,           // 線のX座標(始点)
            py: height,           // 線のY座標(始点)
            x0: mouseX,           // 線のX座標初期値          
            w: random(10, 20),    // 線の太さ（ランダムに太さを持たせる）
            v: random(-2, 2),     // X座標初期変位（ランダム）
            u: random(-5, -10),   // y座標初期変位（上方向に伸びる）
            lifespan: lifespan    // 線の持続時間
        });
    }
}
=======
let lines = [];
let lifespan = 1000;  // 線の持続時間（ミリ秒）

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
    //background(255, 255, 255, 50); // 背景をわずかに透明にしてトレイル効果
    for (let i = lines.length - 1; i >= 0; i--) {
        let lineData = lines[i];

        // 線を描く
        stroke(0);
        strokeWeight(lineData.w);
        line(lineData.px, lineData.py, lineData.x, lineData.y);

        // 線の終点を更新して枝を伸ばす
        lineData.x += lineData.v;  // X方向への変位
        lineData.y += lineData.u;  // Y方向への変位

        if (abs(lineData.x - lineData.x0) > width / 3) {
            lineData.lifespan = 0
        }

        // 線の始点を更新
        lineData.px = lineData.x;
        lineData.py = lineData.y;

        // 線の変位の更新
        if (lineData.lifespan > lifespan / 2) {
            // 初期段階では変位を小さくして直線的にする
            lineData.v += random(-0.5, 0.5);  // X方向の揺れを抑える
        } else {
            // 寿命が半分を過ぎたら枝が広がるように揺れを大きくする
            lineData.v += random(-2, 2);
        }
        lineData.u *= 0.98;           // Y方向は徐々に減速（重力のような効果）

        // 線の太さを徐々に細くする
        lineData.w *= 0.98;

        // 寿命を減少させ、寿命が0以下なら配列から削除
        lineData.lifespan -= 16; // 1フレームあたりの時間（約60fpsなので16ms）
        if (lineData.lifespan <= 0) {
            lines.splice(i, 1); // 寿命が切れたら削除
        }
    }

    frameRate(60);
}

// マウスがクリックされたときに線を追加
function mousePressed() {
    // 新しい線をクリックした位置に追加
    let branchCount = 30; // 分岐数
    for (let j = 0; j < branchCount; j++) {
        lines.push({
            x: mouseX,            // 線のX座標(終点)
            y: height,            // 線のY座標(終点)
            px: mouseX,           // 線のX座標(始点)
            py: height,           // 線のY座標(始点)
            x0: mouseX,           // 線のX座標初期値          
            w: random(10, 20),    // 線の太さ（ランダムに太さを持たせる）
            v: random(-2, 2),     // X座標初期変位（ランダム）
            u: random(-5, -10),   // y座標初期変位（上方向に伸びる）
            lifespan: lifespan    // 線の持続時間
        });
    }
}
>>>>>>> aea311d47b67bb5a443cad2ac08fbcc20fc50565
