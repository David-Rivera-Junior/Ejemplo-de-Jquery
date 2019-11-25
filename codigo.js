var x;
x = $(document);
x.ready(inicializar);

function inicializar() {
    var x;
    x = $("#hola");
    x.click(clickHecho);
}
function clickHecho() {
    var x;
    x = $("#hola");
    x.css("color", "green");
}
var p;
p = $(document);
p.ready(obtener);

function obtener() {
    var p;
    p = $("#dave");
    p.click(clickfin);
}
function clickfin() {
    var p;
    p = $("#dave");
    p.css("color", "red");
    p.css("background-color", "yellow");
    p.css("font-size", "24px");
    p.css("border", "1px solid black");
    p.css("width", "200px");
    p.css("height", "100px");
}