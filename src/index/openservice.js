export default function openService(evt, serviceName) {
    // Declare all variables
    var i, tabcontent, service;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="service" and remove the class "active"
    service = document.getElementsByClassName("service");
    for (i = 0; i < service.length; i++) {
      service[i].className = service[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(serviceName).style.display = "block";
    evt.currentTarget.className += " active";
}