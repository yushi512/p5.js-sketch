let circles = [];
let numCircles = 10;  // 初期の円の数

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    noFill();
    background(0);
}

function draw() {
    background(0, 0.1);  // 残像を少し残すように背景を描画

    for (let i = 0; i < circles.length; i++) {
        let circleData = circles[i];
        
        // 色の変化
        circleData.h = (circleData.h + 1) % 255;  // 色相が255を超えないようにループ

        // 円を描画
        stroke(circleData.h, circleData.s, circleData.b);
        circle(circleData.x, circleData.y, circleData.r);

        // 円の半径を徐々に大きくし、最大値を超えたらリセット
        circleData.r += 2;
        if (circleData.r > 1.5 * width) {
            circleData.r = 0;
        }
    }

    frameRate(60);
}

// マウスがクリックされたときに円を追加
function mousePressed() {
    // 新しい円をクリックした位置から広がるように追加
    circles.push({
        x: mouseX,             // 円のX座標
        y: mouseY,             // 円のY座標
        r: 0,                  // 初期半径
        h: random(0, 255),     // 色相
        s: 255,                // 彩度
        b: 100                 // 明度
    });
}
