// https://usebasin.com/f/476f85219509

var $form = document.getElementById('email'),
  $paper= document.getElementsByClassName('paper')[0],
  $nameField = document.getElementsByName('name')[0],
  $replytoField = document.getElementsByName('_replyto')[0],
  $submit = document.getElementById('submit');

// close envelope, unless fields are invalid
$submit.addEventListener('mouseover', function() {
  console.log($nameField.checkValidity(),$replytoField.checkValidity())
  if ($nameField.checkValidity() && $replytoField.checkValidity()) {
    $form.classList.add('sending');
  } else {
    if ($nameField.checkValidity()) {
      $nameField.setCustomValidity('Please enter name');
    }
    $form.classList.add('required');
  }
})
//open envelope, also name it so it can be disabled while posting
var notSending = function() {
  $form.classList.remove('sending','required');
}
$submit.addEventListener('mouseleave', notSending)

// submit form 
$submit.addEventListener('mouseup', function(event) {
  var formData = new FormData($form);
  var xhr = new XMLHttpRequest();
  //prevent redirect
  event.preventDefault();
  //keep envelope closed while sending 
  $submit.removeEventListener('mouseleave', notSending)
  xhr.open("POST", $form.action, true);
  xhr.onload = function(e) {
    console.log(xhr);
    var response = JSON.parse(xhr.response);
    if (xhr.status === 200) {
      //activate animation, then remove it when finished
      $form.classList.add('sent');
      setTimeout(function() {
        $form.classList.remove('sent');
        //open the letter once sent
        $submit.addEventListener('mouseleave', notSending);
      }, 1450);
      // delay opening of letter to prevent glitches
      setTimeout(function(){
        $form.classList.remove('sending');
      }, 1550);
      // change button to say sent when it reappears
      setTimeout(function() {
        $submit.innerHTML = "Sent!";
      }, 1000)
      // reset button
      $paper.addEventListener('mouseover', function() {
        $submit.innerHTML = "Submit";
        $paper.removeEventListener('mouseover', this);
      })
      $form.reset();
    } else {
      //change button to an error button
      $submit.innerHTML = "Error";
      $submit.classList.add('error');
      //log error in console for some reason
      console.error(response.error);
      // re-add event listener so people can maybe fix their message 
      $submit.addEventListener('mouseleave', notSending);
      // then if they mouse over the message remove the error button
      $paper.addEventListener('mouseover', function() {
        $submit.innerHTML = "Submit";
        $submit.classList.remove('error');
        $paper.removeEventListener('mouseover', this);
      })
    }
  };
  xhr.send(formData);
});
