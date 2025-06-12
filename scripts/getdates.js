document.addEventListener("DOMContentLoaded", () => {
  const lastModifiedSpan = document.getElementById("lastModified");

  if (lastModifiedSpan) {
    const modifiedDate = new Date(document.lastModified);
    const formattedDate = modifiedDate.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    lastModifiedSpan.textContent = formattedDate;
  }
});







