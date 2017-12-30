function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function p1uncover(){
    document.getElementById("p1").style.backgroundImage = "url(images/penguin_1.png)";
    document.getElementById('p1').id = 'p1-clicked';
}

function p1hover(){
    document.getElementById("p1").style.backgroundImage = "url(images/mound_1_hover.png)";
}

function p1out(){
    document.getElementById("p1").style.backgroundImage = "url(images/mound_1.png)";
}


function p2uncover(){
    document.getElementById("p2").style.backgroundImage = "url(images/penguin_2.png)";
    document.getElementById('p2').id = 'p2-clicked';
}

function p2hover(){
    document.getElementById("p2").style.backgroundImage = "url(images/mound_2_hover.png)";
}

function p2out(){
    document.getElementById("p2").style.backgroundImage = "url(images/mound_2.png)";
}

function p3uncover(){
    document.getElementById("p3").style.backgroundImage = "url(images/penguin_3.png)";
    document.getElementById('p3').id = 'p3-clicked';
}

function p3hover(){
    document.getElementById("p3").style.backgroundImage = "url(images/mound_3_hover.png)";
}

function p3out(){
    document.getElementById("p3").style.backgroundImage = "url(images/mound_3.png)";
}

function p4uncover(){
    document.getElementById("p4").style.backgroundImage = "url(images/penguin_4.png)";
    document.getElementById('p4').id = 'p4-clicked';
}

function p4hover(){
    document.getElementById("p4").style.backgroundImage = "url(images/mound_4_hover.png)";
}

function p4out(){
    document.getElementById("p4").style.backgroundImage = "url(images/mound_4.png)";
}

function p5uncover(){
    document.getElementById("p5").style.backgroundImage = "url(images/penguin_5.png)";
    document.getElementById('p5').id = 'p5-clicked';
}

function p5hover(){
    document.getElementById("p5").style.backgroundImage = "url(images/mound_5_hover.png)";
}

function p5out(){
    document.getElementById("p5").style.backgroundImage = "url(images/mound_5.png)";
}

function p6uncover(){
    document.getElementById("p6").style.backgroundImage = "url(images/penguin_6.png)";
    document.getElementById('p6').id = 'p6-clicked';
}

function p6hover(){
    document.getElementById("p6").style.backgroundImage = "url(images/mound_6_hover.png)";
}

function p6out(){
    document.getElementById("p6").style.backgroundImage = "url(images/mound_6.png)";
}

function p7uncover(){
    document.getElementById("p7").style.backgroundImage = "url(images/penguin_7.png)";
    document.getElementById('p7').id = 'p7-clicked';
}

function p7hover(){
    document.getElementById("p7").style.backgroundImage = "url(images/mound_7_hover.png)";
}

function p7out(){
    document.getElementById("p7").style.backgroundImage = "url(images/mound_7.png)";
}

function p8uncover(){
    document.getElementById("p8").style.backgroundImage = "url(images/penguin_8.png)";
    document.getElementById('p8').id = 'p8-clicked';
}

function p8hover(){
    document.getElementById("p8").style.backgroundImage = "url(images/mound_8_hover.png)";
}

function p8out(){
    document.getElementById("p8").style.backgroundImage = "url(images/mound_8.png)";
}

function yetiuncover(){
    document.getElementById("yeti").style.backgroundImage = "url(images/yeti.png)";
    document.getElementById('yeti').id = 'yeti-clicked';
    
    setTimeout(function() {
  	    alert("YARRRRRRRR!!!!!");
  	    info();
    },500)
    
    
    
}

function yetihover(){
    document.getElementById("yeti").style.backgroundImage = "url(images/mound_9_hover.png)";
}

function yetiout(){
    document.getElementById("yeti").style.backgroundImage = "url(images/mound_9.png)";
}


function info() {
    var natgeo = confirm("Yetis aren't real, so they aren't a danger to penguins. But climate change is. Click 'OK' to learn more about how climate change is threatening Penguins very existence.")
    
    if(natgeo==true){
        open("https://news.nationalgeographic.com/2016/06/adelie-penguins-antarctica-climate-change-population-decline-refugia/");    
    }
    
}