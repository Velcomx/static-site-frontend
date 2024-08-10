const API_BASE_URL = "http://localhost:8000/contact";

const contactForm = document.querySelector(".contact-sec-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const phone = contactForm.querySelector('input[type="number"]').value;
  const description = contactForm.querySelector("textarea").value;

  const formData = {
    name: name,
    email: email,
    phone: phone,
    description: description,
  };
  sendContactForm(formData);
});

function sendContactForm(data) {
  const apiUrl = `${API_BASE_URL}/createContact`;
  const alertErrorMsg = document.querySelector(".alert-error-msg");
  const alertSuccessMsg = document.querySelector(".alert-success-msg");

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
    body: JSON?.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((responseData) => {
      if (responseData?.error) {
        alertErrorMsg.textContent = responseData?.message;
        alertErrorMsg.style.display = "block";
      } else {
        alertSuccessMsg.textContent = responseData?.message;
        alertSuccessMsg.style.display = "block";
      }

      contactForm.reset();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      alertErrorMsg.textContent = "Successfully submitted";
      alertErrorMsg.style.display = "block";
    });
  setTimeout(() => {
    alertSuccessMsg.style.display = "none";
    alertErrorMsg.style.display = "none";
  }, 5000);
}
