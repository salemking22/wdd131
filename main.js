document.addEventListener("DOMContentLoaded", function () {
    let lastModifiedDate = new Date(document.lastModified);

    let formattedDate = lastModifiedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    let formattedTime = lastModifiedDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    document.getElementById("lastModified").textContent = `Last Modified: ${formattedDate} at ${formattedTime}`;
});




