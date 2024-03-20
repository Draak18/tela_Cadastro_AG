document.addEventListener("DOMContentLoaded", function() {
    var inputField = document.getElementById("myInput");

    inputField.addEventListener("focus", function() {
        if (inputField.value === "") {
            inputField.value = inputField.placeholder;
        }
    });

    inputField.addEventListener("blur", function() {
        if (inputField.value === inputField.placeholder) {
            inputField.value = "";
        }
    });
});