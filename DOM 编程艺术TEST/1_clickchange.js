var beatles = Array(4);
beatles[0] = "aaaa";
beatles[1] = "bbbb";
beatles[2] = "cccc";
beatles[3] = "dddd";
// alert(beatles);
// getAttribute是获取属性值
// var p1 = document.getElementById("p1");
// alert(p1.getAttribute("title"));
// p1.setAttribute("title","a list of goods");
// alert(p1.getAttribute("title"));

// window.onload = function(){
//     var body_element = document.getElementsByTagName("body")[0];
//     alert(body_element.nodeType);

// }

var p = document.getElementsByTagName("p")[0];
alert(p.childNodes[0].nodeValue);
p.firstChild.nodeValue = "这是一个新的p标签";

var my_window = window.open("","new page","width=330,height=330");
my_window.document.write("aaaaaa");
my_window.focus;