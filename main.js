document.addEventListener("DOMContentLoaded", function () {
    let lastModifiedDate = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate.toLocaleString();
});


