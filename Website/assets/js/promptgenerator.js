const promptGeneratorButton = document.getElementById('prompt-generator-button');
const createYourOwnButton = document.getElementById('create-your-own-button');
const promptGeneratorDiv = document.querySelector('.prompt-generator');
const createYourOwnDiv = document.querySelector('.create-your-own');

// By default, show the prompt generator div and hide the create your own div
promptGeneratorDiv.style.display = 'block';
createYourOwnDiv.style.display = 'none';

promptGeneratorButton.addEventListener('click', () => {
    promptGeneratorDiv.style.display = 'block';
    createYourOwnDiv.style.display = 'none';
    updateDisplayDiv();
});

createYourOwnButton.addEventListener('click', () => {
    promptGeneratorDiv.style.display = 'none';
    createYourOwnDiv.style.display = 'block';
    updateDisplayDiv();
});

const displayDiv = document.getElementById('display-div');

const dropdown1 = document.getElementById('dropdown1');
const dropdown2 = document.getElementById('dropdown2');
const dropdown3 = document.getElementById('dropdown3');
const customPromptTextarea = document.getElementById('custom-prompt-textarea');
const submitButton = document.getElementById('submit-button');

dropdown1.addEventListener('change', updateDisplayDiv);
dropdown2.addEventListener('change', updateDisplayDiv);
dropdown3.addEventListener('change', updateDisplayDiv);

submitButton.addEventListener('click', updateDisplayDiv);

function updateDisplayDiv() {
    if (promptGeneratorDiv.style.display === 'block') {

        const dropdown1Value = dropdown1.value;
        const dropdown2Value = dropdown2.value;
        const dropdown3Value = dropdown3.value;

        displayDiv.innerHTML = `The image should be a <strong>${dropdown1Value}</strong> in the style of <strong>${dropdown2Value}</strong> and be set against a <strong>${dropdown3Value}</strong> background.`;

    } else {
        const customPromptValue = customPromptTextarea.value;
        displayDiv.innerHTML = customPromptValue;

    }

    // Reset copy button if value changes
    copyButton.style.backgroundColor = ''
}

const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(displayDiv);
    window.getSelection().addRange(range);

    const success = document.execCommand('copy');

    // Clear the selection
    window.getSelection().removeAllRanges();

    if (success) {
        copyButton.style.backgroundColor = 'green';
    }
});

// logs the value that the user has written, later send the value through the api here
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(document.getElementById('custom-prompt-input').value);
});
//set the default prompts into the prompt preview
window.onload = function () {
    updateDisplayDiv();
}