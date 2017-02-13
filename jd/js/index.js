window.onload=function(){
  /*topleft开始*/
b=top_left1();
b=top_left2();
b=top_leftwt1();
b=top_leftwt2();
b=top_leftct1();
b=top_leftct2();
top_left();
place();
/*topleft结束*/
/*myjd开始*/

c=myjd1();
c=myjd2();
c=myjdwt1();
c=myjdwt2();
c=myjdct1();
c=myjdct2();
myjd();

/*myjdend*/
/*phonejd开始*/

d=phonejd1();
d=phonejd2();
d=phonejdwt1();
d=phonejdwt2();
d=phonejdct1();
d=phonejdct2();
phonejd();

/*phonejd end*/
/*focusjd开始*/

e=focusjd1();
e=focusjd2();
e=focusjdwt1();
e=focusjdwt2();

e=focusjdct1();
e=focusjdct2();
focusjd();

/*focusjd end*/

/*servejd开始*/
f=servejd1();
f=servejd2();
f=servejdwt1();
f=servejdwt2();

f=servejdct1();
f=servejdct2();
servejd();

/*servejd开始*/

/*navjd开始*/
g=navjd1();
g=navjd2();
g=navjdwt1();
g=navjdwt2();

g=navjdct1();
g=navjdct2();
navjd();

/*navjd开始*/

/*car开始*/
h=car1();
h=car2();
h=carwt1();

h=carwt2();
h=carct1();
h=carct2();
car();


/*car开始*/

lefttop();

bottom();

bubu();
setInterval("auto()",2000);
setInterval("lf()",2);
onef();

dapaiwt();
dapaia();
loudao();

}



/*topleft开始*/

var b;

function top_left(){	
$(".top_left").mouseover(function(){
$(".top_left").addClass("top_leftcg");
$(".top_left").find("img").attr("src","images/shangbiaoqian.png");
$(".top_leftwt").css("display","block");
$(".top_leftct").css("display","block");
});

 $(".top_left").mouseout(function(){
        setTimeout("top_leftjudge()",5);          
 });   
}

function top_left1(){
$(".top_left").mouseover(function(){
$(".top_left").addClass("top_leftcg");
$(".top_left").find("img").attr("src","images/shangbiaoqian.png");
$(".top_leftwt").css("display","block");
$(".top_leftct").css("display","block");
b=1;return b;
 
});
}
function top_left2(){
 $(".top_left").mouseout(function(){
    b=0;return b;
  });

}

 function top_leftjudge(){

if (b!=1) {
          $(".top_left").removeClass("top_leftcg");
$(".top_left").find("img").attr("src","images/xiabiaoqian.png");
$(".top_leftwt").css("display","none");
$(".top_leftct").css("display","none"); 

        };
  
}

function top_leftwt1(){
 $(".top_leftwt").mouseover(function(){
$(".top_left").addClass("top_leftcg");
$(".top_left").find("img").attr("src","images/shangbiaoqian.png");
$(".top_leftwt").css("display","block");
$(".top_leftct").css("display","block");
b=1;return b;
});
}

function top_leftwt2(){
 $(".top_leftwt").mouseout(function(){ 
$(".top_left").removeClass("top_leftcg");
$(".top_left").find("img").attr("src","images/xiabiaoqian.png");
$(".top_leftwt").css("display","none");
$(".top_leftct").css("display","none");
b=0;return b;
          });


}

function top_leftct1(){
$(".top_leftct").mouseover(function(){
$(".top_left").addClass("top_leftcg");
$(".top_left").find("img").attr("src","images/shangbiaoqian.png");
$(".top_leftwt").css("display","block");
$(".top_leftct").css("display","block");
b=1;return b;
 
});

 }
function top_leftct2(){
 $(".top_leftct").mouseout(function(){ 
$(".top_left").removeClass("top_leftcg");
$(".top_left").find("img").attr("src","images/xiabiaoqian.png");
$(".top_leftwt").css("display","none");
$(".top_leftct").css("display","none");
b=0;return b;
          });


}

var place=function(){
  var b=document.getElementsByClassName('didian');
  for (var i = 0; i < b.length; i++) {
   /* b[i].onmouseover=function(){
      
      this.style.backgroundColor="#f1f1f1";
      this.style.color="#c81623";
     
    }
     b[i].onmouseout=function(){
      this.style.backgroundColor="white";
      this.style.color="#666";
     }*/

    b[i].onclick=function(){
       var d=document.getElementsByClassName('didian');
     for (var i = 0; i < b.length; i++) {
     d[i].style.backgroundColor="white";
     d[i].style.color="#666";
      }
      this.style.backgroundColor="#b1191a";
      this.style.color="white";
      var c=this.innerHTML;
      pla.innerHTML=c;
    }
    
  }

}
  
/*top_left开始*/


	var c;

function myjd(){  
  $(".myjd").mouseover(function(){
  $(".myjd").addClass("myjdcg");
  $(".myjd").find("img").attr("src","images/shangbiaoqian.png");
  $(".myjdwt").css("display","block");
  $(".myjdct").css("display","block");
});

   $(".myjd").mouseout(function(){
          setTimeout("myjdjudge()",5);          
   });   
}

function myjd1(){
  $(".myjd").mouseover(function(){
  $(".myjd").addClass("myjdcg");
  $(".myjd").find("img").attr("src","images/shangbiaoqian.png");
  $(".myjdwt").css("display","block");
  $(".myjdct").css("display","block");
  c=1;return c;
   
});
}
function myjd2(){
   $(".myjd").mouseout(function(){
      c=0;return c;
    });

}

   function myjdjudge(){

if (c!=1) {
            $(".myjd").removeClass("myjdcg");
  $(".myjd").find("img").attr("src","images/xiabiaoqian.png");
  $(".myjdwt").css("display","none");
  $(".myjdct").css("display","none"); 

          };
    
}

function myjdwt1(){
   $(".myjdwt").mouseover(function(){
  $(".myjd").addClass("myjdcg");
  $(".myjd").find("img").attr("src","images/shangbiaoqian.png");
  $(".myjdwt").css("display","block");
  $(".myjdct").css("display","block");
  c=1;return c;
});
}
function myjdwt2(){
   $(".myjdwt").mouseout(function(){ 
  $(".myjd").removeClass("myjdcg");
  $(".myjd").find("img").attr("src","images/xiabiaoqian.png");
  $(".myjdwt").css("display","none");
  $(".myjdct").css("display","none");
  c=0;return c;
            });


}

function myjdct1(){
  $(".myjdct").mouseover(function(){
  $(".myjd").addClass("myjdcg");
  $(".myjd").find("img").attr("src","images/shangbiaoqian.png");
  $(".myjdwt").css("display","block");
  $(".myjdct").css("display","block");
  c=1;return c;
   
});
  
   }
function myjdct2(){
   $(".myjdct").mouseout(function(){ 
  $(".myjd").removeClass("myjdcg");
  $(".myjd").find("img").attr("src","images/xiabiaoqian.png");
  $(".myjdwt").css("display","none");
  $(".myjdct").css("display","none");
  c=0;return c;
            });


}
/*myjd end*/   



/*phonejd begin*/   

var d;

function phonejd(){  
  $(".phonejd").mouseover(function(){
  $(".phonejd").addClass("phonejdcg");
  $(".phonejd").find("img").attr("src","images/shangbiaoqian.png");
  $(".phonejdwt").css("display","block");
  $(".phonejdct").css("display","block");
});

   $(".phonejd").mouseout(function(){
          setTimeout("phonejdjudge()",5);          
   });   
}

function phonejd1(){
  $(".phonejd").mouseover(function(){
  $(".phonejd").addClass("phonejdcg");
  $(".phonejd").find("img").attr("src","images/shangbiaoqian.png");
  $(".phonejdwt").css("display","block");
  $(".phonejdct").css("display","block");
  d=1;return d;
   
});
}
function phonejd2(){
   $(".phonejd").mouseout(function(){
      d=0;return d;
    });

}

   function phonejdjudge(){

if (d!=1) {
            $(".phonejd").removeClass("phonejdcg");
  $(".phonejd").find("img").attr("src","images/xiabiaoqian.png");
  $(".phonejdwt").css("display","none");
  $(".phonejdct").css("display","none"); 

          };
    
}

function phonejdwt1(){
   $(".phonejdwt").mouseover(function(){
  $(".phonejd").addClass("phonejdcg");
  $(".phonejd").find("img").attr("src","images/shangbiaoqian.png");
  $(".phonejdwt").css("display","block");
  $(".phonejdct").css("display","block");
  d=1;return d;
});
}
function phonejdwt2(){
   $(".phonejdwt").mouseout(function(){ 
  $(".phonejd").removeClass("phonejdcg");
  $(".phonejd").find("img").attr("src","images/xiabiaoqian.png");
  $(".phonejdwt").css("display","none");
  $(".phonejdct").css("display","none");
  d=0;return d;
            });


}
function phonejdct1(){
  $(".phonejdct").mouseover(function(){
  $(".phonejd").addClass("phonejdcg");
  $(".phonejd").find("img").attr("src","images/shangbiaoqian.png");
  $(".phonejdwt").css("display","block");
  $(".phonejdct").css("display","block");
  d=1;return d;
   
});
  
   }
function phonejdct2(){
   $(".phonejdct").mouseout(function(){ 
  $(".phonejd").removeClass("phonejdcg");
  $(".phonejd").find("img").attr("src","images/xiabiaoqian.png");
  $(".phonejdwt").css("display","none");
  $(".phonejdct").css("display","none");
  d=0;return d;
            });


}
/*phonejd end*/   


/*focusjd begin*/   

var e;

function focusjd(){  
  $(".focusjd").mouseover(function(){
  $(".focusjd").addClass("focusjdcg");
  $(".focusjd").find("img").attr("src","images/shangbiaoqian.png");
  $(".focusjdwt").css("display","block");
  $(".focusjdct").css("display","block");
});

   $(".focusjd").mouseout(function(){
          setTimeout("focusjdjudge()",5);          
   });   
}

function focusjd1(){
  $(".focusjd").mouseover(function(){
  $(".focusjd").addClass("focusjdcg");
  $(".focusjd").find("img").attr("src","images/shangbiaoqian.png");
  $(".focusjdwt").css("display","block");
  $(".focusjdct").css("display","block");
  e=1;return e;
   
});
}
function focusjd2(){
   $(".focusjd").mouseout(function(){
      e=0;return e;
    });

}

   function focusjdjudge(){

if (e!=1) {
            $(".focusjd").removeClass("focusjdcg");
  $(".focusjd").find("img").attr("src","images/xiabiaoqian.png");
  $(".focusjdwt").css("display","none");
  $(".focusjdct").css("display","none"); 

          };
    
}

function focusjdwt1(){
   $(".focusjdwt").mouseover(function(){
  $(".focusjd").addClass("focusjdcg");
  $(".focusjd").find("img").attr("src","images/shangbiaoqian.png");
  $(".focusjdwt").css("display","block");
  $(".focusjdct").css("display","block");
  e=1;return e;
});
}

function focusjdwt2(){
   $(".focusjdwt").mouseout(function(){ 
  $(".focusjd").removeClass("focusjdcg");
  $(".focusjd").find("img").attr("src","images/xiabiaoqian.png");
  $(".focusjdwt").css("display","none");
  $(".focusjdct").css("display","none");
  e=0;return e;
            });


}
function focusjdct1(){
  $(".focusjdct").mouseover(function(){
  $(".focusjd").addClass("focusjdcg");
  $(".focusjd").find("img").attr("src","images/shangbiaoqian.png");
  $(".focusjdwt").css("display","block");
  $(".focusjdct").css("display","block");
  e=1;return e;
   
});
  
   }
function focusjdct2(){
   $(".focusjdct").mouseout(function(){ 
  $(".focusjd").removeClass("focusjdcg");
  $(".focusjd").find("img").attr("src","images/xiabiaoqian.png");
  $(".focusjdwt").css("display","none");
  $(".focusjdct").css("display","none");
  e=0;return e;
            });


}
/*focusjd end*/   



/*servejd begin*/   

var f;

function servejd(){  
  $(".servejd").mouseover(function(){
  $(".servejd").addClass("servejdcg");
  $(".servejd").find("img").attr("src","images/shangbiaoqian.png");
  $(".servejdwt").css("display","block");
  $(".servejdct").css("display","block");
});

   $(".servejd").mouseout(function(){
          setTimeout("servejdjudge()",5);          
   });   
}

function servejd1(){
  $(".servejd").mouseover(function(){
  $(".servejd").addClass("servejdcg");
  $(".servejd").find("img").attr("src","images/shangbiaoqian.png");
  $(".servejdwt").css("display","block");
  $(".servejdct").css("display","block");
  f=1;return f;
   
});
}
function servejd2(){
   $(".servejd").mouseout(function(){
      f=0;return f;
    });

}

   function servejdjudge(){

if (f!=1) {
            $(".servejd").removeClass("servejdcg");
  $(".servejd").find("img").attr("src","images/xiabiaoqian.png");
  $(".servejdwt").css("display","none");
  $(".servejdct").css("display","none"); 

          };
    
}

function servejdwt1(){
   $(".servejdwt").mouseover(function(){
  $(".servejd").addClass("servejdcg");
  $(".servejd").find("img").attr("src","images/shangbiaoqian.png");
  $(".servejdwt").css("display","block");
  $(".servejdct").css("display","block");
  f=1;return f;
});
}
function servejdwt2(){
   $(".servejdwt").mouseout(function(){ 
  $(".servejd").removeClass("servejdcg");
  $(".servejd").find("img").attr("src","images/xiabiaoqian.png");
  $(".servejdwt").css("display","none");
  $(".servejdct").css("display","none");
  f=0;return f;
            });


}
function servejdct1(){
  $(".servejdct").mouseover(function(){
  $(".servejd").addClass("servejdcg");
  $(".servejd").find("img").attr("src","images/shangbiaoqian.png");
  $(".servejdwt").css("display","block");
  $(".servejdct").css("display","block");
  f=1;return f;
   
});
  
   }
function servejdct2(){
   $(".servejdct").mouseout(function(){ 
  $(".servejd").removeClass("servejdcg");
  $(".servejd").find("img").attr("src","images/xiabiaoqian.png");
  $(".servejdwt").css("display","none");
  $(".servejdct").css("display","none");
  f=0;return f;
            });


}

/*servejd end*/   
/*car begin*/   

var h;

function car(){  
  $(".car").mouseover(function(){
  $(".car").addClass("carcg");
  
  $(".carwt").css("display","block");
  $(".carct").css("display","block");
});

   $(".car").mouseout(function(){
          setTimeout("carjudge()",5);          
   });   
}

function car1(){
  $(".car").mouseover(function(){
  $(".car").addClass("carcg");
  
  $(".carwt").css("display","block");
  $(".carct").css("display","block");
  h=1;return h;
   
});
}
function car2(){
   $(".car").mouseout(function(){
      h=0;return h;
    });

}

   function carjudge(){

if (h!=1) {
            $(".car").removeClass("carcg");
  
  $(".carwt").css("display","none");
  $(".carct").css("display","none"); 

          };
    
}

function carwt1(){
   $(".carwt").mouseover(function(){
  $(".car").addClass("carcg");
  
  $(".carwt").css("display","block");
  $(".carct").css("display","block");
  h=1;return h;
});
}
function carwt2(){
   $(".carwt").mouseout(function(){ 
  $(".car").removeClass("carcg");
  
  $(".carwt").css("display","none");
  $(".carct").css("display","none");
  h=0;return h;
            } );
 }

function carct1(){
  $(".carct").mouseover(function(){
  $(".car").addClass("carcg");
  
  $(".carwt").css("display","block");
  $(".carct").css("display","block");
  h=1;return h;
   
});
  
   }
function carct2(){
   $(".carct").mouseout(function(){ 
  $(".car").removeClass("carcg");
  
  $(".carwt").css("display","none");
  $(".carct").css("display","none");
  h=0;return h;
            });


}

/*car end*/   

/*navjd begin*/   

var g;

function navjd(){  
  $(".navjd").mouseover(function(){
  $(".navjd").addClass("navjdcg");
  $(".navjd").find("img").attr("src","images/shangbiaoqian.png");
  $(".navjdwt").css("display","block");
  $(".navjdct").css("display","block");
});

   $(".navjd").mouseout(function(){
          setTimeout("navjdjudge()",5);          
   });   
}

function navjd1(){
  $(".navjd").mouseover(function(){
  $(".navjd").addClass("navjdcg");
  $(".navjd").find("img").attr("src","images/shangbiaoqian.png");
  $(".navjdwt").css("display","block");
  $(".navjdct").css("display","block");
  g=1;return g;
   
});
}
function navjd2(){
   $(".navjd").mouseout(function(){
      g=0;return g;
    });

}

   function navjdjudge(){

if (g!=1) {
            $(".navjd").removeClass("navjdcg");
  $(".navjd").find("img").attr("src","images/xiabiaoqian.png");
  $(".navjdwt").css("display","none");
  $(".navjdct").css("display","none"); 

          };
    
}

function navjdwt1(){
   $(".navjdwt").mouseover(function(){
  $(".navjd").addClass("navjdcg");
  $(".navjd").find("img").attr("src","images/shangbiaoqian.png");
  $(".navjdwt").css("display","block");
  $(".navjdct").css("display","block");
  g=1;return g;
});
}
function navjdwt2(){
   $(".navjdwt").mouseout(function(){ 
  $(".navjd").removeClass("navjdcg");
  $(".navjd").find("img").attr("src","images/xiabiaoqian.png");
  $(".navjdwt").css("display","none");
  $(".navjdct").css("display","none");
  g=0;return g;
            });


}
function navjdct1(){
  $(".navjdct").mouseover(function(){
  $(".navjd").addClass("navjdcg");
  $(".navjd").find("img").attr("src","images/shangbiaoqian.png");
  $(".navjdwt").css("display","block");
  $(".navjdct").css("display","block");
  g=1;return g;
   
});
  
   }
function navjdct2(){
   $(".navjdct").mouseout(function(){ 
  $(".navjd").removeClass("navjdcg");
  $(".navjd").find("img").attr("src","images/xiabiaoqian.png");
  $(".navjdwt").css("display","none");
  $(".navjdct").css("display","none");
  g=0;return g;
            });


}

/*navjd end*/   

/*leftnav begin*/
function lefttop(){
  var Lis = document.getElementsByClassName("linav");
            for (i = 0; i < Lis.length; i++) {
                
                Lis[i].onmouseover = function () {
                    this.className = "lihover";

                    
                }

                Lis[i].onmouseout = function () {
                    this.className = "linav";
                }
            }
}





/*leftnav end*/   
function bottom(){  


$(".bottomall").mouseover(function(){
$(".clickcgrt").css("display","block");
$(".clickcglf").css("display","block");
});

$(".bottomall").mouseout(function(){
$(".clickcgrt").css("display","none");
$(".clickcglf").css("display","none");
});


var i=1;
$(".clickcgrt").click(function(){
  i++;if (i==4) {i=1;}; 
  var b="images/bottom"+i+".png";
$(".bottomimg").attr("src",b);   
    
});

$(".clickcglf").click(function(){
  i--;if (i==0) {i=3;}; 
    var b="images/bottom"+i+".png";
$(".bottomimg").attr("src",b);
   
    
});


$(".nextone").mouseover(function(){
$(".nextone").attr("src","images/nextone2.png");
}  );

$(".nextone").mouseout(function(){
$(".nextone").attr("src","images/nextone1.png");
}  );

var j=1;
$(".nextone").click(function(){
var z;var x;var y;var w; var v;var u;
z="<div class='guesssubeq'><img src='images/subiao.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/yundongbiao.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/dianshuihu.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/wan.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/wan.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/diaoyugang.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"
x="<div class='guesssubeq'><img src='images/yundongbiao.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/subiao.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/yundongbiao.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/diaoyugang.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/dianshuihu.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/yundongbiao.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"
y="<div class='guesssubeq'><img src='images/dianshuihu.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/diaoyugang.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/dianshuihu.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/diaoyugang.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/dianshuihu.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/diaoyugang.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"
w="<div class='guesssubeq'><img src='images/diaoyugang.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/diaoyugang.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/dianshuihu.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/diaoyugang.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/dianshuihu.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"+
                    "<div class='guesssubeq'><img src='images/diaoyugang.png'><br><li><a href=''>"+
                    "奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a><span>￥59.90</span></li></div>"
u="<div class=\"guesssubeq\"><img src=\"images/dianshuihu.png\"><br><li><a href=\"\">奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a>"+
        "<span>￥59.90</span></li>  </div>    <div class=\"guesssubeq\">        <img src=\"images/subiao.png\"><br>"+
               " <li><a href=\"\">zedo/掌道R90车载电子<br>安全预警仪测速狗固定</a>        <span>￥59.90</span></li>  "+      
    "</div>    <div class=\"guesssubeq\">        <img src=\"images/wan.png\"><br><li><a href=\"\">万毅陶瓷碗&nbsp卡通系列开<br>心欢乐猪5寸米饭碗6只</a>"+
        "<span>￥59.90</span></li>      </div>    <div class=\"guesssubeq\">        <img src=\"images/dianshuihu.png\"><br>"+
        "<li><a href=\"\">奔腾（POVOS）<br>PK1598T 电水壶 &nbsp;银色 </a>        <span>￥59.90</span></li>         </div>"+
    "<div class=\"guesssubeq\">        <img src=\"images/subiao.png\"><br>        <li><a href=\"\">zedo/掌道R90车载电子<br>安全预警仪测速狗固定</a>"+
       " <span>￥59.90</span></li>         </div>    <div class=\"guesssubeq\">        <img src=\"images/wan.png\"><br>"+
        "<li><a href=\"\">万毅陶瓷碗&nbsp卡通系列开<br>心欢乐猪5寸米饭碗6只</a>        <span>￥59.90</span></li>           </div>"
  j++;
  switch(j){
    case 2:v=z;break;
    case 3:v=x;break;
    case 4:v=y;break;
    case 5:v=w;break;
    case 6:v=u;j=1;break;    
    default:break;

  }                   

$(".guesssub").html(v);
        
}  );


}

function onef(){
  var $One=$(".onefli");

  for (var i = 0; i < 9; i++) {
    $One.eq(i).mouseover(function(){
      $One.removeClass("oneflicg");
      $(this).removeClass("onefli").addClass("oneflicg"); 
         $One.find(".dapai").css("display","none") ; 
          $(this).find(".dapai").css("display","block") ;              
  });
  $One.eq(i).mouseout(function(){
         $One.removeClass("oneflicg");
         $(this).addClass("oneflicg").addClass("onefli"); 
                     
  });
}

}

function dapaia(){
  $(".onefli").eq(0).removeClass("onefli").addClass("oneflicg");
}




function dapaiwt(){

  var $One=$(".dapaiwt");
  for (var i = 0; i < $One.length; i++) {
  var a=$One.eq(i).parent(".onefli").innerWidth();
   $One.eq(i).width(a);
       };
  

}

var loudao=function(){

  var $One=$(".lf").find("ul");
 
  $One.eq(0).mouseover(function(){
 $One.eq(0).text("服饰");
  dd=0;
   $One.eq(0).css({"background-color":"#c81623","font-size":"12px","color":"white",});
      });

$One.eq(0).mouseout(function(){
 $One.eq(0).text("1F");
  dd=1;
   $One.eq(0).css({"background-color":"white","font-size":"17px","color":"#666"});
      });

 $One.eq(1).mouseover(function(){
 $One.eq(1).text("美妆");
  dd=0;
   $One.eq(1).css({"background-color":"#c81623","font-size":"12px","color":"white",});
      });

$One.eq(1).mouseout(function(){
 $One.eq(1).text("2F");
  dd=1;
   $One.eq(1).css({"background-color":"white","font-size":"17px","color":"#666"});
  
});

   $One.eq(2).mouseover(function(){
 $One.eq(2).text("手机");
  dd=0;
   $One.eq(2).css({"background-color":"#c81623","font-size":"12px","color":"white",});
      });

$One.eq(2).mouseout(function(){
 $One.eq(2).text("3F");
  dd=1;
   $One.eq(2).css({"background-color":"white","font-size":"17px","color":"#666"});
  
});  

$One.eq(3).mouseover(function(){
 $One.eq(3).text("家电");
  dd=0;
   $One.eq(3).css({"background-color":"#c81623","font-size":"12px","color":"white",});
      });

$One.eq(3).mouseout(function(){
 $One.eq(3).text("4F");
  dd=1;
   $One.eq(3).css({"background-color":"white","font-size":"17px","color":"#666"});
  
});  
       
       $One.eq(4).mouseover(function(){
 $One.eq(4).text("数码");
  dd=0;
   $One.eq(4).css({"background-color":"#c81623","font-size":"12px","color":"white",});
      });

$One.eq(4).mouseout(function(){
 $One.eq(4).text("5F");
  dd=1;
   $One.eq(4).css({"background-color":"white","font-size":"17px","color":"#666"});
  
});  
 
  
 
$One.eq(0).click(function(){

  var b=$(".onef").offset().top;
 $(window).scrollTop(b);
  
   
  
});  

 
$One.eq(1).click(function(){
  
 $(window).scrollTop(2540);   
});  

$One.eq(2).click(function(){
 $(window).scrollTop(3137);      
}); 

$One.eq(3).click(function(){
 $(window).scrollTop(3746);      
}); 

$One.eq(4).click(function(){
 $(window).scrollTop(4346);      
}); 









       
}

var dd=1;


function lf(){
  
  var ll=$(window).scrollTop();
  
  if(ll>1069){
    
  $(".lf").css("display","block");
}else{
  $(".lf").css("display","none");
}

if (dd==1) {
var $One=$(".lf").find("ul");
  
if ((1069<ll)&&(ll<2300))
  {
    $One.eq(0).text("1F"); 
     $One.eq(1).text("2F"); 
     $One.eq(2).text("3F"); 
     $One.eq(3).text("4F"); 
     $One.eq(4).text("5F"); 
   $One.css({"background-color":"white","font-size":"17px","color":"#666"});
    $One.eq(0).text("服饰");  
   $One.eq(0).css({"background-color":"white","font-size":"12px","color":"#c81623",});
  }
  else if ((2300<ll)&&(ll<2945)){   
    $One.eq(0).text("1F"); 
     $One.eq(1).text("2F"); 
     $One.eq(2).text("3F"); 
     $One.eq(3).text("4F"); 
     $One.eq(4).text("5F"); 
   $One.css({"background-color":"white","font-size":"17px","color":"#666"});
   $One.eq(1).text("美妆");  
   $One.eq(1).css({"background-color":"white","font-size":"12px","color":"#c81623",});
  
  }
else if ((2945<ll)&&(ll<3554))
  {
   $One.eq(0).text("1F"); 
     $One.eq(1).text("2F"); 
     $One.eq(2).text("3F"); 
     $One.eq(3).text("4F"); 
     $One.eq(4).text("5F"); 
   $One.css({"background-color":"white","font-size":"17px","color":"#666"});
   $One.eq(2).text("手机");  
   $One.eq(2).css({"background-color":"white","font-size":"12px","color":"#c81623",});

}
else if ((3554<ll)&&(ll<4146))
  {
   $One.eq(0).text("1F"); 
     $One.eq(1).text("2F"); 
     $One.eq(2).text("3F"); 
     $One.eq(3).text("4F"); 
     $One.eq(4).text("5F"); 
   $One.css({"background-color":"white","font-size":"17px","color":"#666"});
   $One.eq(3).text("家电");  
   $One.eq(3).css({"background-color":"white","font-size":"12px","color":"#c81623",});

}
else if ((4146<ll)&&(ll<4980))
  {
   $One.eq(0).text("1F"); 
     $One.eq(1).text("2F"); 
     $One.eq(2).text("3F"); 
     $One.eq(3).text("4F"); 
     $One.eq(4).text("5F"); 
   $One.css({"background-color":"white","font-size":"17px","color":"#666"});
   $One.eq(4).text("数码");  
   $One.eq(4).css({"background-color":"white","font-size":"12px","color":"#c81623",});

}
};
/*else if ((2300<ll)&&(ll<2300))
  {
  b=2;
  $One.eq(1).text("2");
  }
else
  {
    $One.eq(2).text("美妆");
  
   $One.eq(2).css({"font-size":"12px","color":"#c81623",});
  }
*/
}







function bubu(){
   /*焦点图开始*/
$(".try").mouseover(function(){
  $(".cli").css("display","block");
$(".click").css("display","block");
r=0;
  })

$(".try").mouseout(function(){
  $(".cli").css("display","none");
$(".click").css("display","none");
r=1;
  })


$(".bu1").mouseover(function(){
  $(".bu2").css("background-color","black");
$(".bu3").css("background-color","black");
$(".bu4").css("background-color","black");
$(".bu1").css("background-color","black");
$(".bu1").css("background-color","#c81623");
$(".img").find("img").attr("src","images/dapai1.jpg");
$(".cli").css("display","block");
$(".click").css("display","block");
s=1;
r=0;
})

$(".bu2").mouseover(function(){
  $(".bu2").css("background-color","black");
$(".bu3").css("background-color","black");
$(".bu4").css("background-color","black");
$(".bu1").css("background-color","black");
$(".bu2").css("background-color","#c81623");
$(".img").find("img").attr("src","images/dapai2.jpg");
$(".cli").css("display","block");
$(".click").css("display","block");
s=2;
r=0;
})

$(".bu3").mouseover(function(){
  $(".bu2").css("background-color","black");
$(".bu3").css("background-color","black");
$(".bu4").css("background-color","black");
$(".bu1").css("background-color","black");
$(".bu3").css("background-color","#c81623");
$(".img").find("img").attr("src","images/dapai3.jpg");
$(".cli").css("display","block");
$(".click").css("display","block");
s=3;
r=0;
})

$(".bu4").mouseover(function(){
  $(".bu2").css("background-color","black");
$(".bu3").css("background-color","black");
$(".bu4").css("background-color","black");
$(".bu1").css("background-color","black");
$(".bu4").css("background-color","#c81623");
$(".img").find("img").attr("src","images/dapai4.jpg");
$(".cli").css("display","block");
$(".click").css("display","block");
s=4;
r=0;
})

var s=1;

$(".click").click(function(){
if(s==4){ s=0;}
s++;
var b="images/dapai"+s+".jpg";
$(".img").find("img").attr("src",b);
$(".bu2").css("background-color","black");
$(".bu3").css("background-color","black");
$(".bu4").css("background-color","black");
$(".bu1").css("background-color","black");
var g=".bu"+s;
$(g).css("background-color","#c81623");
}  )



$(".cli").click(function(){
if(s==1){ s=5;}
s--;
var b="images/dapai"+s+".jpg";
$(".img").find("img").attr("src",b);
$(".img").find("img").attr("src",b);
$(".bu2").css("background-color","black");
$(".bu3").css("background-color","black");
$(".bu4").css("background-color","black");
$(".bu1").css("background-color","black");

var g=".bu"+s;
$(g).css("background-color","#c81623");

}  )

}

var r=1;
var s=1;
function auto(){
    if(r==1){
  if(s==4){ s=0;}
s++;
var b="images/dapai"+s+".jpg";
$(".img").find("img").attr("src",b);
$(".bu2").css("background-color","black");
$(".bu3").css("background-color","black");
$(".bu4").css("background-color","black");
$(".bu1").css("background-color","black");
var g=".bu"+s;
$(g).css("background-color","#c81623");
}
}




