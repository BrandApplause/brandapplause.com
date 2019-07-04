// https://usebasin.com/f/476f85219509

var $form = document.getElementById('email'),
  $paper= document.getElementsByClassName('paper'),
  $submit = document.getElementById('submit');

// close envelope
$submit.addEventListener('mouseover', function() {
  $form.classList.add('sending');
})
//open envelope, also name it so it can be disabled while posting
var notSending = function() { $form.classList.remove('sending'); }
$submit.addEventListener('mouseleave', notSending)


// submit form 
$submit.addEventListener('mouseup', function(event) {
  //prevent redirect
  event.preventDefault();
  //keep envelope closed while sending 
  $submit.removeEventListener('mouseleave', notSending)
  
  var formData = new FormData($form);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", $form.action, true);
  xhr.onload = function(e) {
    console.log(xhr);
    var response = JSON.parse(xhr.response);
    if (xhr.status === 200) {
      $submit.innerHTML = "Sent!";
      //activate animation, then remove it when finished
      $form.classList.add('sent');
      setTimeout(function() {
        $form.classList.remove('sent');
        //open the letter once sent
        $submit.addEventListener('mouseleave', notSending);
        $form.classList.remove('sending');
      }, 1450);
      // reset button
      $paper[0].addEventListener('mouseover', function() {
        $submit.innerHTML = "Submit";
        $paper[0].removeEventListener('mouseover', this);
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
      $paper[0].addEventListener('mouseover', function() {
        $submit.innerHTML = "Submit";
        $submit.classList.remove('error');
        $paper[0].removeEventListener('mouseover', this);
      })
    }
  };
  xhr.send(formData);
});
