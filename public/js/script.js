// Get the modal
var modal = document.getElementsByClassName("contact");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
$('#contact').click (function() {
  $('.contact').css("display","block")
})

// // When the user clicks on <span> (x), close the modal
$('#x').click (function() {
  $('.contact').css("display","none")
})
  // preventdefault();
  // $('contact').css("display","none")


// When the user clicks anywhere outside of the modal, close it

$("#postContact").on('click',function() {
  console.log(this);
})


