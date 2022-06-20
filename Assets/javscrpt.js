var darkMode = false;
var bgColor = "#353548";

function ToggleDarkMode(){
    darkMode = !darkMode;
    if(darkMode){
        activateDarkMode();
    }else{
        deactivateDarkMode();
    }
}

function activateDarkMode(){
    document.getElementsByTagName("body")[0].classList.add("dark-mode");

    let divs = document.getElementsByClassName("group");
    for (let _i = 0; _i < divs.length; _i++) {
        const element = divs[_i];
        element.classList.add("dark-mode-group");
        element.classList.remove("light-mode-group");
    }

    document.getElementById("toggle-img").src="/Assets/imgs/sun.svg";
    document.getElementById("insta-logo").src="/Assets/imgs/logo-darkmode.png";

    const toggle = document.getElementsByClassName("mode-toggle")[0];
    toggle.classList.add("mode-toggle-dark");
    toggle.classList.remove("mode-toggle");
}

function deactivateDarkMode(){
    document.getElementsByTagName("body")[0].classList.remove("dark-mode");

    let divs = document.getElementsByClassName("group");
    for (let _i = 0; _i < divs.length; _i++) {
        const element = divs[_i];
        element.classList.add("light-mode-group");
        element.classList.remove("dark-mode-group");
    }

    document.getElementById("toggle-img").src="/Assets/imgs/moon.svg";
    document.getElementById("insta-logo").src="/Assets/imgs/logo.png";

    const toggle = document.getElementsByClassName("mode-toggle-dark")[0];
    toggle.classList.add("mode-toggle");
    toggle.classList.remove("mode-toggle-dark");
}
