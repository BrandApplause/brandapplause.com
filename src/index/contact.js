// https://usebasin.com/f/476f85219509

var $form = document.getElementById('email'),
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
      $submit.innerHTML = "Success";
      $form.reset();
    } else {
      $submit.innerHTML = "Error";
      console.log(response.error);
      $submit.addEventListener('mouseleave', notSending);      
    }
  };
  xhr.send(formData);
});
