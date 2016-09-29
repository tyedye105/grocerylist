$(document).ready(function() {
  $("form").submit(function(event) {
  var groceries = [ 1, 2, 3, 4, 5]

  groceries.map(function(grocery){
    var userInput = $("#input" + grocery).val();

    $(".item" + grocery).text(userInput);

  });


  $("#input-form").hide();
  $("#results").show();
  event.preventDefault();
  });
});
