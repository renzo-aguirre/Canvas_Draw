var l_number = document.getElementById("l_number");
var btn = document.getElementById("btn");
btn.addEventListener("click", drwForClick);

var b = document.getElementById("board");
var b_width = b.width;
var b_height = b.height;
var canvas = b.getContext("2d");

function drwForClick()
{
    var lines = parseInt(l_number.value);
    var l = 0;
    var l_color = "black";
    var space = b_width / lines;

for(l = 0; l < lines; l++)
{
    yi = space * l;
    xf = space * (l + 1);
    drwLine("#36393E", 0, yi, xf, 500);
}

for(l = 0; l < lines; l++)
{
    yi = space * l;
    xf = space * (l + 1);
    drwLine("#36393E", yi, 0, 500, xf);
}

drwLine(l_color, 1, 1, 1, 499);
drwLine(l_color, 1, 499, 499, 499);

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

