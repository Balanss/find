var reload = document.querySelector("reload");
 document.getElementById("reload").style.display = "none";
document.getElementById("btn2").style.display="none";
document.getElementById("btn").style.display="none";
var hide1= document.getElementById("hide1").style.display="block";
var hide2= document.getElementById("hide2").style.display="block";
 var hide3=document.getElementById("hide3").style.display="block";
var hide4= document.getElementById("hide4").style.display="none";
 var hide5=document.getElementById("hide5").style.display="none";
var hide6=document.getElementById("hide6").style.display="none";
 var hide7=document.getElementById("hide7").style.display="none";
 document.getElementById("hide8").style.display="none";
 document.getElementById("hide9").style.display="none";
 document.getElementById("hide10").style.display="none";
 document.getElementById("hide11").style.display="none";
 document.getElementById("heart2").style.display="none";
 document.getElementById("heart3").style.display="none";
 document.getElementById("heart4").style.display="none";
 document.getElementById("heart5").style.display="none";
 document.getElementById("btn3").style.display="none";

var arr = ["hide1","hide2","hide3","hide4","hide5","hide6","hide7","hide8","hide9","hide10","hide11"];




var reiner = new Audio("sound/reiner.mp3");
var hit = new Audio ("sound/hit.mp3");



var random = 1 + Math.floor(Math.random()*3);


console.log(" starting "  + random);

//$(`body`).css(`background-image`, `url(images/bg2.png)`);
fail = 49;


function imageChanger3(){
// let index = 2;
if ( random === 3 ){
//   arr.unshift(arr.splice(index, 1)[0]);
// arr.splice(1,10);
//   console.log(arr);

  reiner.play();

document.getElementById("reload").style.display = "none";
    document.getElementById("hide3").src="images/reiner.png";
    setTimeout(function(){

document.getElementById("btn").style.display="block";

},3000);




} else if ( random === 6) {

reiner.play();
  $(`body`).css(`background-image`, `url(images/bg-img.png)`);
  fail = -1;
  document.getElementById("hide3").src="images/reiner.png";

  setTimeout(function(){

  document.getElementById("btn2").style.display="block";

},3000);


} else if ( random === 12){
  reiner.play();
  $(`body`).css(`background-image`, `url(images/bg-img.png)`);
  fail = -1;
  document.getElementById("hide3").src="images/reiner.png";

  setTimeout(function(){

  document.getElementById("btn3").style.display="block";

},3000);

} else if (random === 21){

  $(`body`).css(`background-image`, `url(images/found.png)`);
  reiner.play();
  document.getElementById("reload").innerHTML= "Refresh ";
    document.getElementById("reload").style.display = "block";
    document.getElementById("text").innerHTML=" U Have Found Reiner";
      document.getElementById("text").style.left ="780px";


  fail = -1;
  document.getElementById("hide3").src= "images/reiner.png";
}



else if (fail === 49 ){
  hit.play();
  document.getElementById("hide3").src= "images/not-found.png";
document.getElementById("heart1").style.display="none";
  $(`body`).css(`background-image`, `url(images/bg2.png)`);
  document.getElementById("reload").style.display = "block";
}
else if ( fail === 100){
  document.getElementById("hide3").src= "images/not-found.png";
  hit.play();
   document.getElementById("heart4").style.display="none";

  $(`body`).css(`background-image`, `url(images/bg3.png)`);


}
else if ( fail ===103){
  hit.play();
  document.getElementById("hide3").src= "images/not-found.png";
  document.getElementById("reload").innerHTML= " U FAILED ";
random= -1;
document.getElementById("reload").style.display = "block";
    $(`body`).css(`background-image`, `url(images/bg2.png)`);
 document.getElementById("heart1").style.display="none";
}
 else if ( fail ===101){
   document.getElementById("hide3").src= "images/not-found.png";
   hit.play();
   $(`body`).css(`background-image`, `url(images/bg3.png)`);
  document.getElementById("heart3").style.display="none";
}
else if ( fail === 102){
  document.getElementById("hide3").src= "images/not-found.png";
  hit.play();
  document.getElementById("heart2").style.display="none";



}
else if ( fail ===99){
  hit.play();
document.getElementById("hide3").src= "images/not-found.png";
  document.getElementById("heart5").style.display="none";
  $(`body`).css(`background-image`, `url(images/bg4.png)`);
}

console.log (fail + " fail number");
fail++;


};







function imageChanger2(){


if (random  === 2){

  fail = -1;
reiner.play();

setTimeout(function(){

document.getElementById("btn").style.display="block";

},3000)


  document.getElementById("hide2").src="images/reiner.png";
} else if ( random === 5) {
  reiner.play();
  $(`body`).css(`background-image`, `url(images/bg-img.png)`);
  fail = -1;
  document.getElementById("hide2").src="images/reiner.png";

  setTimeout(function(){

  document.getElementById("btn2").style.display="block";

  },3000);




} else if ( random === 11){
  reiner.play();
  $(`body`).css(`background-image`, `url(images/bg-img.png)`);
  fail = -1;
  document.getElementById("hide2").src="images/reiner.png";

  setTimeout(function(){

  document.getElementById("btn3").style.display="block";

  },3000);



} else if ( random === 20){
  document.getElementById("text").style.left ="780px";
document.getElementById("text").innerHTML=" U Have Found Reiner"
  $(`body`).css(`background-image`, `url(images/found.png)`);
    document.getElementById("reload").style.display = "block";
  document.getElementById("reload").innerHTML= " Refresh ";


  fail = -1;
  document.getElementById("hide2").src= "images/reiner.png";
}



else if (fail === 49 ){
  document.getElementById("hide2").src= "images/not-found.png";
  hit.play();
  document.getElementById("heart1").style.display="none";
  document.getElementById("reload").style.display = "block";
random= -1;
  $(`body`).css(`background-image`, `url(images/bg2.png)`);
}
else if ( fail === 100){
  document.getElementById("hide2").src= "images/not-found.png";
  hit.play();
  document.getElementById("heart4").style.display="none";
    document.getElementById("reload").innerHTML= " ONE TRY LEFT ";
  document.getElementById("reload").style.display = "block";


}
else if ( fail ===101){
  document.getElementById("hide2").src= "images/not-found.png";
  hit.play();
 document.getElementById("heart3").style.display="none";
 $(`body`).css(`background-image`, `url(images/bg3.png)`);
}
 else if ( fail ===102){
   document.getElementById("hide2").src= "images/not-found.png";
   hit.play();
   document.getElementById("heart2").style.display="none";



}
else if ( fail ===103){
  document.getElementById("hide2").src= "images/not-found.png";
  hit.play();
 document.getElementById("heart1").style.display="none";
 document.getElementById("reload").innerHTML= " U FAILED ";
random= -1;
document.getElementById("reload").style.display = "block";
   $(`body`).css(`background-image`, `url(images/bg2.png)`);
}
else if ( fail ===99){
  document.getElementById("hide2").src= "images/not-found.png";
  hit.play();
  document.getElementById("heart5").style.display="none";

  $(`body`).css(`background-image`, `url(images/bg4.png)`);
}

fail++;


//document.getElementById("btn2").style.display="block";


};


function imageChanger(){


if (random === 1 ){






  reiner.play();
  fail = -1;


  setTimeout(function(){

  document.getElementById("btn").style.display="block";

  },3000)



  document.getElementById("hide1").src="images/reiner.png";
}else if ( random === 4) {
  reiner.play();
  fail = -1;
  document.getElementById("hide1").src="images/reiner.png";

  setTimeout(function(){

  document.getElementById("btn2").style.display="block";

  },3000);




} else if ( random === 10){
  reiner.play();
  $(`body`).css(`background-image`, `url(images/bg-img.png)`);
  fail = -1;
  document.getElementById("hide1").src="images/reiner.png";


  setTimeout(function(){

  document.getElementById("btn3").style.display="block";

  },3000);


} else if ( random === 19){

document.getElementById("text").style.left ="780px";
document.getElementById("text").innerHTML=" U Have Found Reiner"

  $(`body`).css(`background-image`, `url(images/found.png)`);

  reiner.play();
    document.getElementById("reload").style.display = "block";
  document.getElementById("reload").innerHTML= " Refresh ";

  fail = -1;
  document.getElementById("hide1").src= "images/reiner.png";
}
else if (fail === 49 ){
  document.getElementById("hide1").src= "images/not-found.png";
  hit.play();
  document.getElementById("heart1").style.display="none";
  document.getElementById("reload").style.display = "block";
 random= -1;
  $(`body`).css(`background-image`, `url(images/bg2.png)`);
}
else if ( fail === 100){
  document.getElementById("hide1").src= "images/not-found.png";
  document.getElementById("heart4").style.display="none";



}

else if ( fail ===101){
  hit.play();
 document.getElementById("heart3").style.display="none";
 $(`body`).css(`background-image`, `url(images/bg3.png)`);
}
else if ( fail ===102){
  document.getElementById("hide1").src= "images/not-found.png";
  hit.play();
  document.getElementById("heart2").style.display="none";



}
else if ( fail ===103){
  hit.play();
 document.getElementById("heart1").style.display="none";
 document.getElementById("reload").innerHTML= " U FAILED ";
random= -1;
document.getElementById("reload").style.display = "block";
   $(`body`).css(`background-image`, `url(images/bg2.png)`);
}
else if ( fail ===99){
  document.getElementById("hide1").src= "images/not-found.png";
  hit.play();
document.getElementById("heart5").style.display="none";
  $(`body`).css(`background-image`, `url(images/bg4.png)`);
}

fail++;

};






function button(){


 random = 4 + Math.floor(Math.random()*6);
console.log(random + " resetted ");
document.getElementById("hide1").src="images/hide.png";
document.getElementById("hide2").src="images/hide.png";
document.getElementById("hide3").src="images/hide.png";
document.getElementById("reload").style.display = "none";
  document.getElementById("hide1").style.display="block";
  document.getElementById("hide2").style.display="block";
  document.getElementById("hide3").style.display="block";
document.getElementById("hide4").style.display="block";
document.getElementById("hide5").style.display="block";
document.getElementById("hide6").style.display="block";
document.getElementById("btn").style.display="none";
document.getElementById("heart2").style.display="block";
document.getElementById("heart3").style.display="block";

fail = 101;
};




function imageChanger4(){




if(random === 7 ){
  reiner.play();

fail = -1;
setTimeout(function(){

document.getElementById("btn2").style.display="block";

},3000);

  document.getElementById("hide4").src= "images/reiner.png";
} else if ( random === 13){
  $(`body`).css(`background-image`, `url(images/found.png)`);
  reiner.play();
  $(`body`).css(`background-image`, `url(images/bg-img.png)`);
  fail = -1;
  document.getElementById("hide4").src="images/reiner.png";


  setTimeout(function(){

  document.getElementById("btn3").style.display="block";

  },3000);


}
else if ( random === 22){
  document.getElementById("text").innerHTML=" U Have Found Reiner";
  document.getElementById("text").style.left ="780px";
  $(`body`).css(`background-image`, `url(images/found.png)`);
  reiner.play();
  document.getElementById("reload").innerHTML= " Refresh ";
    document.getElementById("reload").style.display = "block";

  fail = -1;
  document.getElementById("hide4").src= "images/reiner.png";
}
else if ( fail === 100){
  document.getElementById("hide4").src= "images/not-found.png";
  hit.play();
  document.getElementById("heart4").style.display="none";



}
else if ( fail ===101){
  hit.play();
  document.getElementById("hide4").src= "images/not-found.png";
  $(`body`).css(`background-image`, `url(images/bg3.png)`);
 document.getElementById("heart3").style.display="none";
}
else if ( fail ===103){
  hit.play();
  document.getElementById("hide4").src= "images/not-found.png";
 document.getElementById("heart1").style.display="none";
 document.getElementById("reload").innerHTML= " U FAILED ";
random= -1;
document.getElementById("reload").style.display = "block";
   $(`body`).css(`background-image`, `url(images/bg2.png)`);
}

else if ( fail ===102){document.getElementById("heart2").style.display="none";
  document.getElementById("hide4").src= "images/not-found.png";
  hit.play();


}else if ( fail ===99){

  document.getElementById("hide4").src= "images/not-found.png";
  hit.play();
  document.getElementById("heart5").style.display="none";

  $(`body`).css(`background-image`, `url(images/bg4.png)`);
}

fail++;
};


function imageChanger5(){
if(random ===8 ){
  reiner.play();
  $(`body`).css(`background-image`, `url(images/bg-img.png)`);
  fail = -1;


  setTimeout(function(){

  document.getElementById("btn2").style.display="block";

  },3000);



  document.getElementById("hide5").src ="images/reiner.png";
} else if ( random === 14){
  reiner.play();
  $(`body`).css(`background-image`, `url(images/bg-img.png)`);
  fail = -1;
  document.getElementById("hide5").src="images/reiner.png";


  setTimeout(function(){

  document.getElementById("btn3").style.display="block";

  },3000);


}
else if ( random === 23){document.getElementById("text").innerHTML=" U Have Found Reiner"
document.getElementById("text").style.left ="780px";
  $(`body`).css(`background-image`, `url(images/found.png)`);
  reiner.play();
    document.getElementById("reload").style.display = "block";
  document.getElementById("reload").innerHTML= " Refresh ";
  fail = -1;
  document.getElementById("hide5").src= "images/reiner.png";
}
else if ( fail === 100){
  document.getElementById("hide5").src= "images/not-found.png";
  hit.play();
  document.getElementById("heart4").style.display="none";


  $(`body`).css(`background-image`, `url(images/bg3.png)`);
}else if ( fail ===103){
  hit.play();
  document.getElementById("hide5").src= "images/not-found.png";
 document.getElementById("heart1").style.display="none";
 document.getElementById("reload").innerHTML= " U FAILED ";
random= -1;
document.getElementById("reload").style.display = "block";
   $(`body`).css(`background-image`, `url(images/bg2.png)`);
}
else if ( fail ===101){
  hit.play();
    document.getElementById("hide5").src= "images/not-found.png";
 document.getElementById("heart3").style.display="none";

}
else if ( fail ===102){
    document.getElementById("hide5").src= "images/not-found.png";
  hit.play();
  document.getElementById("heart2").style.display="none";
   $(`body`).css(`background-image`, `url(images/bg3.png)`);



}else if ( fail ===99){
    document.getElementById("hide5").src= "images/not-found.png";
  hit.play();
document.getElementById("heart5").style.display="none";
  $(`body`).css(`background-image`, `url(images/bg4.png)`);
}

fail++;
};


function imageChanger6(){
if (random === 9 ){
  reiner.play();
  $(`body`).css(`background-image`, `url(images/bg-img.png)`);
  fail = -1;

  setTimeout(function(){

  document.getElementById("btn2").style.display="block";

  },3000);




  document.getElementById("hide6").src ="images/reiner.png";
} else if ( random === 15){
  reiner.play();
  $(`body`).css(`background-image`, `url(images/bg-img.png)`);
  fail = -1;
  document.getElementById("hide6").src="images/reiner.png";


  setTimeout(function(){

  document.getElementById("btn3").style.display="block";

  },3000);

}
else if ( random === 24){
  document.getElementById("text").innerHTML=" U Have Found Reiner";
  document.getElementById("text").style.left ="780px";
  $(`body`).css(`background-image`, `url(images/found.png)`);
  reiner.play();
  document.getElementById("reload").innerHTML= "Refresh ";
    document.getElementById("reload").style.display = "block";
  fail = -1;
  document.getElementById("hide6").src= "images/reiner.png";
}
 else if ( fail === 100){
     document.getElementById("hide6").src= "images/not-found.png";
   hit.play();
   document.getElementById("heart4").style.display="none";


  ;
}else if ( fail ===103){
  hit.play();
     document.getElementById("hide6").src= "images/not-found.png";
 document.getElementById("heart1").style.display="none";
 document.getElementById("reload").innerHTML= " U FAILED ";
random= -1;
document.getElementById("reload").style.display = "block";
   $(`body`).css(`background-image`, `url(images/bg2.png)`);
}
else if ( fail ===101){
  hit.play();
  $(`body`).css(`background-image`, `url(images/bg3.png)`)
 document.getElementById("heart3").style.display="none";
    document.getElementById("hide6").src= "images/not-found.png";
}
 else if ( fail ===102){
     document.getElementById("hide6").src= "images/not-found.png";
   hit.play();
   document.getElementById("heart2").style.display="none";



}else if ( fail ===99){
    document.getElementById("hide6").src= "images/not-found.png";
    $(`body`).css(`background-image`, `url(images/bg4.png)`);
  hit.play();
document.getElementById("heart5").style.display="none";

}

fail++;
};







function button2(){
 random = 10 + Math.floor(Math.random()*8);
document.getElementById("btn2").style.display="none";
document.getElementById("hide7").style.display="block";
document.getElementById("hide8").style.display="block";
document.getElementById("hide9").style.display="block";
document.getElementById("hide1").src="images/hide.png";
document.getElementById("hide2").src="images/hide.png";
document.getElementById("hide3").src="images/hide.png";
document.getElementById("hide4").src="images/hide.png";
document.getElementById("hide5").src="images/hide.png";
document.getElementById("hide6").src="images/hide.png";
document.getElementById("heart2").style.display="block";
document.getElementById("heart3").style.display="block";
document.getElementById("heart1").style.display="block";
document.getElementById("reload").style.display = "none";
document.getElementById("heart4").style.display="block";
document.getElementById("heart5").style.display="block";

fail = 99;
console.log(random +  " test2 ");
};


function imageChanger7(){
  if ( random === 16){
    reiner.play();
    $(`body`).css(`background-image`, `url(images/bg-img.png)`);
document.getElementById("hide7").src= "images/reiner.png";

setTimeout(function(){

document.getElementById("btn3").style.display="block";

},3000);


fail = -1;

} else if ( random === 25) {document.getElementById("text").innerHTML=" U Have Found Reiner";
document.getElementById("text").style.left ="780px";
  $(`body`).css(`background-image`, `url(images/found.png)`);
  reiner.play();
  document.getElementById("reload").innerHTML= " Refresh ";
    document.getElementById("reload").style.display = "block";

  fail = -1;
  document.getElementById("hide7").src= "images/reiner.png";
}
  else if ( fail === 100){
      document.getElementById("hide7").src= "images/not-found.png";
    hit.play();
    document.getElementById("heart4").style.display="none";



  }else if ( fail ===103){
    hit.play();
    document.getElementById("hide7").src= "images/not-found.png";
   document.getElementById("heart1").style.display="none";
   document.getElementById("reload").innerHTML= " U FAILED ";
random= -1;
  document.getElementById("reload").style.display = "block";
     $(`body`).css(`background-image`, `url(images/bg2.png)`);
  }
  else if ( fail ===101){
    hit.play();
    document.getElementById("hide7").src= "images/not-found.png";
    $(`body`).css(`background-image`, `url(images/bg3.png)`);
   document.getElementById("heart3").style.display="none";
  }
  else if ( fail ===102){
      document.getElementById("hide7").src= "images/not-found.png";
    hit.play();
    document.getElementById("heart2").style.display="none";



  }else if ( fail ===99){
      document.getElementById("hide7").src= "images/not-found.png";
    hit.play();
document.getElementById("heart5").style.display="none";
    $(`body`).css(`background-image`, `url(images/bg4.png)`);
  }

  fail++;

};


function imageChanger8(){

  if ( random === 17){
    reiner.play();
    $(`body`).css(`background-image`, `url(images/bg-img.png)`);
    document.getElementById("hide8").src= "images/reiner.png";

    setTimeout(function(){

    document.getElementById("btn3").style.display="block";

    },3000);

    fail = -1;
  } else if ( random === 26){
    document.getElementById("text").innerHTML=" U Have Found Reiner"
    document.getElementById("text").style.left ="780px";
    $(`body`).css(`background-image`, `url(images/found.png)`);
    reiner.play();
      document.getElementById("reload").style.display = "block";

      document.getElementById("reload").innerHTML= " Refresh ";

    document.getElementById("hide8").src= "images/reiner.png";
    fail = -1;
  }
  else if ( fail === 100){
      document.getElementById("hide8").src= "images/not-found.png";
    hit.play();
    document.getElementById("heart4").style.display="none";



  }
  else if ( fail ===103){
    hit.play();
      document.getElementById("hide8").src= "images/not-found.png";
   document.getElementById("heart1").style.display="none";
   document.getElementById("reload").innerHTML= " U FAILED ";
   random= -1;

  document.getElementById("reload").style.display = "block";
     $(`body`).css(`background-image`, `url(images/bg2.png)`);
  }
  else if ( fail ===101){
    hit.play();
    $(`body`).css(`background-image`, `url(images/bg3.png)`);
      document.getElementById("hide8").src= "images/not-found.png";
   document.getElementById("heart3").style.display="none";
  }
  else if ( fail ===102){
      document.getElementById("hide8").src= "images/not-found.png";
    hit.play();
    document.getElementById("heart2").style.display="none";


  }else if ( fail ===99){
      document.getElementById("hide8").src= "images/not-found.png";
    hit.play();
document.getElementById("heart5").style.display="none";
    $(`body`).css(`background-image`, `url(images/bg4.png)`);
  }

  fail++;
};



function imageChanger9(){
if(random === 18){
reiner.play();
  $(`body`).css(`background-image`, `url(images/bg-img.png)`);
  document.getElementById("hide9").src= "images/reiner.png";


  setTimeout(function(){

  document.getElementById("btn3").style.display="block";

  },3000);


  fail = -1;
}
else if ( fail === 100){
    document.getElementById("hide9").src= "images/not-found.png";
  hit.play();
  document.getElementById("heart4").style.display="none";
  $(`body`).css(`background-image`, `url(images/bg-img.png)`);


  $(`body`).css(`background-image`, `url(images/bg3.png)`);
} else if (random === 27){
  document.getElementById("text").innerHTML=" U Have Found Reiner"
  document.getElementById("text").style.left ="780px";
  $(`body`).css(`background-image`, `url(images/found.png)`);
  reiner.play();
    document.getElementById("reload").style.display = "block";

    document.getElementById("reload").innerHTML= "Refresh ";
  document.getElementById("hide9").src= "images/reiner.png";
}
else if ( fail ===103){
  hit.play();
  document.getElementById("hide9").src= "images/not-found.png";

 document.getElementById("heart1").style.display="none";
 document.getElementById("reload").innerHTML= " U FAILED ";
 random= -1;

document.getElementById("reload").style.display = "block";
   $(`body`).css(`background-image`, `url(images/bg2.png)`);
}
else if ( fail ===101){
  hit.play();
  document.getElementById("hide9").src= "images/not-found.png";
  $(`body`).css(`background-image`, `url(images/bg3.png)`);
 document.getElementById("heart3").style.display="none";
}
else if ( fail ===102){
    document.getElementById("hide9").src= "images/not-found.png";
  hit.play();
  document.getElementById("heart2").style.display="none";


}else if ( fail ===99){
    document.getElementById("hide9").src= "images/not-found.png";
  hit.play();
document.getElementById("heart5").style.display="none";
  $(`body`).css(`background-image`, `url(images/bg4.png)`);
}



fail++;

};


function button3(){
  random = 19 + Math.floor(Math.random()*11);
  fail = 99;
  document.getElementById("btn3").style.display="none";
  document.getElementById("hide10").style.display="block";
  document.getElementById("hide11").style.display="block";
  document.getElementById("hide1").src="images/hide.png";
  document.getElementById("hide2").src="images/hide.png";
  document.getElementById("hide3").src="images/hide.png";
  document.getElementById("hide4").src="images/hide.png";
  document.getElementById("hide5").src="images/hide.png";
  document.getElementById("hide6").src="images/hide.png";
  document.getElementById("hide7").src="images/hide.png";
  document.getElementById("hide8").src="images/hide.png";
  document.getElementById("hide9").src="images/hide.png";
  document.getElementById("reload").style.display = "none";
  document.getElementById("heart2").style.display="block";
  document.getElementById("heart3").style.display="block";
  document.getElementById("heart4").style.display="block";
  document.getElementById("heart5").style.display="block";

  console.log (random);
};

function imageChanger10(){
if ( random === 28){
  document.getElementById("text").innerHTML=" U Have Found Reiner"
  document.getElementById("text").style.left ="780px";
  $(`body`).css(`background-image`, `url(images/found.png)`);
  reiner.play();
  document.getElementById("reload").style.display= "block"
    document.getElementById("reload").innerHTML= "Refresh ";
  //$(`body`).css(`background-image`, `url(images/bg-img.png)`);
document.getElementById("hide10").src= "images/reiner.png";
fail = -1;
}else if ( fail === 100){

    document.getElementById("hide10").src= "images/not-found.png";
hit.play();
document.getElementById("heart4").style.display="none";



}else if ( fail ===103){
  hit.play();
  document.getElementById("hide10").src= "images/not-found.png";
 document.getElementById("heart1").style.display="none";
 document.getElementById("heart1").style.display="none";
 document.getElementById("reload").innerHTML= " U FAILED ";
 random= -1;

document.getElementById("reload").style.display = "block";
   $(`body`).css(`background-image`, `url(images/bg2.png)`);
}
else if ( fail ===101){
  hit.play();
  document.getElementById("hide10").src= "images/not-found.png";
 document.getElementById("heart3").style.display="none";
 $(`body`).css(`background-image`, `url(images/bg3.png)`);
}
else if ( fail ===102){
  document.getElementById("heart2").style.display="none";
  document.getElementById("hide10").src= "images/not-found.png";
  hit.play();



}else if ( fail ===99){
  document.getElementById("hide10").src= "images/not-found.png";
  hit.play();
document.getElementById("heart5").style.display="none";
  $(`body`).css(`background-image`, `url(images/bg4.png)`);
}
fail++;

};


function imageChanger11(){
  if (random === 29){document.getElementById("text").innerHTML=" U Have Found Reiner"
    reiner.play();
document.getElementById("text").style.left ="780px";
    document.getElementById("hide11").src = "images/reiner.png";
    fail = -1;
    document.getElementById("reload").style.display= "block"
    document.getElementById("reload").innerHTML= " Refresh ";
    $(`body`).css(`background-image`, `url(images/found.png)`);

  }else if ( fail === 100){
    document.getElementById("hide11").src= "images/not-found.png";
    hit.play();
    document.getElementById("heart4").style.display="none";


    $(`body`).css(`background-image`, `url(images/bg3.png)`);
  }else if ( fail ===103){
    hit.play();
   document.getElementById("heart1").style.display="none";
   document.getElementById("heart1").style.display="none";
   document.getElementById("reload").innerHTML= " U FAILED ";
   random= -1;

  document.getElementById("reload").style.display = "block";
     $(`body`).css(`background-image`, `url(images/bg2.png)`);
  }
  else if ( fail ===101){
    document.getElementById("hide11").src= "images/not-found.png";
     $(`body`).css(`background-image`, `url(images/bg3.png)`);
   document.getElementById("heart3").style.display="none";
   hit.play();
  }
  else if ( fail ===102){
      document.getElementById("heart2").style.display="none";
    document.getElementById("hide11").src= "images/not-found.png";
    hit.play();



  }else if ( fail ===99){
    document.getElementById("hide11").src= "images/not-found.png";
    hit.play();
document.getElementById("heart5").style.display="none";
    $(`body`).css(`background-image`, `url(images/bg4.png)`);
  }
  fail++
  console.log (fail + " last fail ");
};





function refresh(){
  reload = location.reload();
};
