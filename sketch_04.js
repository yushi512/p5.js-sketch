let lines = [];
let lifespan = 1000;  // 線の持続時間（ミリ秒）

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    for (let i = lines.length - 1; i >= 0; i--) {
        let lineData = lines[i];

        // 線を描く
        //stroke(0);
        //strokeWeight(lineData.w);
        //line(lineData.px, lineData.py, lineData.x, lineData.y);

        fill(0);
        circle(lineData.x, lineData.y, lineData.w);


        // 線の終点を更新して枝を伸ばす
        lineData.x += lineData.v;  // X方向への変位
        lineData.y += lineData.u;  // Y方向への変位

        // 線の始点を更新
        lineData.px = lineData.x;
        lineData.py = lineData.y;

        // 線の変位の更新
        if (lineData.lifespan > lifespan / 2) {
            lineData.v += random(-0.5, 0.5);  // X方向の揺れを抑える
        } else {
            lineData.v += random(-2, 2);
        }
        lineData.u *= 0.98;  // Y方向は徐々に減速（重力のような効果）

        // 線の太さを徐々に細くする
        lineData.w *= 0.98;

        // 寿命を減少させ、寿命が0以下なら配列から削除
        lineData.lifespan -= 16; // 1フレームあたりの時間（約60fpsなので16ms）
        if (lineData.lifespan <= 0) {
            lines.splice(i, 1); // 寿命が切れたら削除
        }

        if (abs(lineData.x - lineData.x0) > width / 3){
            lineData.lifespan = 0;
        }
    }

    frameRate(60);
}

// 線を追加する共通関数
function addLine(x, y) {
    let branchCount =20; // 分岐数
    for(let j = 0; j < branchCount; j++){
        lines.push({
            x: x,                 // 線のX座標(終点)
            y: y,                 // 線のY座標(終点)
            px: x,                // 線のX座標(始点)
            py: y,                // 線のY座標(始点)
            x0: mouseX,           // x座標の初期値
            w: random(10, 20),    // 線の太さ（ランダムに太さを持たせる）
            v: random(-0.5, 0.5), // X座標初期変位（幹は最初は直線的）
            u: random(-5, -10),   // y座標初期変位（上方向に伸びる）
            lifespan: lifespan    // 線の持続時間
        });
    }
}

// マウスがクリックされたとき
function mousePressed() {
    addLine(mouseX, mouseY);
}

// タッチされたとき
function touchStarted() {
    if (touches.length > 0) {
        addLine(touches[0].x, touches[0].y);  // タッチ位置のX, Y座標を渡す
    }
    return false; // デフォルトのタッチイベントを無効化（スクロール防止）
}
