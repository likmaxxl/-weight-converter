var box=document.getElementsByClassName('box');
var val=document.getElementsByClassName('val');
var unesi=document.getElementById('unesi');

unesi.addEventListener('input', function(e) {
var pounds=e.target.value
  if(pounds==0){
    for(var x=0; x<box.length; x++){
        box[x].style.display="none";
    }


  }else{
    for(var x=0; x<box.length; x++){
        box[x].style.display="block";
    }

    console.log(pounds);
    var grams=pounds*453.59237 ;
    var kGrams=pounds*0.45359237;
    var once=pounds*16;
    val[0].innerHTML=grams
    val[1].innerHTML=kGrams
    val[2].innerHTML=once;
  }


});
