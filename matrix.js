var draw;

$('document').ready(function () {
    var matrix = document.getElementById('matrix');
    draw = matrix.getContext("2d");
    renderMatrix();
});

function drawCircle(centerX,centerY,radius,color)
{
    draw.beginPath();
    draw.arc(centerX, centerY, radius, 0,2 * Math.PI);
    draw.fillStyle = color;
    draw.fill();
    draw.stroke();
}


function renderMatrix()
{
    var array = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    setInterval(function ()
    {
        array = moveArrayElementPostionDiagonal(array);
        CreateMatrix(array);
    },100);
}


function CreateMatrix(array)
{
    centerX = -20;
    centerY = 20;

    for (var row = 0; row < array.length; row++)
    {
        for (var column = 0; column < array[row].length; column++)
        {

            centerX += 30;

            if (array[row][column] == 1)
                var color = 'red';
            else
                var color = 'black';
            
            drawCircle(centerX, centerY, 10, color);
            
        }
        centerY += 30;
        centerX = -20;
    }
}

function moveArrayElementPostionDown(array)
{
    var outerArray = [];

    for (var row = 0; row < array.length; row++)
    {
        if (row == array.length - 1)
            outerArray[0] = array[array.length - 1];
        else
            outerArray[row + 1] = array[row];
    }
    return outerArray;
}

function moveArrayElementPostionDiagonal(array)
{
    array = moveArrayElementPostionLeft(array);
    array = moveArrayElementPostionDown(array);

    return array;
}


function moveArrayElementPostionLeft(array)
{
    innerArray = [];
    outerArray = [];

    for (var row = 0; row < array.length; row++)
    {
        for (var column = 0; column < array[row].length; column++)
       {
            if (column == array[row].length - 1)
                innerArray[0] = array[row][array[row].length -1];
            else
                innerArray[column + 1] = array[row][column];
       }
        outerArray.push(innerArray);
        innerArray = [];
    }
    return outerArray;
}