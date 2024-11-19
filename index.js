let menu_open_btn = document.getElementById("menu_open_btn");
let body = document.getElementById("body");
let mobile_web = document.getElementById("mobile_web");

menu_open_btn.onclick = function(){
    body.style.backgroundColor = "rgba(0, 0, 0, 0.400)"
    
    document.getElementById("menu").style.transform = "translateX(0px)"
}

document.getElementById("menu_close_btn").onclick = function(){
    document.getElementById("menu").style.transform = "translateX(400px)";
    body.style.backgroundColor = "transparent"
}


