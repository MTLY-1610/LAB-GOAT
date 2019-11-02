const textElement = document.getElementById("text");
const inputElement = document.querySelector("input");

let state = {};

function startGame() {
  showTextNode();
}

let currentTextNodeIndex = 0

function showTextNode() {

if (currentTextNodeIndex === 2||currentTextNodeIndex === 6||currentTextNodeIndex === 8||currentTextNodeIndex === 9) {
        const container = document.querySelector('.container')
        container.removeChild(container.children[2])
        container.removeChild(container.children[1])
    }

  const textNode = textNodes[currentTextNodeIndex];
  textElement.innerText = textNode.text;}


function submitAnswer() {
  const answer = inputElement.value;
  inputElement.value = "";

  // check the answer
  const textNode = textNodes[currentTextNodeIndex];
  if (answer.toUpperCase() === textNode.options[0].text) {
    currentTextNodeIndex = textNode.options[0].nextTextNode;
    showTextNode();
  }
  if (answer.toUpperCase() === textNode.options[1].text) {
    currentTextNodeIndex = textNode.options[1].nextTextNode;
    showTextNode();
  }
  if (answer.toUpperCase() === textNode.options[2].text) {
    currentTextNodeIndex = textNode.options[2].nextTextNode;
    showTextNode();
  }
}

  
function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

startGame();

