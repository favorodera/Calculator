function toggleDarkMode() {
    let bodyDarkMode = document.body;
    bodyDarkMode.style.backgroundColor = "rgba(23, 23, 28, 1)";

    let containerDarkMode = document.getElementById ("projectContainer");
    containerDarkMode.style.backgroundColor ="rgba(23, 23, 28, 1)";

    let resultDarkMode = document.getElementById ("result");
    resultDarkMode.style.color = "rgba(255, 255, 255, 1)";
}

function toggleLightMode() {
    let bodyLightMode = document.body;
    bodyLightMode.style.backgroundColor = "rgba(241, 242, 243, 1)";

    let containerLightMode = document.getElementById ("projectContainer");
    containerLightMode.style.backgroundColor ="rgba(241, 242, 243, 1)";

    let resultLightMode = document.getElementById ("result");
    resultLightMode.style.color = "rgba(0, 0, 0, 1)";
}