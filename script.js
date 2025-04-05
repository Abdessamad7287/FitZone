function sendEmail() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let form = document.querySelector(".contact-form");
    let successSound = document.getElementById("successSound");
    let errorSound = document.getElementById("errorSound");

    if (name === "" || email === "" || message === "") {
            form.classList.add("shake");
            errorSound.play();
            setTimeout(() => {
                form.classList.remove("shake");
            }, 500);
        } else {
            form.classList.add("celebrate");
            successSound.play();
            setTimeout(() => {
                form.classList.remove("celebrate");
            }, 500);
            setTimeout(() => form.classList.remove("celebrate"), 500);
            setTimeout(() => {
                alert("Email sent successfully!");
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            }, 1000)
}
}
