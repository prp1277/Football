import react from 'react';

const xhttp = new XMLHttpRequest();
/**
 * onReadyStateChange specifies the function to
 */
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // What to do when document is ready
    document.getElementById("root").innerHTML = xhttp.responseText;
  }
};

xhttp.open("GET", "https://reddit.com/.json", true);
xhttp.send();
