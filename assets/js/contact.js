document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const subjectInput = document.getElementById("subject");
  const status = document.getElementById("contact-status");

  if (!form) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const requestedSubject = params.get("subject");
  if (requestedSubject && subjectInput) {
    subjectInput.value = requestedSubject;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const subject = document.getElementById("subject")?.value.trim() || "Portfolio Inquiry";
    const message = document.getElementById("message")?.value.trim() || "";

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message
    ].join("\n");

    const mailto = `mailto:btmolloy2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    if (status) {
      status.textContent = "Your email app should open with a prefilled draft.";
    }
  });
});
