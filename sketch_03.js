let circles = [];
let lifespan = 10000;  // 円の持続時間（ミリ秒）

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(0, 0.2);  // 残像を少し残すように背景を描画

    colorMode(HSB);

    for (let i = circles.length - 1; i >= 0; i--) {
        let circleData = circles[i];

        // 円を描画
        fill(circleData.R, circleData.G, circleData.B, 150);
        circle(circleData.x, circleData.y, circleData.r);

        // 円の位置を更新
        circleData.x += circleData.v;
        circleData.y += circleData.u;

        // 円の変位の更新
        circleData.v = random(-20, 20);
        circleData.u = random(-20, 20);


        // 寿命を減少させ、寿命が0以下なら配列から削除
        circleData.lifespan -= 16; // 1フレームあたりの時間（約60fpsなので16ms）
        if (circleData.lifespan <= 0) {
            circles.splice(i, 1); // 寿命が切れたら削除
        }
    }

    frameRate(60);
}

// マウスがクリックされたときに円を追加
function mousePressed() {
    // 新しい円をクリックした位置に追加
    circles.push({
        x: mouseX,            // 円のX座標
        y: mouseY,            // 円のY座標
        r: 15,                // 半径
        v: 0,                 // X座標初期変位
        u: 0,                 // y座標初期変位
        R: random(0, 255),    //Rの指定
        G: 100,               //Gの指定
        B: 100,               //Bの指定
        lifespan: lifespan    // 波紋の持続時間
    });
}


