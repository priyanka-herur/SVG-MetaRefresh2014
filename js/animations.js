$( document ).ready(function() {
    $( "p" ).text( "The DOM is now loaded and can be manipulated." );
//    Flapping animation
    $('#startFlap').click(function() {
        $('#rightwing').attr('class','right_wing');
    });   
    $('#stopFlap').click(function() {
        $('#rightwing').attr('class','');
        
    });
      $('#map .india #center_portion').mouseover(function() {
       	  $('#map .india #center_portion path').attr('fill','#ffffff');
       	  $('#map .india #chakra path').attr('fill','#000088');
        
    });
       $('#map .india #center_portion').mouseout(function() {
       	 $('#map .india #chakra path').attr('fill','#ffffff');
       	 $('#map .india #center_portion path').attr('fill','#d3d3d3');
    });

     

    var start = false;
    var pathPoints = "";
   var offsetValues ;
var drawPath = function () {
   
    $( "#svgCanvasForPath" ).bind({
        mousemove: function(e) {
            rect = document.getElementById('svgCanvasForPath').getBoundingClientRect(),
            offsetX = e.clientX - rect.left,
            offsetY = e.clientY - rect.top;
            var x = e.offsetX==undefined?offsetX:e.offsetX;
            var y = e.offsetY==undefined?offsetY:e.offsetY;
            pathPoints += " L " + (parseFloat(x) + 10)   + " " + (parseFloat(y) - 30);
            $( "#pathForDrawing" ).attr('d', pathPoints);
        }
    });
};

var stopDrawingPath = function () {
    start = false;
    $( "#svgCanvasForPath" ).unbind( "mousemove" );
    
};
$( "#svgCanvasForPath" ).bind({
      click: function(e) {
          if(!start) {
            start = true;
            rect = document.getElementById('svgCanvasForPath').getBoundingClientRect(),
            offsetX = e.clientX - rect.left,
            offsetY = e.clientY - rect.top;
            var x = e.offsetX==undefined?offsetX:e.offsetX;
            var y = e.offsetY==undefined?offsetY:e.offsetY;
            pathPoints = "M " + (parseFloat(x)  + 10)   + " " + (parseFloat(y) - 30);
            drawPath();
          } else {
            stopDrawingPath();
          }
      }
   });

 });