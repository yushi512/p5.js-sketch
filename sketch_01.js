let img;
let x, y, r;
// setup()より先に呼び出される
function preload() {
    img = loadImage("girl.jpg");
}

function setup() {
    x = 0;
    y = 0;

    createCanvas(600, 900);
    background(0);
    img.resize(width, height)
}

function draw() {
    for (let i = 0; i <= 200; i++) {
        r = 2;
        let col = img.get(x, y);
        text(col);
        fill(col);
        circle(x, y, r);

        if (x >= width) {
            y += r;
            x = 0;
        }
        x += r;
    }

}