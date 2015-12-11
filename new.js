//Problem: not mobile compatible
//Solution: Hide text-links, swap them out with a more appropriate navigation

//create a select and append to #menu
var $select = $("<select></select>");

$("#menu").append($select);

//cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  
  //create an option
  var $option = $("<option></option>");
  
  
//deal with selected options depending on current page
if($anchor.parent().hasClass("selected")){
  $option.prop("selected", true);
}
  //options value is href of link
  $option.val($anchor.attr("href"));
  //options text is the text of link
  $option.text($anchor.text());
  
  //append option to select
  $select.append($option);
  });

//create button to click to go to select location
/*var $button = $("<button>go</button>");
$("#menu").append($button); 

// bind change listener to the select
 $button.click(function(){
  //go to select's location
  window.location = $select.val();
});
*/

//bind change listener to the select
$select.change(function(){
//go to selected location
  window.location = $select.val()
});

