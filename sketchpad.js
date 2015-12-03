$(function() {

  var gridPixels = 960;
  var gridSize;
  var $grid = $("#grid");
  var $box;
  var size = 30;
  var colorClass = $("#colorchoice").val();

  /*Function to generate/update the grid*/
  function createGrid() {
    gridSize = Math.ceil($("input#gridsize").val());
    if(isNaN(gridSize) || gridSize > 96) {
      console.log("fail");
    }
    else {
      $(".box").remove();
      size = (gridPixels/gridSize) - 2;
      for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j < gridSize; j++) {
          $box = $("<div></div>").addClass("box").appendTo($grid);
          $box.css({
            "width": size,
            "height": size
          });
          if(j === 0) {
            $box.css("clear", "left");
          }
        }
      }
    }
  }

  /*Generate the initial grid of 32x32*/
  createGrid();

  /*Regenerate grid if generate button is clicked*/
  $("#generategrid").on("click", function() {
    createGrid();
  });

  /*Remove color class from all boxes if clear button is clicked*/
  $("#cleargrid").on("click", function() {
    $(".box").attr("class", "box");
  });

  /*Change current color class if dropdown menu value is changed*/
  $("#colorchoice").on("change", function() {
    colorClass = $(this).val();
  });

  /*Add color class to current box if mouse enters it*/
  $("#grid").on("mouseenter", ".box", function() {
    $(this).attr("class", "box");
    $(this).addClass(colorClass);
  });

});
