
function showMessage(message) {
    alert(message);
}

function showSection(section) {
    document.getElementById("section-title").textContent = section;

    const buttons = document.querySelectorAll(".menu-item");

    buttons.forEach(button => {
        button.classList.remove("active");

        if (button.textContent.trim() === section) {
            button.classList.add("active");
        }
    });
}
