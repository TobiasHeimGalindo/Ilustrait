function goToFaq() {
  const faqDiv = document.getElementById("finalFAQ");
  faqDiv.scrollIntoView({ behavior: 'smooth' });
}




const promptGeneratorButton = document.getElementById(
  "prompt-generator-button"
);
const createYourOwnButton = document.getElementById("create-your-own-button");
const promptGeneratorDiv = document.querySelector(".prompt-generator");
const createYourOwnDiv = document.querySelector(".create-your-own");

// By default, show the prompt generator div and hide the create your own div
promptGeneratorDiv.style.display = "block";
createYourOwnDiv.style.display = "none";

promptGeneratorButton.addEventListener("click", () => {
  promptGeneratorDiv.style.display = "block";
  createYourOwnDiv.style.display = "none";
  updateDisplayDiv();
});

createYourOwnButton.addEventListener("click", () => {
  promptGeneratorDiv.style.display = "none";
  createYourOwnDiv.style.display = "block";
  updateDisplayDiv();
});

const displayDiv = document.getElementById("display-div");

const dropdown1 = document.getElementById("dropdown1");
const dropdown2 = document.getElementById("dropdown2");
const dropdown3 = document.getElementById("dropdown3");
const customPromptTextarea = document.getElementById("custom-prompt-textarea");
const submitButton = document.getElementById("submit-button");
const printButton = document.getElementById("print-button");
var image = document.getElementById("selectedImage");

dropdown1.addEventListener("change", updateDisplayDiv);
dropdown2.addEventListener("change", updateDisplayDiv);
dropdown3.addEventListener("change", updateDisplayDiv);

function updateDisplayDiv() {
  if (promptGeneratorDiv.style.display === "block") {
    const dropdown1Value = dropdown1.value;
    const dropdown2Value = dropdown2.value;
    const dropdown3Value = dropdown3.value;

    displayDiv.innerHTML = `The image should be a <strong>${dropdown1Value}</strong> in the style of <strong>${dropdown2Value}</strong> and be set against a <strong>${dropdown3Value}</strong> background.`;
  } else {
    const customPromptValue = customPromptTextarea.value;
    if (customPromptValue.trim() === "") {
      displayDiv.innerHTML =
        '<small id="customPromptHelp" class="form-text text-muted">Copy your prompts here</small>';
    } else {
      displayDiv.innerHTML = customPromptValue;
    }
  }

  // Reset copy button if value changes
  copyButton.style.backgroundColor = "";
}

function submitPrompt() {
  const customPromptValue = customPromptTextarea.value;
  console.log("button clicked", customPromptValue);

  if (customPromptValue.trim !== "") {
    sendPrompt(customPromptValue);
    console.log("sendPrompt aufgerufen!", customPromptValue);
  }
}

const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNode(displayDiv);
  window.getSelection().addRange(range);

  const success = document.execCommand("copy");

  // Clear the selection
  window.getSelection().removeAllRanges();

  if (success) {
    copyButton.style.backgroundColor = "green";
  }
});

// logs the value that the user has written, later send the value through the api here

document.querySelector("form").addEventListener("submit", (textvalue) => {
  textvalue.preventDefault();
});

async function sendPrompt(promptText) {
  console.log("sendGrid wurde aufgerufen!", promptText);
  const data = {
    prompt: promptText,
  };

  submitButton.disabled = true;
  printButton.disabled = true;

  // show spinner and hide image
  document.getElementById("spinner").classList.remove("d-none");
  document.getElementById("selectedImage").classList.add("d-none");

  // correct one:
  // https://hook.eu1.make.com/3vrcuwm8fy53s56oa3pjwxe661c20ngp
  // backup:
  // https://hook.eu1.make.com/itk399jo9vrbji3y4x2yg565h4bj98rv
  await fetch("https://hook.eu1.make.com/3vrcuwm8fy53s56oa3pjwxe661c20ngp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      image.src = data["imageurl"];
      localStorage.setItem("imageUrl", data["imageurl"]);
      localStorage.setItem("promptText", promptText);
      submitButton.disabled = false;
      printButton.disabled = false;
      printButton.classList.remove("d-none");

      // hide spinner and show image
      document.getElementById("spinner").classList.add("d-none");
      document.getElementById("selectedImage").classList.remove("d-none");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function redirectToProduct() {
  window.location.href = "product-details.html";
}

window.addEventListener("load", updateDisplayDiv);
