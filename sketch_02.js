let h, s, b, r;

function setup() {
    createCanvas(400, 400)
    background(0)
    noFill()

    colorMode(HSB)
    r = 0
    h = 0
    s = 255
    b = 100
}

function draw() {
    //background(0)
    for (let i = 0; i < 5; i++) {
        if (h <= 1.4 * width) {
            h++
        } else {
            h = 0
        }
        map(h, 0, 255, 0, 1.5 * width)
        stroke(h, s, b)
        circle(width / 2, height / 2, r)
        if (r > 1.5 * width) {
            r = 0

        } else {
            r += 1
        }
    }

    frameRate(60)
}