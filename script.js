document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("homeBtn").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("aboutBtn").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("memberBtn").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("member").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("contactBtn").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
});
