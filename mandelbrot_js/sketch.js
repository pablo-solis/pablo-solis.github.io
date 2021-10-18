let cnv;
var xmin = -2.5; xmax = 2.5;
var ymin = -2.5; ymax =  2.5;
function setup(){
  cnv = createCanvas(400, 400);
  pixelDensity(1);
  slider = createSlider(100, 1000, 100, 100)
}

// later implement stack to undo zooming

function draw(){
  loadPixels();


  for (var x = 0; x<width; x++){
    for (var y=0; y<height; y++){
      var a = map(x,0,width,xmin,xmax);
      var b = map(y,0,height, ymin,ymax);

      var z = new complex(a,b);
      var c = new complex(a,b);
      var n = 0;
      var maxIter = slider.value()


      while(n<maxIter){
        // z--> z**2+c
        z = z.mult(z).add(c)

        if (z.norm()>2){
          break;
        }
        n++
      }

      // parse this| suggested from internet
      var brightness = map(n, 0, maxIter, 1, 0);
      brightness = map(sqrt(brightness), 0, 1, 0, 255);

      if (n==maxIter){
        brightness = 0;
      }
      var pix = (x+y*width)*4;
      pixels[pix+0] = brightness; //red
      pixels[pix+1] = brightness; // green
      pixels[pix+2] = brightness; //blue
      pixels[pix+3] = 255; //alpha
    }
  }

  updatePixels();
  // text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  // stroke(10);
}


function doubleClicked(event) {
  var xdelta = xmax - xmin; var ydelta = ymax - ymin
  var xcenter = map(mouseX,0,width,xmin,xmax);
  var ycenter = map(mouseY,0,height, ymin,ymax);
  xmin = xcenter - xdelta/5; xmax = xcenter + xdelta/5;
  ymin = ycenter - xdelta/5; ymax = ycenter + xdelta/5;
  redraw();

}
