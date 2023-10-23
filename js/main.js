var up = document.getElementById("up")
var scroll = document.getElementById("scroll")

window.onscroll = function(){
    if(window.scrollY >250){
        up.classList.add("headerShow")
        scroll.classList.add("showScroll")
    }else{
        up.classList.remove("headerShow")
        scroll.classList.remove("showScroll")
    }
}