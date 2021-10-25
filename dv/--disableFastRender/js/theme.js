// Dark theme time
var themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('click',
    function(event) {
        SwapTheme(); // update color theme
    })

themeSwitch.addEventListener("load", SetTheme())

function SwapTheme(){
    console.log(sessionStorage.getItem("theme"))
    if (sessionStorage.getItem("theme") == "darktheme"){
        //swap to light theme
        sessionStorage.setItem("theme","lighttheme");
        themeSwitch.classList.add("lighttheme");
        document.body.classList.add("lighttheme");

        document.body.classList.remove("darktheme");
        themeSwitch.classList.remove("darktheme");
    } else {
        //dark theme
        sessionStorage.setItem("theme","darktheme");
        themeSwitch.classList.add("darktheme");
        document.body.classList.add("darktheme");

        document.body.classList.remove("lighttheme");
        themeSwitch.classList.remove("lighttheme");
    }
}

function SetTheme() {
    document.cookie = "theme=darktheme";




    if (sessionStorage.getItem("theme") == null) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            //dark theme
            sessionStorage.setItem("theme","darktheme");
            themeSwitch.classList.add("darktheme");
            document.body.classList.add("darktheme");
            document.cookie = "theme=darktheme";

            document.body.classList.remove("lighttheme");
        } else {
            //default to light theme
            sessionStorage.setItem("theme","lighttheme");
            themeSwitch.classList.add("lighttheme");
            document.body.classList.add("lighttheme");
            document.cookie = "theme=lighttheme";

            document.body.classList.remove("darktheme");
        }
    } else if (sessionStorage.getItem("theme") == "darktheme") {
        //dark theme
        themeSwitch.classList.add("darktheme");
    } else if (sessionStorage.getItem("theme") == "lighttheme") {
        //light theme
        themeSwitch.classList.add("lighttheme");

    }
}

