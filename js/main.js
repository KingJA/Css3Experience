/**
 * Created by Administrator on 2016/12/14.
 */
window.onload = function () {
    "use strict";
    var x = 3.14;
    console.log("window.innerHeight" + window.innerHeight);
    console.log("window.innerWidth " + window.innerWidth);
    console.log("screen.availWidth" + screen.availWidth);
    console.log("screen.availHeight" + screen.availHeight);
    console.log("location.hostname" + location.hostname);
    console.log("location.pathname" + location.pathname);
    console.log("location.port " + location.port);
    console.log("location.protocol " + location.protocol);
        var interval=setInterval(function () {
     console.log("hh");
     },1000);
    setTimeout(interval, 0);


    document.getElementById("button2").onclick = function () {
        document.getElementById("div1").innerHTML = "button2点击";
        var person = {name: "TOM", age: 18};
        var name = person.name;
        var age = person["age"];
    }
}

function showDiv() {
    console.log("showDiv");
    var div1 = document.getElementById("div1");
    div1.innerHTML = "<h3>h3标题</h3>";
}
