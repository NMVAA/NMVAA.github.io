function openTab(evt, tabId) {
    var tabcontent, tablinks, circle;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    circle = document.getElementsByClassName("circle");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tablinksActive", "");
         circle[i].className = circle[i].className.replace(" circleActive", "");
    }
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " tablinksActive";
    evt.currentTarget.firstElementChild.className += " circleActive";
    console.log(evt.currentTarget.firstElementChild);
}
=======

function openTab(evt, tabId) {
    var tabcontent, tablinks, circle;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    circle = document.getElementsByClassName("circle");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tablinksActive", "");
         circle[i].className = circle[i].className.replace(" circleActive", "");
    }
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " tablinksActive";
    evt.currentTarget.firstElementChild.className += " circleActive";
    console.log(evt.currentTarget.firstElementChild);
}
document.getElementById("default").click();
>>>>>>> 70390613a19c1bb4d142bd4acdef3d192ac6a60a
