// cache elements
var $selectors = document.getElementsByClassName("service"),
  $tabs = document.getElementsByClassName("tab-content"),
  $selectorLinks = document.querySelectorAll("[tab]");

// apply class to selected tab and remove class from all other tabs
var chooseTab = function (select) {
  for (var i = 0; i < $selectors.length; i++) {
    $selectors[i].classList.remove("active");
    $tabs[i].classList.remove("active");
  }
  $selectors[select].classList.add("active");
  $tabs[select].classList.add("active");
};

// add event listeners to elements with the class '.selectors'
for (var i = 0; i < $selectors.length; i++) {
  // use a javascript closure to pass i into the callback
  (function (i) {
    $selectors[i].addEventListener("mouseup", function () {
      chooseTab(i);
    });
  })(i);
}

// add event listeners to elements with the attribute tab
for (var i = 0; i < $selectorLinks.length; i++) {
  (function (i) {
    $selectorLinks[i].addEventListener("mouseup", function () {
      chooseTab($selectorLinks[i].getAttribute("tab"));
    });
  })(i);
}
