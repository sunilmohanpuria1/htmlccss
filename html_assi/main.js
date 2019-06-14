function bindClose() {
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
    }
}
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }


function addItem()
{   
    var ul=document.getElementById("infoList");
    var info=document.getElementById("cardEntry");
    var li=document.createElement("li");
    li.setAttribute('id',info.value);
    li.appendChild(document.createTextNode(info.value));
    var x=document.createElement("span");
    x.className = "close";
    x.appendChild(document.createTextNode("X")); 
    li.appendChild(x);
    ul.appendChild(li); 
    bindClose();
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var li = this.parentElement;
    li.style.display = "none";
  }
}



