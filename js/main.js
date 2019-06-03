//获取网页中第一个h1标签对象
//let h1 = document.querySelector("h1");
//设置h1对象的内容为
//h1.textContent ="Hello World!";

/*function htm (a,b){
    return a+b;
}
alert(htm(1,7));

let html = document.querySelector('html');
html.onclick = function () {
    alert('别点我');
};*/

let myImage = document.querySelector('img');

myImage.onclick = function ( ) {
    let mySrc = myImage.getAttribute('src');
    if (mySrc ="images/firefox-icon.png") {
        myImage.setAttribute("src","images/firefox2.png");
    }
    else{
        myImage.setAttribute("src","images/firefox-icon.png")
    }
}

