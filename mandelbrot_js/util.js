class complex{
  constructor(re,im){
    this.real = re
    this.I = im
  }
  mult(other){
    var a = this.real*other.real - this.I*other.I;
    var b = this.real*other.I + this.I*other.real;
    return new complex(a,b)
  }
  conjugate(){
    var ans = new complex(this.real,-this.I);
    return ans
  }
  norm(){
    var ans = this.mult(this.conjugate());
    return (ans.real)**(1/2)
  }
  add(other){
    var a = this.real + other.real;
    var b = this.I + other.I;
    return new complex(a,b)
  }

  toStr(){
    return ""+this.real+" + "+this.I+" I"
  }
}


// function test_complex(){
//   document.write("welcome to Javatpoint <br>");
//   var z = new complex(1,2)
//   var w = new complex(3,4)
//   // document.write(z.toStr())
//   // document.write("<br>"+w.toStr())
//   // document.write("<br>"+z.mult(w).toStr())
//   // document.write("<br>"+z.toStr())
//   // document.write("<br>"+z.norm())
//
//   var z = new complex(-1,0)
//   var c = new complex(-1,0)
//   for(var i = 0; i<10; i++){
//     z = z.mult(z).add(c)
//     document.write("<br>"+z.toStr()+" "+z.norm())
//   }
// }
//
//
// test_complex()
