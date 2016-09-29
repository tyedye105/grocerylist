$(document).ready(function() {
  $("form#input-form").submit(function(event) {
  var groceries = [ 1, 2, 3, 4, 5];
  var newList = [];

  groceries.forEach(function(grocery){
    var userInput = $("#input" + grocery).val();
    
    newList.push(userInput);
  });
  var anotherList = newList.map(function(item) {
    return item.toUpperCase();
  });
  var orderedList = anotherList.sort();
  alert(orderedList);

  $("#input-form").hide();
  $("#results").show();
  event.preventDefault();
  });
});
