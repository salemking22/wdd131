document.addEventListener("DOMContentLoaded", function () {
    // Get last modified date from the document
    let lastModifiedDate = new Date(document.lastModified);

    // Format the date properly
    let formattedDate = lastModifiedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Format the time properly
    let formattedTime = lastModifiedDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true // Ensures AM/PM format
    });

    // Display the formatted date and time
    document.getElementById("lastModified").textContent = `Last Modified: ${formattedDate} at ${formattedTime}`;
});



