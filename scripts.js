var l_number = document.getElementById("l_number");
var btn = document.getElementById("btn");
btn.addEventListener("click", drwForClick);

var btn = document.getElementById("c_btn");
btn.addEventListener("click", drwClear);

var b = document.getElementById("board");
var b_width = b.width;
var b_height = b.height;
var canvas = b.getContext("2d");
var l_color = "black";

drwLine(l_color, 1, 1, 1, 499);
drwLine(l_color, 1, 499, 499, 499);

drwLine(l_color, 499, 1, 1, 1);
drwLine(l_color, 499, 499, 499, 1);

function drwForClick()
{
    var lines = parseInt(l_number.value);
    var l = 0;
    var space = b_width / lines;

for(l = 0; l < lines; l++)
{
    yi = space * l;
    xf = space * (l + 1);
    drwLine("black", 0, yi, xf, 500);
}

for(l = 0; l < lines; l++)
{
    yi = space * l;
    xf = space * (l + 1);
    drwLine("black", yi, 0, 500, xf);
}

}



function drwLine(color, x_initial, y_initial, x_final, y_final)
{
    canvas.beginPath();
    canvas.strokeStyle = color;
    canvas.moveTo(x_initial, y_initial);
    canvas.lineTo(x_final, y_final);
    canvas.stroke();
    canvas.closePath();
}

function drwClear()
{
    var lines = parseInt(l_number.value);
    var l = 0;
    var space = b_width / lines;

for(l = 0; l < lines; l++)
{
    yi = space * l;
    xf = space * (l + 1);
    drwLine("white", 0, yi, xf, 500);
}

for(l = 0; l < lines; l++)
{
    yi = space * l;
    xf = space * (l + 1);
    drwLine("white", yi, 0, 500, xf);
}

}