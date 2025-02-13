function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "i am a loli") {
        window.location.href = "welcome.html";
    } else {
        document.getElementById("error-message").classList.remove("hidden");
    }
}

function revealLove() {
    document.getElementById("love-message").classList.remove("hidden");
}