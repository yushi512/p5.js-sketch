let img ;
let x, y, px, py, len_x, len_y;
// setup()より先に呼び出される
function preload() {
    img = loadImage("girl.jpg");
}

function setup() {
    // 読み込む画像のサイズは480 x 240
    createCanvas(img.width, img.height);
}

// イメージをキャンバスに描画する
function draw() {
    x = random(width);
    y = random(height);
    len_x = Math.abs(x-px);
    len_y = Math.abs(y-py);

    if(len_x < width/3 && len_y < height/3){
       let col = img.get(x, y);
       stroke(col);
       strokeWeight(2);
       line(x, y, px, py); 
    }else{ 
        px = random(width);
        py = random(height);
    }
    
    px = random(width);
    py = random(height);


    frameRate(60);
}