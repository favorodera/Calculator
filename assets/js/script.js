function toggleDarkMode() {
    let bodyDarkMode = document.body;
    bodyDarkMode.style.backgroundColor = "rgba(23, 23, 28, 1)";

    let containerDarkMode = document.getElementById ("projectContainer");
    containerDarkMode.style.backgroundColor ="rgba(23, 23, 28, 1)";

    let resultDarkMode = document.getElementById ("result");
    resultDarkMode.style.color = "rgba(255, 255, 255, 1)";
}