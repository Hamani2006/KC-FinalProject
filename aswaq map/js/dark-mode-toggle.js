function toggleDarkMode(newState) {
    var darkModeModification = `<style class='dark-mode-mod'>
            
        </style>`;
    if (newState == "on") {
        DarkReader.enable({ contrast: 150 });
        document.querySelector("div.dark-mode-toggle").firstElementChild.className = "gg-sun";
        document.head.insertAdjacentHTML("beforeend", darkModeModification);
        setCookie("darkmode", "on", 9999);
    }
    else {
        DarkReader.disable();
        document.querySelector("div.dark-mode-toggle").firstElementChild.className = "gg-moon";
        var cssMod = document.querySelector(".dark-mode-mod");
        if (cssMod) {
            cssMod.parentElement.removeChild(cssMod);
        }
        setCookie("darkmode", "off", 9999);
    }
}

document.querySelector("div.dark-mode-toggle").addEventListener("click", function () {
    if (document.querySelector(".darkreader")) {
        toggleDarkMode("off");
    }
    else {
        toggleDarkMode("on");
    }
}, false);

// // code from w3schools to set a cookie (https://www.w3schools.com/js/js_cookies.asp)
// // parameters: name of the cookie, value to set, number of days until it expires
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// // code from w3schools to get the value of a cookie (https://www.w3schools.com/js/js_cookies.asp)
// // parameters: name of the cookie
// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

// // when the page loads, toggle dark mode according to the cookie settings
// window.addEventListener("load", function () {
//     // get the dark mode cookie value
//     var darkModeCookie = getCookie("darkmode");
//     // if the cookie is set to "on", turn on dark mode
//     if (darkModeCookie == "on") {
//         // toggle dark mode
//         toggleDarkMode(darkModeCookie);
//     }
// }, false);