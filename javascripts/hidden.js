function hidden() {

    var lis = document.getElementById("menu").getElementsByTagName("li");

    var divs = document.querySelectorAll("div .section");
 

  for (var i = 0; i < lis.length; i++) {
        lis[i].id = i;
   /*     lis[i].onclick = function() {
            for (var j = 0; j < divs.length; j++) {
                console.log(j);
                lis[j].className = "";
                divs[j].style.display = "none";
            };
            this.className = "select";
            divs[this.id].style.display = "block";
        }*/
   lis[i].addEventListener("click",function(){

          for (var j = 0; j < divs.length; j++) {
              /*console.log(j);*/
              lis[j].className = "";
              divs[j].style.display = "none";
          };
           this.className = "select";
          divs[this.id].style.display = "block";
      })
    }
}
